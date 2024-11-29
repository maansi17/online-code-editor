import React from 'react';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded"
    >
      Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Theme
    </button>
  );
};
