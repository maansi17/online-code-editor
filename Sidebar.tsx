import React from 'react';

const languages = ['Python', 'JavaScript', 'TypeScript', 'Go', 'PHP', 'Swift', 'Rust', 'C/C++'];

type SidebarProps = {
  onSelectLanguage: (language: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ onSelectLanguage }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white w-16 h-full">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onSelectLanguage(lang)}
          className="m-4 text-sm hover:opacity-80"
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
