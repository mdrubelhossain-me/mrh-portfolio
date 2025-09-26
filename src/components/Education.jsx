import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from '@phosphor-icons/react';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    duration: "2018 - 2022",
    grade: "CGPA: 3.75/4.00",
    description: "Specialized in Software Engineering and Web Development. Completed coursework in Data Structures, Algorithms, Database Management, and Software Engineering.",
    achievements: [
      "Dean's List for Academic Excellence",
      "Best Project Award in Final Year",
      "Active member of Computer Science Society"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College",
    location: "Dhaka, Bangladesh",
    duration: "2016 - 2018",
    grade: "GPA: 5.00/5.00",
    description: "Completed Higher Secondary Education with Science background, focusing on Mathematics, Physics, and Chemistry.",
    achievements: [
      "Merit Scholarship Recipient",
      "Class Representative",
      "Participated in Science Fair"
    ]
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Motijheel Model High School",
    location: "Dhaka, Bangladesh",
    duration: "2014 - 2016",
    grade: "GPA: 5.00/5.00",
    description: "Completed Secondary Education with excellent academic performance and active participation in extracurricular activities.",
    achievements: [
      "General Grade Scholarship",
      "Debate Competition Winner",
      "Cultural Program Organizer"
    ]
  }
];

const certifications = [
  {
    id: 1,
    name: "React.js Development",
    issuer: "Meta (Facebook)",
    date: "2023",
    credential: "Professional Certificate"
  },
  {
    id: 2,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credential: "Certification"
  },
  {
    id: 3,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    credential: "Certification"
  },
  {
    id: 4,
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2023",
    credential: "Certification"
  }
];

const Education = () => {
  return (
    <div className="education-section">
      {/* Education Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 font-primary">Education</h2>
        <h3 className="text-lg font-semibold mb-1 font-primary text-gray-600">My Academic Journey</h3>
        <p className="text-gray-500 font-primary">
          A comprehensive overview of my educational background and achievements
        </p>
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
          
          {/* Education Items */}
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <div key={education.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    {/* Degree */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-lg">
                        <GraduationCap size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 font-primary mb-1">
                          {education.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary font-primary">
                          {education.institution}
                        </h4>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm font-primary">{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm font-primary">{education.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Award size={16} />
                        <span className="text-sm font-primary font-semibold">{education.grade}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm font-primary mb-4 leading-relaxed">
                      {education.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 font-primary mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {education.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 font-primary flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 font-primary">Certifications</h3>
          <p className="text-gray-500 font-primary">
            Professional certifications and courses completed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <Award size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 font-primary mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-primary font-medium text-sm font-primary mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="font-primary">{cert.date}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-primary">
                      {cert.credential}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
