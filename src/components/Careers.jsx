import React, { useState } from 'react';

const CareerPage = () => {
  const jobListings = [
    {
      id: "BD201",
      title: "Backend Developer",
      location: "Remote | Full-time",
      experience: "1-3 years",
      description: "Seeking a Node.js and MongoDB expert to build scalable applications.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "UI302",
      title: "UI/UX Designer",
      location: "Remote | Full-time",
      experience: "0-3 years",
      description: "Looking for a creative UI/UX designer to craft user-friendly experiences and wireframes.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "FS703",
      title: "Full Stack Developer",
      location: "Remote | Full-time",
      experience: "1-2 years",
      description: "Seeking a Full Stack Developer with experience in React, Node.js, and MongoDB.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "FL804",
      title: "Flutter Developer",
      location: "Remote | Full-time",
      experience: "1-3 years",
      description: "Looking for a Flutter Developer to build cross-platform mobile applications.",
      link: "https://forms.gle/your-google-form-link"
    }
  ];

  const [filters, setFilters] = useState({
    experience: '',
    location: ''
  });

  const filteredJobs = jobListings.filter(job => {
    return (
      (filters.experience === '' || job.experience.includes(filters.experience)) &&
      (filters.location === '' || job.location.includes(filters.location))
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white font-poppins py-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 text-blue-400">
        Join Our Team at ANGIKYA Technology
      </h1>
      <p className="text-lg text-neutral-300 text-center max-w-3xl mb-10 mx-auto">
  We are looking for passionate individuals to be part of our journey. Explore
  our open positions and take the next step in your career with us.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <select
          name="experience"
          value={filters.experience}
          onChange={handleFilterChange}
          className="p-2 rounded-lg bg-gray-700 text-white"
        >
          <option value="">All Experience Levels</option>
          <option value="0-2">0-2 years</option>
          <option value="1-3">1-3 years</option>
          <option value="2-4">2-4 years</option>
          <option value="3-5">3-5 years</option>
        </select>
        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="p-2 rounded-lg bg-gray-700 text-white"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filteredJobs.map((job) => (
          <div key={job.id} className="border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 relative">
            <h2 className="text-2xl font-semibold text-blue-400">{job.title}</h2>
            <p className="text-neutral-400 mt-2">Location: {job.location}</p>
            <p className="text-neutral-400 mt-1">Experience: {job.experience}</p>
            <p className="mt-4 text-neutral-300 line-clamp-2">{job.description}</p>
            <button 
              className="mt-4 text-blue-400 hover:underline focus:outline-none"
              onClick={() => alert(job.description)}>
              Read More
            </button>
            <a 
              href={job.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition block text-center font-medium">
              Apply Now
            </a>
            <p className="absolute top-3 right-3 bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-300">
              Job ID: {job.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;