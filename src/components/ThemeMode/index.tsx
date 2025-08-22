'use client';
import { useState, useEffect } from 'react';

import { Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

import { THEME_MODE } from '@/utils/enum';

const ThemeMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 判断是否是浅色主题
  const isLight = theme === THEME_MODE.LIGHT;

  useEffect(() => {
    setMounted(true);
  }, []);

  // 判断组件是否挂载
  if (!mounted) {
    return null;
  }
  return (
    <Tooltip showArrow content={isLight ? '浅色模式' : '深色模式'} placement="bottom">
      <div
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
        className="p-2 text-gray-700 ease-in-out rounded-md cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {isLight ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
      </div>
    </Tooltip>
  );
};
export default ThemeMode;
