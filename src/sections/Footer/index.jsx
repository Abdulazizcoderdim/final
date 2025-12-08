import { useTranslation } from "react-i18next";
import { ArrowRight, BackToTop } from "../../assets/icons";
import { footerData } from "./data";
import styles from "./styles.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainFooter}>
          <div className={styles.brand}>
            <img
              className={styles.logo}
              src="/icons/OzakAiLogo.svg"
              alt=""
              width="140px"
            />
            <p className={styles.brandDescription}>
              {t("footer.brand.description", {
                defaultValue: footerData.brand.description,
              })}
            </p>
            <div className={styles.newsletter}>
              <input
                type="email"
                placeholder="Email address"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>
                <ArrowRight />
              </button>
            </div>
            <div className={styles.socialLinks}>
              {footerData.socialLinks.map(({ icon: Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  className={styles.socialLink}
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>
              {t("footer.quickLinks", { defaultValue: "Quick Links" })}
            </div>
            {footerData.quickLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.columnLink}>
                {t(`footer.links.${link.key}`, { defaultValue: link.label })}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>
              {t("footer.aiAgents", { defaultValue: "AI Agents" })}
            </div>
            {footerData.aiAgents.map((link, index) => (
              <a key={index} href={link.href} className={styles.columnLink}>
                {t(`footer.links.${link.key}`, { defaultValue: link.label })}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>
              {t("footer.extras", { defaultValue: "Extras" })}
            </div>
            {footerData.extras.map((link, index) => (
              <a key={index} href={link.href} className={styles.columnLink}>
                {t(`footer.links.${link.key}`, { defaultValue: link.label })}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div></div>
          <div className={styles.legalLinks}>
            {footerData.legal.map((link, index) => (
              <a key={index} href={link.href} className={styles.legalLink}>
                {t(`footer.links.${link.key}`, { defaultValue: link.label })}
              </a>
            ))}
          </div>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <BackToTop /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
