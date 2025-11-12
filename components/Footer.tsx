import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-3xl mx-auto px-4 pb-10">
      <div>
        <h3 className="text-sm text-gray-500 dark:text-gray-500">Let&apos;s connect</h3>
        <p className="text-gray-800 dark:text-gray-300 font-medium">Find me on these platforms</p>
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <link.icon className="w-4 h-4" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-600">&copy; {new Date().getFullYear()} Aniruddha Teke</p>
      </div>
    </footer>
  );
};

export default Footer;
