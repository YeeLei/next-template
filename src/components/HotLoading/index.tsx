import { Skeleton } from '@nextui-org/react';

const HotLoading = () => {
  return (
    <div className="p-5 space-y-5">
      <Skeleton className="w-3/5 h-4 rounded-lg" />
      <Skeleton className="w-3/5 h-4 rounded-lg" />
      <Skeleton className="w-full h-4 rounded-lg" />
      <Skeleton className="w-full h-4 rounded-lg" />
      <Skeleton className="w-full h-4 rounded-lg" />
      <Skeleton className="w-full h-4 rounded-lg" />
      <Skeleton className="w-full h-4 rounded-lg" />
      <Skeleton className="w-full h-4 rounded-lg" />
    </div>
  );
};
export default HotLoading;
