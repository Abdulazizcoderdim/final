import { useTranslation } from "react-i18next";
import { featureCardsData } from "./data";
import styles from "./styles.module.scss";

const FeatureCards = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.cardsGrid}>
      {featureCardsData.map((card) => (
        <article key={card.id} className={styles.card}>
          <div className={styles.cardGlow} />
          <div className={styles.cardTop}>
            <div className={styles.cardSeal}>
              <img src={card.imgSrc1} className={styles.seal} alt="" />
            </div>
            <div className={styles.cardIllustration}>
              <img src={card.imgSrc2} className={styles.illustration} alt="" />
            </div>
          </div>
          <div className={styles.cardBadge}>
            {t(`features.cards.${card.id}.badge`, { defaultValue: card.badge })}
          </div>
          <h3 className={styles.cardTitle}>
            <span className={styles.cardTitleHighlight}>
              {t(`features.cards.${card.id}.title`, {
                defaultValue: card.title,
              })}
            </span>
          </h3>
          <div className={styles.cardDescription}>
            {card.description.map((text, idx) => (
              <p key={idx}>
                {t(`features.cards.${card.id}.description.${idx}`, {
                  defaultValue: text,
                })}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default FeatureCards;
