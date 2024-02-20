import React from 'react';
import styles from './couseItem.module.scss';

interface Course {
  title: string;
  complement: string;
}

interface CourseItemProps {
  items: Course[];
}

export const CourseItem: React.FC<CourseItemProps> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={styles.courseItem__title}>
            {item.title}
            <span className={styles.courseItem__complement}>
              {item.complement}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

