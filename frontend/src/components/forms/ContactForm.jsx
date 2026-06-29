import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import Button from '../ui/Button';
import FormField from './FormField';

const initialValues = {
  name: '',
  email: '',
  phone: '+254',
  projectType: 'Windows systems',
  message: '',
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');

  const updateValue = (event) => {
    setValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value,
    }));
  };

  const updatePhone = (phone) => {
    setValues((currentValues) => ({
      ...currentValues,
      phone,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('sent');
    setValues(initialValues);
  };

  return (
    <form className="border border-ink/10 bg-porcelain p-5 sm:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Name" name="name" onChange={updateValue} placeholder="Your name" required value={values.name} />
        <FormField id="email" label="Email" name="email" onChange={updateValue} placeholder="you@example.com" required type="email" value={values.email} />
        <label className="block" htmlFor="phone">
          <span className="text-xs font-semibold uppercase text-navy">Phone</span>
          <PhoneInput
            defaultCountry="ke"
            inputProps={{
              id: 'phone',
              name: 'phone',
              required: true,
              autoComplete: 'tel',
            }}
            onChange={updatePhone}
            value={values.phone}
          />
        </label>
        <FormField id="projectType" label="Project type" name="projectType" as="select" onChange={updateValue} value={values.projectType}>
          <option>Windows systems</option>
          <option>Doors systems</option>
          <option>Curtain wall solutions</option>
          <option>Interior glass partitions</option>
          <option>Skylight</option>
          <option>Balustrade</option>
          <option>High-spec specialized solutions</option>
          <option>Sun shading solutions</option>
          <option>Manufacturing and BIM support</option>
          <option>Compliance review</option>
        </FormField>
      </div>
      <div className="mt-5">
        <FormField
          as="textarea"
          className="min-h-36 resize-y"
          id="message"
          label="Project notes"
          name="message"
          onChange={updateValue}
          placeholder="Tell us about openings, drawings, location, timeline, procurement needs, or site constraints."
          required
          value={values.message}
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">Send request</Button>
        {status === 'sent' && (
          <p className="text-sm leading-6 text-navy" role="status">
            Request noted for Jamlick Mbauni and the Babuye project team.
          </p>
        )}
      </div>
    </form>
  );
}
