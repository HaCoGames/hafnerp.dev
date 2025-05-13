import '../Me.css';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Textarea, TextInput } from 'flowbite-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@hafnerp.dev?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='me-container'>
      <div className="me-inner-container">
        <h1 className="mb-3 border-b dark:text-white">Contact Me</h1>
        <form onSubmit={handleSubmit} className="mt-4 w-[90%] max-w-[700px] space-y-3">
          <TextInput
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            className='h-[30vh]'
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button color={'warning'} type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
}