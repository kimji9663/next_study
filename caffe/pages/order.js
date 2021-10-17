import Link from 'next/link';
import Header from '../components/Header';
import { useState } from 'react';

// 한화 화폐 단위 포멧(세자릿수마다 콤마)
const formatter = Intl.NumberFormat( 'ko-KR' );

// 상태 State
export default function Order() {
  console.log('함수컴포넌트 시작');
  let number = 0;
  console.log( 'number : ', number );
  number++;
  console.log( 'number : ', number );

  // [ 일기전용, 쓰기전용 ] = useState( 기본값 );
  const [ hasEspresso, setEspresso ] = useState( false );
  const [ hasAmericano, setAmericano ] = useState( false );
  const [ hasLatte, setLatte ] = useState( false );
  let sum = 0;
  sum += hasEspresso ? 2800 : 0;
  sum += hasAmericano ? 3000 : 0;
  sum += hasLatte ? 3500 : 0;

  const [ count, setCount ] = useState(0);

  console.log('랜더링 시작');

  return <>
    <div className="container">
        <Header/>
        
        <h1>Order</h1>
        <h2>메뉴판</h2>

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

          <hr/>

          <h2>주문서</h2>
          <ul className="list-unstyled">
            { hasEspresso && <li>에스프레소</li> }
          </ul>
          <p>합계 : { formatter.format(sum) }원</p>
        </dl>
    </div>
  </>
}
