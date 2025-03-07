import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";

const countryCodes = [
  { value: "+91", label: "India", flag: "https://flagcdn.com/in.svg" },
  { value: "+1", label: "USA", flag: "https://flagcdn.com/us.svg" },
  { value: "+44", label: "UK", flag: "https://flagcdn.com/gb.svg" },
  // Add more country codes as needed
];

const jobRoles = [
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "Full Stack Developer", label: "Full Stack Developer" },
  { value: "DevOps Engineer", label: "DevOps Engineer" },
  { value: "Data Scientist", label: "Data Scientist" },
  { value: "UI/UX Designer", label: "UI/UX Designer" },
  { value: "Product Manager", label: "Product Manager" },
  { value: "Other", label: "Other" },
];

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    jobRole: "",
    jobId: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
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
    if (name === "zipCode") {
      setErrors({
        ...errors,
        zipCode: value.length !== 6 ? "Zip code must be 6 digits." : "",
      });
    }
  };

  const handleFileChange = (e) => {
    setForm({ ...form, resume: e.target.files[0] });
  };

  const handleJobRoleChange = (selectedOption) => {
    setForm({ ...form, jobRole: selectedOption.value });
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
      jobRole: form.jobRole,
      jobId: form.jobId,
      address: form.address,
      city: form.city,
      state: form.state,
      zipCode: form.zipCode,
      coverLetter: form.coverLetter,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_3na0f5j", // Replace with your EmailJS Service ID
        "template_qwecn9n", // Replace with your EmailJS Template ID
        templateParams,
        "khTulBgT8kM_O_R84" // Replace with your EmailJS User ID
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
            jobRole: "",
            jobId: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
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
    if (form.fullName.trim() === "") {
      newErrors.fullName = "Full Name is required.";
    }
    if (!form.email.includes("@")) {
      newErrors.email = "Email must contain '@'.";
    }
    if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (form.jobRole === "") {
      newErrors.jobRole = "Job Role is required.";
    }
    if (form.jobId.trim() === "") {
      newErrors.jobId = "Job ID is required.";
    }
    if (form.address.trim() === "") {
      newErrors.address = "Address is required.";
    }
    if (form.city.trim() === "") {
      newErrors.city = "City is required.";
    }
    if (form.state.trim() === "") {
      newErrors.state = "State is required.";
    }
    if (form.zipCode.length !== 6) {
      newErrors.zipCode = "Zip code must be 6 digits.";
    }
    if (!form.resume) {
      newErrors.resume = "Resume is required.";
    }
    if (form.coverLetter.trim() === "") {
      newErrors.coverLetter = "Cover Letter is required.";
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
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
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

            {/* Job Role */}
            <div>
              <Select
                options={jobRoles}
                classNamePrefix="react-select"
                onChange={handleJobRoleChange}
                placeholder="Select Job Role"
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
              {errors.jobRole && (
                <p className="text-red-500 text-sm mt-1">{errors.jobRole}</p>
              )}
            </div>

            {/* Job ID */}
            <div>
              <input
                type="text"
                name="jobId"
                value={form.jobId}
                onChange={handleChange}
                placeholder="Job ID"
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
              {errors.jobId && (
                <p className="text-red-500 text-sm mt-1">{errors.jobId}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            {/* City */}
            <div>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            {/* State */}
            <div>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>

            {/* Zip Code */}
            <div>
              <input
                type="text"
                name="zipCode"
                value={form.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
              )}
            </div>

            {/* Resume Upload */}
            <div>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full p-2.5 rounded-md bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
              {errors.resume && (
                <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
              )}
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
          {errors.coverLetter && (
            <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>
          )}

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