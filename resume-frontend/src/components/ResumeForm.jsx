import { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const ResumeForm = () => {
  const [resume, setResume] = useState({
    personalInformation: {
      fullName: '',
      email: '',
      phoneNumber: '',
      location: '',
      linkedIn: '',
      github: '',
      portfolio: ''
    },
    summary: '',
    skills: {
      programmingLanguages: [],
      frameworks: [],
      databases: [],
      cloud: [],
      devOpsTools: [],
      otherRelevantSkills: []
    },
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    achievements: [],
    languages: [],
    interests: []
  });

  const handleNestedChange = (section, field, value) => {
    if (section === 'summary') {
      setResume(prev => ({
        ...prev,
        summary: value
      }));
    } else {
      setResume(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    }
  };

  const handleArrayChange = (section, index, field, value) => {
    setResume(prev => {
      const updatedArray = [...prev[section]];
      updatedArray[index] = {
        ...updatedArray[index],
        [field]: value
      };
      return {
        ...prev,
        [section]: updatedArray
      };
    });
  };

  const handleListArrayChange = (section, index, value) => {
    const updated = [...resume[section]];
    updated[index] = value;
    setResume(prev => ({
      ...prev,
      [section]: updated
    }));
  };

  const addArrayItem = (section, template) => {
    setResume(prev => ({
      ...prev,
      [section]: [...prev[section], template]
    }));
  };

  const removeArrayItem = (section, index) => {
    setResume(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleSkillsChange = (category, value) => {
    setResume(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: value.split(',').map(item => item.trim())
      }
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Resume:", resume);
    alert("Resume submitted! Check console for output.");
  };

  const dynamicSections = [
    { section: 'education', template: { degree: '', school: '', duration: '' } },
    { section: 'certifications', template: '' },
    { section: 'projects', template: '' },
    { section: 'achievements', template: '' },
    { section: 'languages', template: '' },
    { section: 'interests', template: '' }
  ];

  return (
    <div className="container mt-5 mx-auto p-8 max-w-5xl bg-white dark:bg-gray-900 rounded-xl shadow-md">
      
      {/* Personal Information Section */}
      <div className="card bg-gray-100 dark:bg-gray-800 shadow p-6 mb-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(resume.personalInformation).map(field => (
            <div key={field} className="form-control">
              <label className="label text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">{field}</label>
              <input
                type="text"
                className="input input-bordered border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-md w-full"
                value={resume.personalInformation[field]}
                onChange={(e) => handleNestedChange('personalInformation', field, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="card bg-gray-100 dark:bg-gray-800 shadow p-6 mb-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Professional Summary</h2>
        <textarea
          className="textarea textarea-bordered border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-3 rounded-md w-full h-32"
          value={resume.summary}
          onChange={(e) => handleNestedChange('summary', 'summary', e.target.value)}
          placeholder="Briefly describe your professional background and skills"
        />
      </div>

      {/* Skills */}
      <div className="card bg-gray-100 dark:bg-gray-800 shadow p-6 mb-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Skills</h2>
        {Object.keys(resume.skills).map(category => (
          <div key={category} className="mb-4">
            <label className="label text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">
              {category.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="text"
              className="input input-bordered border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-md w-full"
              value={resume.skills[category].join(', ')}
              onChange={(e) => handleSkillsChange(category, e.target.value)}
              placeholder={`Enter ${category.replace(/([A-Z])/g, ' $1').toLowerCase()} separated by commas`}
            />
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="card bg-gray-100 dark:bg-gray-800 shadow p-6 mb-8 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Experience</h2>
          <button
            className="btn bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
            onClick={() =>
              addArrayItem('experience', {
                job: '',
                company: '',
                location: '',
                duration: '',
                responsibilities: []
              })
            }
          >
            <FaPlus /> Add Experience
          </button>
        </div>

        {resume.experience.map((exp, index) => (
          <div key={index} className="mb-6 p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-100">Experience #{index + 1}</h3>
              <button
                className="btn bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-2"
                onClick={() => removeArrayItem('experience', index)}
              >
                <FaTrash /> Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {['job', 'company', 'location', 'duration'].map(field => (
                <div key={field}>
                  <label className="label text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">{field}</label>
                  <input
                    type="text"
                    className="input input-bordered border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-md w-full"
                    value={exp[field]}
                    onChange={(e) => handleArrayChange('experience', index, field, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <label className="label text-sm font-medium text-gray-600 dark:text-gray-300">Responsibilities</label>
            <textarea
              className="textarea textarea-bordered border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-md w-full"
              value={exp.responsibilities.join('\n')}
              onChange={(e) =>
                handleArrayChange('experience', index, 'responsibilities', e.target.value.split('\n'))
              }
              placeholder="Enter responsibilities (one per line)"
              rows={4}
            />
          </div>
        ))}
      </div>

      {/* Dynamic Sections */}
      {dynamicSections.map(({ section, template }) => (
        <div key={section} className="card bg-gray-100 dark:bg-gray-800 shadow p-6 mb-8 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 capitalize">{section}</h2>
            <button
              className="btn bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
              onClick={() => addArrayItem(section, template)}
            >
              <FaPlus /> Add {section.slice(0, -1)}
            </button>
          </div>

          {resume[section].map((item, index) => (
            <div key={index} className="flex items-center mb-2 gap-4">
              {typeof item === 'string' ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleListArrayChange(section, index, e.target.value)}
                  className="input input-bordered border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-md w-full"
                  placeholder={`Enter ${section.slice(0, -1)}`}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  {Object.keys(template).map(key => (
                    <input
                      key={key}
                      type="text"
                      value={item[key]}
                      onChange={(e) => handleArrayChange(section, index, key, e.target.value)}
                      className="input input-bordered border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white p-2 rounded-md"
                      placeholder={`Enter ${key}`}
                    />
                  ))}
                </div>
              )}
              <button
                className="btn bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={() => removeArrayItem(section, index)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      ))}

      {/* Submit Button */}
      <div className="flex justify-center mt-10">
        <button
          className="btn bg-green-600 dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          onClick={handleSubmit}
        >
          Submit 
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
