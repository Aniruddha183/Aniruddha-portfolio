import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact-cta" className="my-20 py-10 text-center border-t border-b border-gray-200/80 dark:border-gray-800/80">
            <p className="text-gray-800 dark:text-gray-300 text-xl font-semibold mb-2">Interested in collaborating?</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Let's connect and build something amazing together.</p>
            <a 
                href="mailto:aniruddhateke@gmail.com"
                className="inline-block bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900 font-semibold py-2 px-5 rounded-md hover:bg-gray-900 dark:hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
                Get In Touch
            </a>
        </section>
    );
};

export default Contact;
