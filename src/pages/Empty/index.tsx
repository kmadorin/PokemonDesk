import React from 'react';
import Header from '../../components/Header';

interface EmptyPageProps {
  title?: String;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
