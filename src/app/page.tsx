import HotContainer from '@/components/HotContainer'; // 热榜卡片

export default function Home() {
  return (
    <div
      className="grid gap-5 px-4 py-5 md:px-12 lg:px-20"
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(20rem,1fr))' }}
    >
      <HotContainer />
    </div>
  );
}
