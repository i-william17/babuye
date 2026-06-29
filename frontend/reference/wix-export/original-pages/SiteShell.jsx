import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localizeFontUrls } from '../generated/localFontUrls';
import { buildPageSeo, installSeoTags } from '../utils/seo';

const originalHost = 'www.sencearchitects.com';

function cleanRoutePath(pathname) {
  if (!pathname || pathname === '/' || pathname === '/index.html') {
    return '/';
  }

  return pathname.endsWith('.html') ? pathname.slice(0, -5) || '/' : pathname;
}

function removeManagedStyles() {
  document.querySelectorAll('style[data-babuye-page-style="true"]').forEach((style) => {
    style.remove();
  });
}

function copyStyleTag(styleTag) {
  const style = document.createElement('style');

  Array.from(styleTag.attributes).forEach((attribute) => {
    style.setAttribute(attribute.name, attribute.value);
  });

  style.setAttribute('data-babuye-page-style', 'true');
  style.textContent = styleTag.textContent || '';
  return style;
}

function installPageStyles(documentData) {
  removeManagedStyles();

  const template = document.createElement('template');
  template.innerHTML = localizeFontUrls(documentData.stylesHtml || '');

  template.content.querySelectorAll('style').forEach((styleTag) => {
    document.head.appendChild(copyStyleTag(styleTag));
  });
}

function installMenuStyles() {
  if (document.getElementById('babuye-mobile-menu-sidebar')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'babuye-mobile-menu-sidebar';
  style.textContent = `
    [id$="__more__"],
    [id$="moreContainer"]:empty {
      display: none !important;
    }

    @media screen and (min-width: 320px) and (max-width: 1000px) {
      [id$="_r_comp-lywxj3fr"] {
        grid-area: 1 / 2 / 2 / 3 !important;
        justify-self: end !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      [id$="-pinned-layer"],
      [id$="_r_comp-kd5px9hr"] {
        display: block !important;
        height: 100vh !important;
        inset: 0 !important;
        opacity: 1 !important;
        pointer-events: none !important;
        position: fixed !important;
        visibility: visible !important;
        width: 100vw !important;
        z-index: 10000 !important;
      }

      [id^="overlay-"][id$="_r_comp-kd5px9hr"] {
        background: transparent !important;
        inset: 0 !important;
        opacity: 0 !important;
        pointer-events: none !important;
        position: fixed !important;
        transition: opacity 280ms ease, visibility 280ms ease !important;
        visibility: hidden !important;
      }

      [id^="container-"][id$="_r_comp-kd5px9hr"] {
        bottom: 0 !important;
        height: 100vh !important;
        left: auto !important;
        max-width: 420px !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        position: fixed !important;
        right: 0 !important;
        top: 0 !important;
        transform: translateX(100%) !important;
        transition: transform 320ms ease !important;
        visibility: visible !important;
        width: min(86vw, 420px) !important;
      }

      body.babuye-menu-open [id$="-pinned-layer"],
      body.babuye-menu-open [id$="_r_comp-kd5px9hr"] {
        pointer-events: auto !important;
      }

      body.babuye-menu-open [id^="overlay-"][id$="_r_comp-kd5px9hr"] {
        opacity: 1 !important;
        pointer-events: auto !important;
        visibility: visible !important;
      }

      body.babuye-menu-open [id^="container-"][id$="_r_comp-kd5px9hr"] {
        transform: translateX(0) !important;
      }
    }
  `;
  document.head.appendChild(style);
}

function applyDocumentState(documentData) {
  document.documentElement.lang = documentData.lang || 'en';
  document.body.className = documentData.bodyClass || '';
  document.body.classList.add('babuye-page-rendered');
  document.body.setAttribute('data-js-loaded', 'true');
  document.body.classList.remove('babuye-menu-open');
}

function getMenuTarget(target) {
  if (!(target instanceof Element)) {
    return null;
  }

  if (target.closest('[id$="_r_comp-lywxj3fr"]')) {
    return 'open';
  }

  if (target.closest('[id$="_r_comp-kkmqi5tc"]')) {
    return 'close';
  }

  if (target.closest('[id^="overlay-"][id$="_r_comp-kd5px9hr"]')) {
    return 'close';
  }

  return null;
}

function resolveRouteHref(href, baseHref) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return null;
  }

  let targetUrl;

  try {
    targetUrl = new URL(href, baseHref || window.location.href);
  } catch (_error) {
    return null;
  }

  if (targetUrl.origin !== window.location.origin && targetUrl.hostname !== originalHost) {
    return null;
  }

  const cleanPath = cleanRoutePath(decodeURI(targetUrl.pathname));
  return `${cleanPath}${targetUrl.search}${targetUrl.hash}`;
}

