import React from 'react'
const Experiences = () => {
  return (
    <div className='experiences py-8'>
      {/* Container */}
      <div className='max-w-[900px] mx-auto px-4'>
        {/* Titre */}
        <div className='mb-8 text-center'>
          <p className='text-3xl font-semibold text-gray-700'>Professional Experience</p>
          <div className='w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded'></div>
        </div>

        {/* Liste des expériences, la plus récente en premier */}
        <div className='space-y-8'>
          
          {/* Nouvelle expérience récente en haut */}
          <div className='border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow duration-300'>
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>Orange</h2>
            <h3 className='text-md text-gray-600 mb-4'>Junior Software engineer</h3>
            <ul className='text-sm text-gray-600 mb-4 list-disc pl-5 space-y-2'>
              <li>
                <span className='font-semibold'>Infrastructure Modernization:</span> Technical migration of the project from Java 8 to Java 21, including dependency updates and performance optimization.
              </li>
              <li>
                <span className='font-semibold'>Backend & Reactive Development:</span> Design and implementation of complex features using Java, Vert.x, and Quarkus.
              </li>
              <li>
                <span className='font-semibold'>Micro-frontend Architecture:</span> Development and integration of frontend modules with Angular 21 and Native Federation.
              </li>
              <li>
                <span className='font-semibold'>Agility & Collaboration:</span> Active participation in SCRUM cycles, from technical specifications to sprint planning with stakeholders.
              </li>
            </ul>
            {/* Compétences */}
            <div className='flex flex-wrap gap-2'>
              {['Java', 'Vert.x', 'Quarkus', 'Angular', 'Kafka', 'SonarQube', 'MySQL, Gitlab, Bitbucket', 'Bamboo', 'Jira'].map((skill) => (
                <div key={skill} className='border border-gray-400 rounded px-2 py-1 text-xs text-gray-700'>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Expérience 1 */}
          <div className='border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow duration-300'>
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>Caisse d'Epargne de Madagascar</h2>
            <h3 className='text-md text-gray-600 mb-4'>Web developer</h3>
            <p className='text-sm text-gray-600 mb-4'>
              <span className='font-semibold'>Oct 2022 - Jan 2023 :</span> Internship at the “Caisse d'Epargne de Madagascar” for the development of a web application for managing authorizations.
            </p>
            {/* Compétences */}
            <div className='flex flex-wrap gap-2'>
              {['React 16', 'React Bootstrap', 'Spring Boot', 'JDBC', 'JPA', 'PostgreSQL'].map((skill) => (
                <div key={skill} className='border border-gray-400 rounded px-2 py-1 text-xs text-gray-700'>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Expérience 2 */}
          <div className='border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow duration-300'>
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>MVola DSI/Galaxy Andraharo</h2>
            <h3 className='text-md text-gray-600 mb-4'>Web developer</h3>
            <p className='text-sm text-gray-600 mb-4'>
              <span className='font-semibold'>March 2021 - Mai 2021 :</span> Internship focused on monitoring, reporting, and user management.
            </p>
            {/* Compétences */}
            <div className='flex flex-wrap gap-2'>
              {['Symfony 5.2', 'Bootstrap', 'MySQL'].map((skill) => (
                <div key={skill} className='border border-gray-400 rounded px-2 py-1 text-xs text-gray-700'>
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Experiences