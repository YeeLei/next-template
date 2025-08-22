import { GoogleAnalytics } from '@next/third-parties/google';

const GoogleUtilities = () => {
  return process.env.GOOGLE_ANALYTICS && process.env.NODE_ENV === 'production' ? (
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
  ) : null;
};
export default GoogleUtilities;
