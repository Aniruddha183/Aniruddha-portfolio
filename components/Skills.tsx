import React from 'react';
import { STACK_ITEMS } from '../constants';

const Skills: React.FC = () => {
  const extendedStack = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <section id="stack" className="my-20">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">Technical Skills</h2>
      <p className="text-gray-500 dark:text-gray-500 mt-1 mb-8 text-center">Core technologies I work with to build and deploy applications.</p>
      
      <div className="relative w-full overflow-hidden mask-gradient pause-on-hover">
        <div className="flex animate-marquee">
          {extendedStack.map((item, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 mx-6 w-32">
              <item.icon className="w-7 h-7 text-gray-500 dark:text-gray-400" />
              <span className="text-md font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
