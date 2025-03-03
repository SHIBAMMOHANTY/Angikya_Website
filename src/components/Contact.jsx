import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    requirements: "",
    websiteType: "",
    budget: "",
    techStack: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null); // Create a reference for the form

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("your_service_id", "your_template_id", form, "your_user_id")
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          if (formRef.current) {
            formRef.current.reset(); // Reset the form fields
          }
          setForm({
            name: "",
            email: "",
            company: "",
            requirements: "",
            websiteType: "",
            budget: "",
            techStack: "",
            message: "",
          });

          setTimeout(() => setSuccess(false), 3000); // Hide success message after 3s
        },
        (err) => {
          console.error("FAILED...", err);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="text-blue-600 min-h-screen flex flex-col items-center px-6 py-12 bg-[#F6F4F3]">
      <h2 className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text text-5xl font-bold text-center mb-8 ">
        Contact Us
      </h2>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-xl shadow-lg w-full bg-white"
        >
          <h3 className="text-3xl mb-6 font-semibold text-blue-500">
            Submit Your Proposal
          </h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="name" onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-md bg-gray-100 text-blue-600 focus:ring focus:ring-blue-500 outline-none" required />
            <input type="email" name="email" onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded-md bg-gray-100 text-blue-600 focus:ring focus:ring-blue-500 outline-none" required />
            <input type="text" name="company" onChange={handleChange} placeholder="Company Name" className="w-full p-3 rounded-md bg-gray-100 text-blue-600 focus:ring focus:ring-blue-500 outline-none" />
            <textarea name="requirements" onChange={handleChange} placeholder="Project Requirements" rows="3" className="w-full p-3 rounded-md bg-gray-100 text-blue-600 focus:ring focus:ring-blue-500 outline-none"></textarea>

            <select name="websiteType" onChange={handleChange} className="w-full p-3 rounded-md bg-gray-100 text-blue-600 focus:ring focus:ring-blue-500 outline-none">
              <option value="">Select Website Type</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Business">Business</option>
              <option value="Blog">Blog</option>
              <option value="Custom">Custom</option>
            </select>

            <input type="text" name="budget" onChange={handleChange} placeholder="Budget (in USD)" className="w-full p-3 rounded-md bg-gray-100 text-blue-600 focus:ring focus:ring-blue-500 outline-none" />

            <select name="techStack" onChange={handleChange} className="w-full p-3 rounded-md bg-gray-100 text-blue-600 focus:ring focus:ring-blue-500 outline-none">
              <option value="">Select Tech Stack</option>
              <option value="React.js">React.js</option>
              <option value="Vue.js">Vue.js</option>
              <option value="Angular">Angular</option>
              <option value="Next.js">Next.js</option>
              <option value="Laravel">Laravel</option>
              <option value="Django">Django</option>
            </select>

            <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-all py-3 px-6 rounded-md font-bold w-full text-white" disabled={loading}>
              {loading ? "Sending..." : success ? "Sent Successfully!" : "Submit Proposal"}
            </button>
          </form>
        </motion.div>

        {/* Map Section - Centered */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center w-full"
        >
          <iframe
            title="Bhubaneswar Location"
            className="w-full h-[400px] rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30671.381929348515!2d85.81445751190295!3d20.29605823700627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a6c7324b71%3A0x5e9b36dbff7cbf2b!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1710000000000"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
