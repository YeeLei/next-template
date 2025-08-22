import Script from 'next/script';

const CloudflareAnalytics = () => {
  return process.env.CLOUDFLARE_ANALYTICS && process.env.NODE_ENV === 'production' ? (
    <Script src="https://analytics.baiwumm.com/tracker.min.js" data-website-id={process.env.CLOUDFLARE_ANALYTICS} />
  ) : null;
};
export default CloudflareAnalytics;
