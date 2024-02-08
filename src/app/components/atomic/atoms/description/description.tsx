import React from 'react';

interface DescriptionProps {
  htmlContent: string;
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({ htmlContent, className }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={className}></div>
  );
}

export default Description;
