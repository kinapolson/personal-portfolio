import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">
      <h1 id="header">CONTACT ME</h1>
      <p id="cmo">Check me out!</p>
      <ul id="cbutton">
        <li>
          <a href="mailto:ki648110@ucf.edu">
            <button className="cbutton-b">Email Me</button>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/kinapolson" target="_blank" rel="noopener noreferrer">
            <button className="cbutton-b">LinkedIn</button>
          </a>
        </li>
        <li>
          <a href="https://github.com/kinapolson" target="_blank" rel="noopener noreferrer">
            <button className="cbutton-b">GitHub</button>
          </a>
        </li>
      </ul>


      
      <form onSubmit={handleSubmit} className="contact-form">
        <div id="contact-inside">
        <div>
          <label className="block">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} id="contact-name" />
          {errors.name && <p className="contact-txt">{errors.name}</p>}
        </div>
        <div>
          <label className="block">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} id="contact-email" />
          {errors.email && <p className="contact-txt">{errors.email}</p>}
        </div>
        <div>
          <label className="block">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} id="contact-msg"></textarea>
          {errors.message && <p className="contact-txt">{errors.message}</p>}
        </div>
        <br></br>
        <button type="submit" id="contact-submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;