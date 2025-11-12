import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
    return (
        <section className="my-20">
             <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">PROJECTS</h2>
            <div className="space-y-8">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="group transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg group-hover:border-gray-300 dark:group-hover:border-gray-700 transition-colors duration-300">
                             <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white">{project.title}</h3>
                             <p className="text-sm text-gray-500 my-1 font-mono">{project.technologies}</p>
                             <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                                {project.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
