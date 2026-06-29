const siteUrl = 'https://babuye.com';

function setMeta(selector, createElement, content) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = createElement();
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setLink(selector, rel, href) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export function applySeo({ title, description, path = window.location.pathname, robots = 'index, follow' }) {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const canonical = `${siteUrl}${normalizedPath}`;

  document.title = title;
  setMeta('meta[name="description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    return meta;
  }, description);
  setMeta('meta[name="robots"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'robots');
    return meta;
  }, robots);
  setMeta('meta[property="og:title"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    return meta;
  }, title);
  setMeta('meta[property="og:description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:description');
    return meta;
  }, description);
  setMeta('meta[property="og:url"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:url');
    return meta;
  }, canonical);
  setMeta('meta[property="og:type"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:type');
    return meta;
  }, 'website');
  setMeta('meta[name="twitter:card"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:card');
    return meta;
  }, 'summary_large_image');
  setMeta('meta[name="twitter:title"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:title');
    return meta;
  }, title);
  setMeta('meta[name="twitter:description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:description');
    return meta;
  }, description);
  setLink('link[rel="canonical"]', 'canonical', canonical);
}
