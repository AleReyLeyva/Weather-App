import React from 'react';
import Link from 'next/link';

export default function CrossLink({ to, size }) {
  return (
    <Link href={to}>
      <a
        className={`w-${size} h-${size} relative flex justify-center items-center self-end`}
      >
        <div className="cross" />
      </a>
    </Link>
  );
}
