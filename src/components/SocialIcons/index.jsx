import { socialIconsData } from "./data";
import styles from "./styles.module.scss";

const SocialIcons = ({ size = "medium" }) => {
  return (
    <div className={styles.socialIcons}>
      {socialIconsData.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className={`${styles.socialIcon} ${
            size === "small" ? styles.small : ""
          }`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
