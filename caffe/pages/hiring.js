import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return <>
    <div className="container">
        <Header/>
        
        <h1 className="font-bold">Hiring</h1>

        <p>Caffe에서는 언제는 새로운 직원을 뽑고 있습니다!</p>
    </div>
  </>
}
