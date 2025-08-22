import Script from 'next/script';

const BaiDuAnalytics = () => {
  return process.env.BAIDU_ANALYTICS && process.env.NODE_ENV === 'production' ? (
    <Script
      id="baidu-analytics"
      dangerouslySetInnerHTML={{
        __html: `var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?${process.env.BAIDU_ANALYTICS}";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();`,
      }}
    />
  ) : null;
};
export default BaiDuAnalytics;
