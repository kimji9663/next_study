import Link from 'next/link';
import Header from '../components/Header';
import { useState, useMemo } from 'react';

// 한화 화폐 단위 포멧(세자릿수마다 콤마)
const formatter = Intl.NumberFormat( 'ko-KR' );

// 상태 State
export default function Order() {

  // [ 일기전용, 쓰기전용 ] = useState( 기본값 );
  const [ hasEspresso, setEspresso ] = useState( false );
  const [ hasAmericano, setAmericano ] = useState( false );
  const [ hasLatte, setLatte ] = useState( false );

  const sum = useMemo( () => {
    console.log( 'useMemo 실행' );
    let value = 0;
    value += hasEspresso ? 2800 : 0;
    value += hasAmericano ? 3000 : 0;
    value += hasLatte ? 3500 : 0;
    return value;
  }, [ hasEspresso, hasAmericano, hasLatte ] );

  return <>
    <div className="container">
        <Header/>
        <h1 className="font-bold">Order</h1>

        <h2 className="text-xl font-bold">메뉴판</h2>

        <dl>
          <dt>에스프레소</dt>
          <dd>2,800원 
            <small><button onClick={ () => setEspresso( !hasEspresso ) } type="button">[ { hasEspresso ? '선택 해제' : '선택'} ]</button></small>
          </dd>

          <dt>아메리카노</dt>
          <dd>3,000원 
            <small><button onClick={ () => setAmericano( !hasAmericano ) } type="button">[ { hasAmericano ? '선택 해제' : '선택'} ]</button></small>
          </dd>

          <dt>카페라떼</dt>
          <dd>3,500원 
            <small><button onClick={ () => setLatte( !hasLatte ) } type="button">[ { hasLatte ? '선택 해제' : '선택'} ]</button></small>
          </dd>
        </dl>

        <hr/>

        <h2 className="text-xl font-bold">주문서</h2>
        <ul className="list-unstyled">
          { hasEspresso && <li>에스프레소</li> }
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
