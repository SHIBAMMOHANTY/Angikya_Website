const CareerPage = () => {
  const jobListings = [
    {
      id: "FD101",
      title: "Frontend Developer",
      location: "Remote | Full-time",
      experience: "0-2 years",
      description: "Looking for a skilled React developer with experience in Tailwind CSS and state management libraries.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "BD202",
      title: "Backend Developer",
      location: "Remote | Full-time",
      experience: "1-3 years",
      description: "Seeking a Node.js and MongoDB expert to build scalable applications.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "UI303",
      title: "UI/UX Designer",
      location: "Remote | Full-time",
      experience: "0-3 years",
      description: "Looking for a creative UI/UX designer to craft user-friendly experiences and wireframes.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "PM404",
      title: "Project Manager",
      location: "Hybrid | Full-time",
      experience: "3-5 years",
      description: "Experienced Project Manager needed to oversee development cycles and manage teams efficiently.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "DS505",
      title: "Data Scientist",
      location: "Remote | Full-time",
      experience: "2-4 years",
      description: "Looking for a data scientist with experience in AI, ML, and big data analytics.",
      link: "https://forms.gle/your-google-form-link"
    },
    {
      id: "MS606",
      title: "Marketing Specialist",
      location: "On-site | Full-time",
      experience: "1-3 years",
      description: "Join our marketing team to drive brand awareness and lead strategic campaigns.",
      link: "https://forms.gle/your-google-form-link"
    }
  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 text-blue-600">
        Join Our Team at Angikya Technology
      </h1>
      <p className="text-lg text-neutral-600 text-center max-w-3xl mb-10">
        We are looking for passionate individuals to be part of our journey. Explore
        our open positions and take the next step in your career with us.
      </p>
      
      <div className="w-full max-w-5xl space-y-10">
        {jobListings.map((job) => (
          <div key={job.id} className="border border-gray-300 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white relative">
            <h2 className="text-3xl font-semibold text-blue-700">{job.title}</h2>
            <p className="text-neutral-500 mt-2 text-lg">Location: {job.location}</p>
            <p className="text-neutral-500 mt-1 text-lg">Experience: {job.experience}</p>
            <p className="mt-4 text-neutral-600 text-lg line-clamp-2">{job.description}</p>
            <button 
              className="mt-4 text-blue-600 hover:underline focus:outline-none"
              onClick={() => alert(job.description)}>
              Read More
            </button>
            <a 
              href={job.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition block text-center text-lg font-medium">
              Apply Now
            </a>
            <p className="absolute top-3 right-3 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              Job ID: {job.id}
            </p>
          </div>
        ))}
      </div>
      
      <footer className="mt-20 border-t py-6 border-neutral-700 text-center text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Angikya Technology. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareerPage;