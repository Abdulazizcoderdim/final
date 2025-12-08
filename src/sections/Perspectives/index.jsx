import { useTranslation } from "react-i18next";
import grafic from "../../assets/icons/grafic.webp";
import { perspectivesData } from "./data";
import JoinCommunity from "./JoinCommunity";
import styles from "./styles.module.scss";

const Perspectives = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.perspectives}>
      <img src={grafic?.src || grafic} alt="" className={styles.grafic} />
      <img src="/images/neyrolines.svg" alt="" className={styles.neyrolines} />
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t("perspectives.title", { defaultValue: perspectivesData.title })}
        </h2>
        <div className={styles.quotes}>
          {perspectivesData.quotes.map((quote) => (
            <div key={quote.id} className={styles.quoteCard}>
              <p className={styles.quote}>
                "
                {t(`perspectives.quotes.${quote.id}.quote`, {
                  defaultValue: quote.quote,
                })}
                "
              </p>
              <div className={styles.bottom}>
                <img src={quote.logo} alt="" />
                <div className={styles.author}>
                  -{" "}
                  {t(`perspectives.quotes.${quote.id}.author`, {
                    defaultValue: quote.author,
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JoinCommunity />
    </section>
  );
};

export default Perspectives;
