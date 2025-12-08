import React from 'react';
import { logoData } from './data';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      {logoData.text}
    </a>
  );
};

export default Logo;

