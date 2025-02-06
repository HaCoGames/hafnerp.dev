import '../Me.css'

import { useState } from 'react';

import { Button, Textarea, TextInput } from 'flowbite-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@hafnerp.dev?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='me-container'>
        <div className="me-inner-container">
            <h1 className="mb-3 border-b dark:text-white">Contact Me</h1>
            <form onSubmit={handleSubmit} className="mt-4 w-[700px] space-y-3">
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
