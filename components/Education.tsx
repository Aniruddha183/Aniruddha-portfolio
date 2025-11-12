import React from 'react';
import { EDUCATION } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">{children}</h2>
);

const Education: React.FC = () => {
    return (
        <section className="space-y-12 my-20">
            <div>
                <SectionTitle>EDUCATION</SectionTitle>
                <div className="space-y-6">
                    {EDUCATION.map((item, index) => (
                         <div key={index}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.institution}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-500">{item.period}</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="text-gray-700 dark:text-gray-300">{item.degree}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
