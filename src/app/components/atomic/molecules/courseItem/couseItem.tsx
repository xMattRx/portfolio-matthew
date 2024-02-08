import React from 'react';

interface CourseItemProps {
  title: string;
  complement: string;
}

export const CourseItem: React.FC<CourseItemProps> = ({ title, complement }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        <li>{title} <span>{complement}</span></li>
      </ul>
    </>
  );
}

