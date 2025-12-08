import { defaultLanguage, languages } from "./data";
import styles from "./styles.module.scss";

const LanguageSelector = ({ currentLanguage = defaultLanguage, onChange }) => {
  return (
    <div className={styles.languageSelector}>
      <span className={styles.icon}>🌐</span>
      <select
        className={styles.select}
        value={currentLanguage}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
