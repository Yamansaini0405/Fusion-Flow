import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    department: "",
    skills: [],
    experience: "",
    interestLevel: "",
    availableHours: "",

    expectations: "",
  });

  const skillOptions = [
    "Web Development",
    "Mobile Development",
    "Logo Design",
    "UI/UX design",
    "Software testing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey Response:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12 w-[90%] md:w-[100%]">
      <h1 className="text-2xl font-bold text-center mb-6">
        Student Freelancing Interest Survey
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">College</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Skills & Interests</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Skills (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {skillOptions.map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={(e) => handleCheckboxChange(e, "skills")}
                    className="rounded"
                  />
                  <span className="text-sm">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Prior Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Experience Level</option>
              <option value="none">No Experience</option>
              <option value="beginner">Beginner (0-1 year)</option>
              <option value="intermediate">Intermediate (1-2 years)</option>
              <option value="advanced">Advanced (2+ years)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Interest Level in Freelancing
            </label>
            <select
              name="interestLevel"
              value={formData.interestLevel}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Highly Interested</option>
              <option value="very-high">Not Interested</option>
              <option value="high">Lack of Talent</option>
            </select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Availability & Preferences
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Available Hours per Week
            </label>
            <select
              name="availableHours"
              value={formData.availableHours}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Hours</option>
              <option value="0-5">0-5 hours</option>
              <option value="5-10">5-10 hours</option>
              <option value="10-20">10-20 hours</option>
              <option value="20+">20+ hours</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className=" bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default Form;
