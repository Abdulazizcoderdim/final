import { useTranslation } from "react-i18next";
import BackgroundShapes from "./BackgroundShapes";
import { featureBlocksData } from "./data";
import FeatureCards from "./SecondBlock";
import styles from "./styles.module.scss";

const FeatureBlock = () => {
  const { t } = useTranslation();
  const block = featureBlocksData;
  return (
    <section className={styles.featureBlock}>
      <div className={styles.container}>
        <div key={block.id} className={styles.block}>
          <BackgroundShapes />
          <div className={styles.content}>
            <div className={styles.badge}>
              {t("features.block.badge", { defaultValue: block.badge })}
            </div>
            <h3 className={styles.title}>
              {t("features.block.title", { defaultValue: block.title })}
            </h3>
            <p className={styles.description}>
              {t("features.block.description", {
                defaultValue: block.description,
              })}
            </p>
          </div>
          <div className={styles.graphic}>
            <img src="/images/featureBlock1.png" alt="featureBlock1" />
          </div>
        </div>
        <FeatureCards />
      </div>
    </section>
  );
};

export default FeatureBlock;
