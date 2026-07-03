import React from 'react';
import styles from "./company.module.scss";

interface CompanyProps {
  year: string;
  title: string;
  role: string;
  description: string;
  skills: string[];
  current?: boolean;
}

const Company: React.FC<CompanyProps> = ({ year, title, role, description, skills, current }) => {

  return (
    <div className={`${styles.item} ${current ? styles['item--current'] : ''}`}>
      <div className={styles.item__date}>{year}</div>
      <div className={styles.item__line}>
        <div className={styles.item__dot}></div>
      </div>
      <div className={styles.item__body}>
        <h3 className={styles.item__role}>{role}</h3>
        <div className={styles.item__company}>{title}</div>
        <p className={styles.item__desc}>{description}</p>
        <ul className={styles.item__tags}>
          {skills.map((skill, index) => (
            <li className={styles.item__tag} key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Company;
