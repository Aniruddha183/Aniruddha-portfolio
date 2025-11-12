import React from 'react';
import { GithubIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="hero" className="mb-20">
      <div className="relative">
        <div className="relative h-48 md:h-56 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop"
            alt="Tech workspace banner" 
            className="w-full h-full object-cover absolute top-0 left-0"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
              willChange: 'transform'
             }}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white font-semibold text-lg md:text-xl tracking-wider animate-fade-in-up">
              Build • Ship • Learn • Repeat
            </p>
          </div>
        </div>
        <div className="absolute -bottom-12 left-6 md:left-8">
          <img 
            src="https://api.dicebear.com/8.x/shapes/svg?seed=Aniruddha"
            alt="Aniruddha Teke"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-gray-50 dark:border-[#111] bg-gray-200 dark:bg-gray-800"
          />
        </div>
      </div>

      <div className="mt-16 px-2">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Aniruddha Teke</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Full Stack Developer • Cloud Enthusiast • Problem Solver</p>
          </div>
          <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="https://github.com/Aniruddha183" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110" aria-label="GitHub"><GithubIcon className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/aniruddha-teke-0436a01a8/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform hover:scale-110" aria-label="LinkedIn"><LinkedInIcon className="w-6 h-6" /></a>
          </div>
        </div>
        <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          A passionate Full Stack Developer with experience in building scalable web applications using React, Next.js, and cloud technologies like AWS and GCP. I enjoy solving complex problems and creating seamless user experiences, from UI/UX to deployment.
        </p>
      </div>
    </section>
  );
};

export default Hero;
