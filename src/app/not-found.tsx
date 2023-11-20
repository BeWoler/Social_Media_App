'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const { push } = useRouter();
  const [time, setTime] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t - 1), 1000);

    setTimeout(() => push('/'), 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(setTimeout(() => push('/'), 5000));
    };
  }, [time, push]);

  return (
    <div className="flex flex-col mt-auto h-screen justify-center items-center gap-4">
      <p className="text-6xl">
        <span className="text-primary-500 font-bold">404</span> Not Found :o
      </p>
      <p className="text-5xl">
        Redirect in{' '}
        <span className="text-primary-500 font-bold">{time}...</span>
      </p>
    </div>
  );
}
