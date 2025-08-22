import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6" style={{ height: 'calc(100vh - 8.4rem)' }}>
      <h2 className="text-xl font-black">客官，你走丢了哟！😉</h2>
      <Link href="/">
        <Button color="primary" variant="shadow">
          返回首页
        </Button>
      </Link>
    </div>
  );
}
