'use client';

import { motion } from 'framer-motion';

type TransitionWrapperProps = {
  children: React.ReactNode;
  delay?: number; // 延迟时间
};

export default function TransitionWrapper({ children, delay = 0 }: TransitionWrapperProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }} // 初始状态：往下偏移20px，透明
      animate={{ y: 0, opacity: 1 }} // 动画目标：回到原位，完全显示
      transition={{ ease: 'easeInOut', duration: 0.75, delay }}
    >
      {children}
    </motion.div>
  );
}
