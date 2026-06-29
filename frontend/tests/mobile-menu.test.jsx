import { MemoryRouter } from 'react-router-dom';
import MobileMenu from '../src/components/layout/MobileMenu';
import { click, render } from './test-utils';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Company',
    children: [
      { label: 'About', path: '/about' },
      { label: 'Compliance', path: '/compliance' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

test('mobile menu calls close handler from the close control', () => {
  const onClose = jest.fn();
  const { container, unmount } = render(
    <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <MobileMenu navItems={navItems} open onClose={onClose} />
    </MemoryRouter>,
  );

  const closeButton = [...container.querySelectorAll('button')].find((button) => button.textContent === 'Close');
  click(closeButton);

  expect(onClose).toHaveBeenCalledTimes(1);
  unmount();
});
