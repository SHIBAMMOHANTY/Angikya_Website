import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";

const countryCodes = [
  { value: "+91", label: "India", flag: "https://flagcdn.com/in.svg" },
  { value: "+1", label: "USA", flag: "https://flagcdn.com/us.svg" },
  { value: "+44", label: "UK", flag: "https://flagcdn.com/gb.svg" },
  // Add more country codes as needed
];

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    resume: null,
    coverLetter: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate fields in real-time
    if (name === "phone") {
      setErrors({
        ...errors,
        phone: value.length !== 10 ? "Phone number must be 10 digits." : "",
      });
    }
    if (name === "email") {
      setErrors({
        ...errors,
        email: !value.includes("@") ? "Email must contain '@'." : "",
      });
    }
  };

  const handleFileChange = (e) => {
    setForm({ ...form, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    // Prepare the email template parameters
    const templateParams = {
      fullName: form.fullName,
      email: form.email,
      phone: form.countryCode + form.phone,
      coverLetter: form.coverLetter,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({
            fullName: "",
            email: "",
            phone: "",
            countryCode: "+91",
            resume: null,
            coverLetter: "",
          });
          setTimeout(() => setSuccess(false), 3000);
        },
        (err) => {
          console.error("Failed to send email:", err);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  const validateForm = () => {
    const newErrors = {};
    if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!form.email.includes("@")) {
      newErrors.email = "Email must contain '@'.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center px-4 py-8 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Apply for Job
      </h2>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex items-center">
              <Select
                options={countryCodes}
                classNamePrefix="react-select"
                onChange={(selected) =>
                  setForm({ ...form, countryCode: selected.value })
                }
                value={countryCodes.find(
                  (code) => code.value === form.countryCode
                )}
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
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    border: "none",
                    borderRadius: "0.375rem",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: "rgba(209, 213, 219, 0.7)",
                  }),
                  input: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: "white",
                    color: "black",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.1)" : "white",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                  }),
                }}
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-2/3 ml-2 p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}

            {/* Resume Upload */}
            <div>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Cover Letter */}
          <textarea
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            placeholder="Cover Letter"
            rows="4"
            className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all py-2.5 px-6 rounded-md font-bold w-full text-white shadow-md"
            disabled={loading}
          >
            {loading ? "Submitting..." : success ? "Submitted Successfully!" : "Apply Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;