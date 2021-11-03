import Link from 'next/link';
import Header from '../components/Header';
import { useState, useMemo, Fragment } from 'react';

// 한화 화폐 단위 포멧(세자릿수마다 콤마)
const formatter = Intl.NumberFormat( 'ko-KR' );

const data = [
  {name: '에스프레소',  price: 2800},
  {name: '아메리카노',  price: 3000},
  {name: '카페라떼',  price: 3500},
];


// 상태 State
export default function Order() {

  // [ 읽기전용, 쓰기전용 ] = useState( 기본값 );
  const [ hasEspresso, setEspresso ] = useState( false );
  const [ hasAmericano, setAmericano ] = useState( false );
  const [ hasLatte, setLatte ] = useState( false );
  const [ selected, setSelected ] = useState( [] );
  console.log( 'selected', selected );

  const sum = useMemo( () => {
    console.log( 'useMemo 실행' );
    let value = 0;
    value += hasEspresso ? 2800 : 0;
    value += hasAmericano ? 3000 : 0;
    value += hasLatte ? 3500 : 0;
    return value;
  }, [ selected ] );

  return <>
    <div className="container">
        <Header/>
        <h1 className="font-bold">Order</h1>
        <h2 className="text-xl font-bold">메뉴판</h2>
        
        <dl>
          {
            data.map( element => (
              <Fragment key={ element.name }>
                <dt>{ element.name }</dt>
                <dd>
                  { formatter.format( element.price ) }원

                  <small>
                    <button onClick={ () => {
                      if( selected.includes( element ) ){
                        setSelected( selected.filter( item => item !== element ) );
                      }
                      else {
                        setSelected( [...selected, element] ); // element는 { name: '에스프레소', price: 2800 }
                      }
                    }}>
                      [ { selected.includes( element ) ? '선택 해제' : '선택' } ]
                    </button>
                  </small>
                </dd>
              </Fragment>
            ) )
          }
        </dl>

        <hr/>

        <h2 className="text-xl font-bold">주문서</h2>
        <ul className="list-unstyled">
          { selected.map( item => <li key={ item.name }>{ item.name }</li> ) }
        </ul>
        <p>합계 : { formatter.format(sum) }원</p>

        <div className="mt-4">
          <button className="btn btn-primary btn-lg" onClick={ () => {
            confirm( `주문 합계는 ${formatter.format( sum )}원 입니다. 주문이 완료되었습니다.`)
          }}>주문하기</button>
        </div>
    </div>
  </>
}
