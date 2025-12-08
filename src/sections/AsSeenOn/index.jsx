import { useTranslation } from "react-i18next";
import { ShortLineLeft, ShortLineRight } from "../../assets/icons";
import { AsSeenOnData } from "./data";
import styles from "./styles.module.scss";

const AsSeenOn = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.asSeenOn}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeContainer}>
            <ShortLineLeft />
            <div className={styles.badge}>
              {t("asSeenOn.badge", { defaultValue: AsSeenOnData.badge })}
            </div>
            <ShortLineRight />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {t("asSeenOn.title", { defaultValue: AsSeenOnData.title })}
            </h2>
            <p className={styles.description}>
              {t("asSeenOn.description", {
                defaultValue: AsSeenOnData.description,
              })}
            </p>
          </div>
        </div>

        <div className={styles.gridPanel}>
          <div className={styles.grid}>
            {AsSeenOnData.publications.map((item, index) => {
              const isLastCol = (index + 1) % 5 === 0;
              const isLastRow = index >= AsSeenOnData.publications.length - 5;

              return (
                <div
                  key={item.key}
                  className={`${styles.cell} ${
                    isLastCol ? styles.noRightBorder : ""
                  } ${isLastRow ? styles.noBottomBorder : ""}`}
                >
                  <img className={styles.image} src={item.url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
