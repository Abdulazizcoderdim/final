import { useTranslation } from "react-i18next";
import { ShortLineLeft, ShortLineRight } from "../../assets/icons";
import { roadmapData } from "./data";
import styles from "./styles.module.scss";

const Roadmap = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.roadmap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeContainer}>
            <ShortLineLeft />
            <div className={styles.badge}>
              {t("roadmap.badge", { defaultValue: roadmapData.badge.text })}
            </div>
            <ShortLineRight />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {t("roadmap.title", { defaultValue: roadmapData.title })}
            </h2>
            <p className={styles.description}>
              {t("roadmap.description", {
                defaultValue: roadmapData.description,
              })}
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          {roadmapData.cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardId}>{card.id}</div>
                <div className={styles.cardTitle}>
                  {t(`roadmap.cards.${card.id}.title`, {
                    defaultValue: card.title,
                  })}
                </div>
                <div className={styles.cardStatus}>
                  {t(`roadmap.cards.${card.id}.status`, {
                    defaultValue: card.status,
                  })}
                </div>
              </div>
              <div className={styles.cardSteps}>
                {card.steps.map((step, idx) => (
                  <div key={step} className={styles.cardStep}>
                    {t(`roadmap.cards.${card.id}.steps.${idx}`, {
                      defaultValue: step,
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
