import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import { countryCodes } from "../countryCodes"; // Import country codes with SVG flags

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

const budgetOptions = [
  { value: "10k-50k", label: "₹10,000 - ₹50,000" },
  { value: "50k-1L", label: "₹50,000 - ₹1,00,000" },
  { value: "1L-5L", label: "₹1,00,000 - ₹5,00,000" },
  { value: "5L+", label: "₹5,00,000+" },
  { value: "custom", label: "Custom Budget" },
];

const Contact = () => {
  const [form, setForm] = useState({
    projectType: "",
    techStack: [],
    otherTech: "",
    budget: "",
    customBudget: "",
    name: "",
    email: "",
    company: "",
    mobile: "",
    requirements: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default to India
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate fields in real-time
    if (name === "mobile") {
      setErrors({
        ...errors,
        mobile: value.length !== 10 ? "Phone number must be 10 digits." : "",
      });
    }
    if (name === "email") {
      setErrors({
        ...errors,
        email: !value.includes("@") ? "Email must contain '@'." : "",
      });
    }
  };

  const handleTechStackChange = (selectedOptions) => {
    const values = selectedOptions.map((option) => option.value);
    setForm({
      ...form,
      techStack: values,
      otherTech: values.includes("Other") ? "" : form.otherTech,
    });
  };

  const handleBudgetChange = (selectedOption) => {
    if (selectedOption.value === "custom") {
      setForm({ ...form, budget: "custom", customBudget: "" });
    } else {
      setForm({ ...form, budget: selectedOption.value, customBudget: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (form.mobile.length !== 10) {
      newErrors.mobile = "Phone number must be 10 digits.";
    }
    if (!form.email.includes("@")) {
      newErrors.email = "Email must contain '@'.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    const finalForm = {
      ...form,
      budget: form.budget === "custom" ? form.customBudget : form.budget,
    };

    emailjs
      .send("service_w0mr93k", "template_qwecn9n", finalForm, "khTulBgT8kM_O_R84")
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
            customBudget: "",
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
    <div className="text-white min-h-screen flex flex-col items-center px-4 py-8 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Submit Your Proposal
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl border border-white/20"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <p className="text-white font-semibold mb-1">What do you want to build?</p>
              <select
                name="projectType"
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-white/20 text-white focus:ring focus:ring-blue-500 outline-none"
                required
              >
                <option value="">What do you want to build?</option>
                {[
                  "Static Website",
                  "Dynamic Website",
                  "Portfolio",
                  "Blogs",
                  "Mobile App",
                  "Desktop App",
                  "Custom Software",
                  "Chat Bot",
                  "Chrome Extension",
                  "Other",
                ].map((option) => (
                  <option key={option} value={option} className="text-black">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-white font-semibold mb-1">Preferred Tech Stack:</p>
              <Select
                options={techOptions}
                isMulti
                classNamePrefix="react-select"
                onChange={handleTechStackChange}
                placeholder="Select Technologies"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // bg-white/20
                    color: "white", // text-white
                    border: "none",
                    borderRadius: "0.375rem", // rounded-md
                  }),
                  multiValue: (provided) => ({
                    ...provided,
                    backgroundColor: "rgba(255, 255, 255, 0.3)", // Slightly lighter background for selected tags
                    color: "white", // Text color for selected tags
                  }),
                  multiValueLabel: (provided) => ({
                    ...provided,
                    color: "white", // Text color for selected tags
                  }),
                  multiValueRemove: (provided) => ({
                    ...provided,
                    color: "white", // Remove icon color
                    ":hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.5)", // Hover background for remove icon
                    },
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: "rgba(209, 213, 219, 0.7)", // placeholder-gray-300
                  }),
                  input: (provided) => ({
                    ...provided,
                    color: "white", // text-white
                  }),
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: "white", // bg-white
                    color: "black", // text-black
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.1)" : "white", // Selected option background
                    color: "black", // text-black
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover background
                    },
                  }),
                }}
              />
              {form.techStack.includes("Other") && (
                <input
                  type="text"
                  name="otherTech"
                  onChange={handleChange}
                  placeholder="Specify Other Technology"
                  className="w-full mt-2 p-2.5 rounded-md bg-white/20 text-white placeholder-gray-500 focus:ring focus:ring-blue-500 outline-none"
                />
              )}
            </div>
          </div>

          <div className="w-full">
            <p className="text-white font-semibold mb-1">Budget:</p>
            <Select
              options={budgetOptions}
              classNamePrefix="react-select"
              onChange={handleBudgetChange}
              placeholder="Select Budget"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // bg-white/20
                  color: "white", // text-white
                  border: "none",
                  borderRadius: "0.375rem", // rounded-md
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "white", // text-white
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "rgba(209, 213, 219, 0.7)", // placeholder-gray-300
                }),
                input: (provided) => ({
                  ...provided,
                  color: "white", // text-white
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "white", // bg-white
                  color: "black", // text-black
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.1)" : "white", // Selected option background
                  color: "black", // text-black
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover background
                  },
                }),
              }}
            />
            {form.budget === "custom" && (
              <input
                type="text"
                name="customBudget"
                onChange={handleChange}
                placeholder="Enter Custom Budget (in INR)"
                className="w-full mt-2 p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "email", "company"].map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                  required={field === "name" || field === "email"}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
            <div className="relative">
              <p className="text-white font-semibold mb-1">Mobile Number:</p>
              <div className="flex items-center">
                <Select
                  options={countryCodes}
                  classNamePrefix="react-select"
                  onChange={(selected) => setSelectedCountryCode(selected.value)}
                  value={countryCodes.find((code) => code.value === selectedCountryCode)}
                  formatOptionLabel={(option) => (
                    <div className="flex items-center">
                      <img
                        src={option.flag}
                        alt={option.label}
                        className="w-4 h-4 mr-2"
                      />
                      {option.value}
                    </div>
                  )}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "rgba(255, 255, 255, 0.2)", // bg-white/20
                      color: "white", // text-white
                      border: "none",
                      borderRadius: "0.375rem", // rounded-md
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "white", // text-white
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: "rgba(209, 213, 219, 0.7)", // placeholder-gray-300
                    }),
                    input: (provided) => ({
                      ...provided,
                      color: "white", // text-white
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // bg-white
                      color: "black", // text-black
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.1)" : "white", // Selected option background
                      color: "black", // text-black
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)", // Hover background
                      },
                    }),
                  }}
                />
                <input
                  type="text"
                  name="mobile"
                  onChange={handleChange}
                  placeholder="Enter 10-digit number"
                  className="w-2/3 ml-2 p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>
          </div>

          <textarea
            name="requirements"
            onChange={handleChange}
            placeholder="Project Requirements"
            rows="3"
            className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all py-2.5 px-6 rounded-md font-bold w-full text-white shadow-md"
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