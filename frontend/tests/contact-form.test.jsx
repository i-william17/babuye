import ContactForm from '../src/components/forms/ContactForm';
import { input, render, submit } from './test-utils';

test('submits the contact form and shows a status message', () => {
  const { container, unmount } = render(<ContactForm />);

  input(container.querySelector('#name'), 'Amina');
  input(container.querySelector('#email'), 'amina@example.com');
  const phoneField = container.querySelector('#phone');
  if (phoneField) {
    input(phoneField, '+254 700 000 000');
  }
  input(container.querySelector('#message'), 'We need curtain wall review for a mixed-use project.');
  submit(container.querySelector('form'));

  expect(container.textContent).toContain('Request noted');
  unmount();
});