function getWixMediaUrl(uri) {
  if (!uri || uri.startsWith('http')) {
    return uri;
  }

  return `https://static.wixstatic.com/media/${uri}`;
}

function getImageFit(displayMode) {
  return displayMode === 'fill' ? 'cover' : 'contain';
}

function hydrateWixImages(root) {
  if (!root) {
    return;
  }

  root.querySelectorAll('wow-image[data-image-info]').forEach((imageElement) => {
    let imageInfo;

    try {
      imageInfo = JSON.parse(imageElement.getAttribute('data-image-info') || '{}');
    } catch (_error) {
      return;
    }

    const imageData = imageInfo.imageData || {};
    const src = getWixMediaUrl(imageData.uri);

    if (!src) {
      return;
    }

    const displayMode = imageData.displayMode || imageInfo.displayMode;
    const fit = getImageFit(displayMode);
    const sources = imageElement.querySelectorAll('source:not([srcset])');
    let image = imageElement.querySelector('img');

    if (!image) {
      image = document.createElement('img');
      imageElement.appendChild(image);
    }

    sources.forEach((source) => {
      source.setAttribute('srcset', src);
    });

    if (!image.getAttribute('src')) {
      image.setAttribute('src', src);
    }

    if (!image.getAttribute('alt')) {
      image.setAttribute('alt', imageData.alt || imageData.name || '');
    }

    if (!image.style.objectFit) {
      image.style.objectFit = fit;
    }

    if (!image.style.objectPosition) {
      image.style.objectPosition = '50% 50%';
    }

    image.setAttribute('data-load-done', '');
  });
}

function sanitizeBodyHtml(bodyHtml) {
  const template = document.createElement('template');
  template.innerHTML = bodyHtml || '';

  template.content.querySelectorAll('link[href]').forEach((link) => {
    const rel = (link.getAttribute('rel') || '').toLowerCase();
    const href = link.getAttribute('href') || '';

    if (
      rel.includes('preload')
      || rel.includes('prefetch')
      || href.includes('siteassets.parastorage.com')
      || href.includes('static.parastorage.com')
    ) {
      link.remove();
    }
  });

  return template.innerHTML;
}

export default function SiteShell({ documentData, documentPath }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [bodyHtml, setBodyHtml] = useState('');
  const [loadError, setLoadError] = useState(null);
  const seo = useMemo(
    () => buildPageSeo(documentData, documentPath),
    [documentData, documentPath],
  );

  const documentBaseHref = useMemo(
    () => new URL(documentPath, window.location.origin).href,
    [documentPath],
  );

  useEffect(() => {
    try {
      installPageStyles(documentData);
      installMenuStyles();
      applyDocumentState(documentData);
      installSeoTags(seo);
      setBodyHtml(sanitizeBodyHtml(documentData.bodyHtml));
      setLoadError(null);
    } catch (error) {
      setLoadError(error);
    }
  }, [documentData, seo]);

  useEffect(() => {
    hydrateWixImages(containerRef.current);
  }, [bodyHtml]);

  const handleClick = useCallback((event) => {
    const menuTarget = getMenuTarget(event.target);

    if (menuTarget === 'open') {
      event.preventDefault();
      event.stopPropagation();
      document.body.classList.add('babuye-menu-open');
      return;
    }

    if (menuTarget === 'close') {
      event.preventDefault();
      event.stopPropagation();
      document.body.classList.remove('babuye-menu-open');
      return;
    }

    const anchor = event.target.closest?.('a[href]');

    if (!anchor || anchor.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    const routePath = resolveRouteHref(anchor.getAttribute('href'), documentBaseHref);

    if (!routePath) {
      return;
    }

    event.preventDefault();
    document.body.classList.remove('babuye-menu-open');
    navigate(routePath);
  }, [documentBaseHref, navigate]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        document.body.classList.remove('babuye-menu-open');
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  if (loadError) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
