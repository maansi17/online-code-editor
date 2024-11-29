import React from 'react';

type OutputPanelProps = {
  output: string;
};

export const OutputPanel: React.FC<OutputPanelProps> = ({ output }) => {
  return (
    <div className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white p-4">
      <h3 className="font-bold">Output:</h3>
      <pre>{output || 'Run your code to see the output here.'}</pre>
    </div>
  );
};
