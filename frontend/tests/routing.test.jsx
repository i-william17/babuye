import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../src/routes/AppRoutes';
import { render } from './test-utils';

beforeEach(() => {
  window.scrollTo = jest.fn();
});

test('renders the requested route through the new app router', () => {
  const { container, unmount } = render(
    <MemoryRouter
      initialEntries={['/solutions/windows']}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <AppRoutes />
    </MemoryRouter>,
  );

  expect(container.textContent).toContain('Solutions for openings');
  expect(container.textContent).toContain('Windows Systems');
  unmount();
});
