import React from 'react';

interface FooterItemProps {
  href: string;
  value: string;
}

export const FooterItem: React.FC<FooterItemProps> = ({ href, value }) => {
  return (
    <li>
      <a target="_blank" href={href}>{value}</a>
    </li>
  );
}
