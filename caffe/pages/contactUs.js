import Link from 'next/link';
import Header from '../components/Header';
import { useState } from 'react';

export default function ContactUs() {
  const [email, setEmail ] = useState('');
  const handle
  return <>
    <div className="container">
        <Header/>
        
        <h1 className="font-bold">Contact Us</h1>

        <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">이메일</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
            value={ email }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">제목</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요." />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" clasNames="form-label">문의내용</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button className="btn btn-primary btn-lg">문의하기</button>
        </form>
    </div>
  </>
}
