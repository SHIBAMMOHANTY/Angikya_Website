import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Select from "react-select";

const techOptions = [
  { value: "React.js", label: "React.js" },
  { value: "Vue.js", label: "Vue.js" },
  { value: "Angular", label: "Angular" },
  { value: "Next.js", label: "Next.js" },
  { value: "Laravel", label: "Laravel" },
  { value: "Django", label: "Django" },
  { value: "Node.js", label: "Node.js" },
  { value: "Flutter", label: "Flutter" },
  { value: "React Native", label: "React Native" },
  { value: "Other", label: "Other" },
];

const Contact = () => {
  const [form, setForm] = useState({
    projectType: "",
    techStack: [],
    otherTech: "",
    budget: "",
    name: "",
    email: "",
    company: "",
    mobile: "",
    requirements: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTechStackChange = (selectedOptions) => {
    const values = selectedOptions.map((option) => option.value);
    setForm({
      ...form,
      techStack: values,
      otherTech: values.includes("Other") ? "" : form.otherTech,
    });
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
            formRef.current.reset();
          }
          setForm({
            projectType: "",
            techStack: [],
            otherTech: "",
            budget: "",
            name: "",
            email: "",
            company: "",
            mobile: "",
            requirements: "",
            message: "",
          });

          setTimeout(() => setSuccess(false), 3000);
        },
        (err) => {
          console.error("FAILED...", err);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center px-6 py-12 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Submit Your Proposal
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <select
            name="projectType"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white/20 text-white focus:ring focus:ring-blue-500 outline-none"
            required
          >
            <option value="">What do you want to build?</option>
            {["Static Website", "Dynamic Website", "Portfolio", "Blogs", "Mobile App", "Desktop App", "Custom Software", "Chat Bot", "Chrome Extension", "Other"].map((option) => (
              <option key={option} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>

          <div>
            <p className="text-white font-semibold mb-2">Preferred Tech Stack:</p>
            <Select
              options={techOptions}
              isMulti
              classNamePrefix="react-select"
              className="text-black"
              onChange={handleTechStackChange}
              placeholder="Select Technologies"
            />
            {form.techStack.includes("Other") && (
              <input
                type="text"
                name="otherTech"
                onChange={handleChange}
                placeholder="Specify Other Technology"
                className="w-full mt-2 p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
              />
            )}
          </div>

          <input
            type="text"
            name="budget"
            onChange={handleChange}
            placeholder="Budget (in INR)"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
          />

          {["name", "email", "company", "mobile"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
              required={field === "name" || field === "email" || field === "mobile"}
            />
          ))}

          <textarea
            name="requirements"
            onChange={handleChange}
            placeholder="Project Requirements"
            rows="3"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all py-3 px-6 rounded-md font-bold w-full text-white shadow-md"
            disabled={loading}
          >
            {loading ? "Sending..." : success ? "Sent Successfully!" : "Submit Proposal"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
