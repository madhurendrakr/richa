import React, { useState } from "react";
import axios from "axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/sendMail", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        mes: formData.message,
      })
      .then((res) => {
        alert("Message Sent!")
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-indigo-800 mb-6">Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 shadow-lg">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 shadow-lg">
          <label htmlFor="phone" className="block text-gray-700">
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 shadow-lg">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div className="mb-6 shadow-lg">
          <label htmlFor="message" className="block text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-indigo-600 text-white shadow-lg py-2 px-4 rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
