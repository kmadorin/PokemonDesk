import React from 'react';

interface EmptyPageProps {
  title?: String;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div>This is empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
