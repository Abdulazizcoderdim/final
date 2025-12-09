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
          {perspectivesData.quotes.map((quote, i) => (
            <div
              key={quote.id}
              className={`${styles.quoteCard} ${
                i === 2 ? "relative z-10" : "relative"
              }`}
            >
              {i === 2 && (
                <img
                  src="/abs.svg"
                  className="absolute -right-36 max-sm:hidden -top-36 -z-10 pointer-events-none select-none"
                  alt=""
                />
              )}
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
