/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-05-14 10:25:47
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-14 16:50:26
 * @Description: 百度百科-历史上的今天
 */
import { NextResponse } from 'next/server';

import { REQUEST_STATUS_TEXT } from '@/utils/enum';
import type { HotListItem } from '@/utils/types';

import { responseError, responseSuccess } from '@/utils';

export async function GET() {
  // 获取月份
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
  // 获取天数
  const day = new Date().getDate().toString().padStart(2, '0');
  const url = `https://baike.baidu.com/cms/home/eventsOnHistory/${month}.json`;
  try {
    // 请求数据
    const response = await fetch(url);
    if (!response.ok) {
      // 如果请求失败，抛出错误，不进行缓存
      throw new Error(`${REQUEST_STATUS_TEXT.ERROR}：百度百科-历史上的今天`);
    }
    // 得到请求体
    const responseBody = await response.json();
    // 处理数据
    const result: HotListItem[] = responseBody[month][month + day].map((v: Record<string, any>, index: number) => {
      return {
        id: index,
        title: v.title.replace(/<[^>]+>/g, ''),
        tip: v.year,
        type: v.type,
        url: v.link,
        mobileUrl: v.link,
      };
    });
    return NextResponse.json(responseSuccess(result));
  } catch (error) {
    return NextResponse.json(responseError);
  }
}

// 数据过期时间
export const revalidate = Number(process.env.NEXT_PUBLIC_CACHE_TIME);
