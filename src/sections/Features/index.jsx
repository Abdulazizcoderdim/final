import { useTranslation } from "react-i18next";
import { ShortLineLeft, ShortLineRight } from "../../assets/icons";
import { featuresData } from "./data";
import FeatureBlock from "./FeatureBlocks/FirstBlock";
import styles from "./styles.module.scss";

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeContainer}>
            <ShortLineLeft />
            <div className={styles.badge}>
              {t("features.badge", { defaultValue: featuresData.badge.text })}
            </div>
            <ShortLineRight />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {t("features.title", { defaultValue: featuresData.title })}
            </h2>
            <p className={styles.description}>
              {t("features.description", {
                defaultValue: featuresData.description,
              })}
            </p>
          </div>
        </div>
        <FeatureBlock />
      </div>
    </section>
  );
};

export default Features;
