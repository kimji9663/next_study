import Link from 'next/link';

export default function Header() {
  return <>
      <header className="flex flex-row p-2 justify-between">
        <div>
          <Link href="/">
            <button type="button" class="btn btn-link">Link</button>
          </Link>
        </div>
        <div>
          <Link href="/introduce">
            <button type="button" class="btn btn-link">Introduce</button>
          </Link>
          <Link href="/order">
          <button type="button" class="btn btn-link">Order</button>
          </Link>
          <Link href="/hiring">
          <button type="button" class="btn btn-link">Hiring</button>
          </Link>
          <Link href="/contactUs">
          <button type="button" class="btn btn-link">Contect Us</button>
          </Link>
        </div>
      </header>
  </>
}
