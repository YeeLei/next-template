import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-60">
      <Spinner label="Loading..." color="primary" />
    </div>
  );
}
