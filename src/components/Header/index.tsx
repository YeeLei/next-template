import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import { RiGithubFill } from 'react-icons/ri';

import BackTop from '@/components/BackTop';
import RealTime from '@/components/RealTime';
import ThemeMode from '@/components/ThemeMode';

export default function Header() {
  return (
    <header className="sticky w-full flex gap-4 justify-between items-center top-0 h-16 shadow-md dark:shadow-[rgba(255,255,255,.15)] backdrop-blur dark:bg-transparent transition-all py-3 px-4 md:px-12 lg:px-20 z-50">
      {/* 左侧 Logo 标题 */}
      <div className="flex items-center justify-between gap-3 grow-0 shrink-0">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <div>
          <h1 className="text-xl font-black">{process.env.SITE_TITLE}</h1>
          <h3 className="mt-1 text-xs text-mode">{process.env.SITE_DESCRIPTION}</h3>
        </div>
      </div>
      {/* 实时时间 */}
      <div className="absolute -translate-x-1/2 top-2/4 left-1/2 -translate-y-2/4 max-md:hidden">
        <RealTime />
      </div>
      {/* 右侧社交图标 */}
      <div className="flex items-center justify-between grow-0 shrink-0">
        {/* 模式切换 */}
        <ThemeMode />
        {/* Github */}
        <Tooltip showArrow content="Github" placement="bottom">
          <a
            href={`https://github.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}`}
            target="_blank"
            className="btn-icon"
          >
            <RiGithubFill size={24} />
          </a>
        </Tooltip>
        {/* 回到顶部 */}
        <BackTop />
      </div>
    </header>
  );
}
