/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="bg-gray-300 flex flex-col justify-center items-center h-screen w-full">
      <div>
        <h1 className="main__title">I have bad news for you</h1>
        <h2 className="main__subtitle">
          The page you are looking for might be removed or is temporarily
          unavailable
        </h2>
        <Link href="/">
          <a className="main__btn">Back to homepage</a>
        </Link>
      </div>
    </div>
  );
}
