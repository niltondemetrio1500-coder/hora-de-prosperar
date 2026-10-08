const measurementId = 'G-4QH7RWF8NL';

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag() {
  window.dataLayer.push(arguments);
};
window.gtag('js', new Date());

const cleanPageUrl = (value) => {
  try {
    const url = new URL(value, window.location.href);
    return `${url.origin}${url.pathname}`;
  } catch {
    return undefined;
  }
};

const pageOptions = {
  page_location: cleanPageUrl(window.location.href),
};
const cleanReferrer = document.referrer ? cleanPageUrl(document.referrer) : undefined;
if (cleanReferrer) pageOptions.page_referrer = cleanReferrer;

window.gtag('config', measurementId, pageOptions);

const googleTag = document.createElement('script');
googleTag.async = true;
googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
document.head.append(googleTag);
