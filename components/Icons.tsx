import React from "react";

export const LogoIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const PauseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export const SunIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 18a6 6 0 100-12 6 6 0 000 12z"
    />
  </svg>
);

export const MoonIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

export const MailIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

export const ResumeIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
);

export const ArrowUpIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

export const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export const ReactIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="10" ry="4" cx="12" cy="12" />
      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" />
      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)" />
    </g>
  </svg>
);
export const NextJsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path
      fill="currentColor"
      d="M64 0C28.65 0 0 28.65 0 64s28.65 64 64 64s64-28.65 64-64S99.35 0 64 0zm0 121.6C32.03 121.6 6.4 95.97 6.4 64S32.03 6.4 64 6.4s57.6 25.63 57.6 57.6s-25.63 57.6-57.6 57.6z"
    ></path>
    <path
      fill="currentColor"
      d="M85.87 34.13h-6.4v38.48l-23.36-38.48H46.4v59.73h6.4V55.38l23.36 38.48h9.71V34.13z"
    ></path>
  </svg>
);
export const NodeJsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.813 14.662l-2.813-1.625v-3.25l2.813-1.625v3.25l2.813 1.625v3.25l-2.813 1.625v-3.25zm1.813-6.5l2.813-1.625v3.25l-2.813 1.625v-3.25zm3.625 1.625l2.813-1.625v3.25l-2.813 1.625v-3.25z" />
  </svg>
);
export const TailwindIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12.001,4.5C7.524,4.5,3.92,7.882,3.52,12.282H7.689C8.03,9.849,9.81,8.04,12.24,7.875V4.502h-.239Zm-.479,15C16.478,19.5,20.08,16.118,20.48,11.718H16.311C15.97,14.151,14.19,15.96,11.76,16.125V19.498h.239Z"
    ></path>
  </svg>
);
export const TypeScriptIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M2.25 0h19.5A2.25 2.25 0 0 1 24 2.25v19.5A2.25 2.25 0 0 1 21.75 24H2.25A2.25 2.25 0 0 1 0 21.75V2.25A2.25 2.25 0 0 1 2.25 0zM17.47 16.03H11.5v1.84h-1.64V5.41h5.08c1.55 0 2.6.3 3.16 1.01.55.67.83 1.63.83 2.85 0 1.29-.3 2.29-.88 2.97-.57.67-1.55 1-2.93 1h-2.2v2.79zm-4.33-5.26h2.2c.67 0 1.17-.18 1.48-.5.33-.33.49-.8.49-1.42 0-.61-.16-1.08-.49-1.42-.32-.37-.82-.55-1.48-.55h-2.2v3.99z" />
  </svg>
);
export const AWSIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.42 14.22L10.36 12.16l2.06-2.06 3.08 3.08-3.08 3.08m5.97-4.89c0-.01 0-.01 0-.02-.6-3-3.22-5.31-6.39-5.31s-5.79 2.31-6.39 5.31c0 .01 0 .01 0 .02-2.57.39-4.61 2.51-4.61 5.18 0 2.93 2.34 5.28 5.27 5.28h11.06c2.5 0 4.37-1.82 4.37-4.13s-1.78-4.26-4.22-5.02Z" />
  </svg>
);
export const DockerIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22,12.65V11.38L21.3,11.13C20.8,9.44 19.44,8.1 17.77,7.58L17.56,6.86L18.2,6.17L17.2,5.17L15.82,6.54L15.3,6L13.62,6L13.11,6.54L11.73,5.16L10.74,6.16L11.37,6.84L11.16,7.57C9.5,8.1 8.14,9.43 7.62,11.11L6.92,11.36V12.63L7.6,12.88C8.08,14.57 9.42,15.9 11.09,16.42L11.3,17.1L10.67,17.79L11.67,18.79L13.05,17.42L13.57,18H15.25L15.76,17.42L17.14,18.79L18.13,17.79L17.5,17.12L17.72,16.43C19.36,15.93 20.72,14.59 21.24,12.89L22,12.65M8.5,12.5A1,1 0 0,1 7.5,11.5A1,1 0 0,1 8.5,10.5A1,1 0 0,1 9.5,11.5A1,1 0 0,1 8.5,12.5M11.5,12.5A1,1 0 0,1 10.5,11.5A1,1 0 0,1 11.5,10.5A1,1 0 0,1 12.5,11.5A1,1 0 0,1 11.5,12.5M11.5,15.5A1,1 0 0,1 10.5,14.5A1,1 0 0,1 11.5,13.5A1,1 0 0,1 12.5,14.5A1,1 0 0,1 11.5,15.5M14.5,12.5A1,1 0 0,1 13.5,11.5A1,1 0 0,1 14.5,10.5A1,1 0 0,1 15.5,11.5A1,1 0 0,1 14.5,12.5M14.5,9.5A1,1 0 0,1 13.5,8.5A1,1 0 0,1 14.5,7.5A1,1 0 0,1 15.5,8.5A1,1 0 0,1 14.5,9.5M17.5,12.5A1,1 0 0,1 16.5,11.5A1,1 0 0,1 17.5,10.5A1,1 0 0,1 18.5,11.5A1,1 0 0,1 17.5,12.5Z" />
  </svg>
);
export const MongoDbIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.1,4.24C12.1,4.24 12.1,4.24 12.1,4.24C11.13,4.24 10.22,4.88 10.13,5.82V12.4C10.13,12.4 10.13,12.4 10.13,12.4C10.13,13.06 10.4,13.68 10.87,14.13L11.5,14.73C11.5,14.73 11.5,14.73 11.5,14.73C11.5,14.73 11.5,14.73 11.5,14.73C11.83,14.41 12.4,14.41 12.72,14.73L13.35,14.13C13.82,13.68 14.09,13.06 14.09,12.4V5.82C14,4.88 13.09,4.24 12.1,4.24M15,14.88C15,14.88 15,14.88 15,14.88C14.73,14.42 14.22,14.13 13.65,14.13H10.58C9.97,14.13 9.43,14.46 9.19,14.95L5.1,22H19.13L15,14.88Z" />
  </svg>
);
