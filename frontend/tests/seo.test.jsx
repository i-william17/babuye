import { applySeo } from '../src/utils/seo';

test('applies route-specific SEO tags', () => {
  document.head.innerHTML = '';

  applySeo({
    title: 'Capabilities | Manufacturing, Industry 4.0 & BIM Support | Babuye',
    description: 'Integrated manufacturing, ERP integration, Siemens PLC control, and BIM/AEC support.',
    path: '/capabilities',
  });

  expect(document.title).toBe('Capabilities | Manufacturing, Industry 4.0 & BIM Support | Babuye');
  expect(document.querySelector('meta[name="description"]').getAttribute('content')).toContain('Siemens PLC');
  expect(document.querySelector('link[rel="canonical"]').getAttribute('href')).toBe('https://babuye.com/capabilities');
  expect(document.querySelector('meta[property="og:title"]').getAttribute('content')).toBe('Capabilities | Manufacturing, Industry 4.0 & BIM Support | Babuye');
});
