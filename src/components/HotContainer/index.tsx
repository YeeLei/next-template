'use client';

import { useLocalStorageState } from 'ahooks';

import TransitionWrapper from '@/components/TransitionWrapper';

import { LOCAL_KEY } from '@/utils/enum';
import type { HotTypes, HotListConfig } from '@/utils/types';

import HotCard from './HotCard';

import { hotCardConfig } from '@/utils';

const HotContainer = () => {
  // 不显示的榜单列表
  const [hiddenHotList = []] = useLocalStorageState<HotTypes[]>(LOCAL_KEY.HOTHIDDEN, {
    defaultValue: [],
  });

  /**
   * @description: 过滤掉不显示的热榜
   */
  const filterHiddenHot = (): HotListConfig[] => {
    return hiddenHotList.length
      ? hotCardConfig.filter((config: HotListConfig) => !hiddenHotList.includes(config.value))
      : hotCardConfig;
  };

  return filterHiddenHot().map((config, index) => (
    <TransitionWrapper key={config.value} delay={(index + 1) * 0.1 + 0.1}>
      <HotCard {...config} />
    </TransitionWrapper>
  ));
};
export default HotContainer;
