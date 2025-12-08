import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ShortLineLeft, ShortLineRight } from "../../assets/icons";
import { integratedWithData } from "./data";
import styles from "./styles.module.scss";

const IntegratedWith = () => {
  const { t } = useTranslation();
  const loopedTechnologies = useMemo(
    () => ({
      part1: [
        ...integratedWithData.technologies.part1,
        ...integratedWithData.technologies.part1,
      ],
      part2: [
        ...integratedWithData.technologies.part2,
        ...integratedWithData.technologies.part2,
      ],
    }),
    []
  );

  return (
    <section className={styles.integratedWith}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badgeContainer}>
            <ShortLineLeft />
            <div className={styles.badge}>
              {t("integrated.badge", {
                defaultValue: integratedWithData.badgeText,
              })}
            </div>
            <ShortLineRight />
          </div>
          <h2 className={styles.title}>
            {t("integrated.title", { defaultValue: integratedWithData.title })}
          </h2>
        </header>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <div className={styles.marqueeRows}>
          <div className={styles.marquee}>
            <div className={styles.track}>
              {loopedTechnologies.part1.map((tech, index) => (
                <div
                  key={`row1-${tech.name}-${index}`}
                  className={styles.techItem}
                >
                  <div className={styles.logo}>
                    <img
                      src={tech.logo ? tech.logo : "/icons/Next.js.png"}
                      alt={`${tech.name} logo`}
                    />
                  </div>
                  <span className={styles.name}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.marquee}>
            <div className={`${styles.track} ${styles.trackReverse}`}>
              {loopedTechnologies.part2.map((tech, index) => (
                <div
                  key={`row2-${tech.name}-${index}`}
                  className={styles.techItem}
                >
                  <div className={styles.logo}>
                    <img
                      src={tech.logo ? tech.logo : "/icons/Next.js.png"}
                      alt={`${tech.name} logo`}
                    />{" "}
                  </div>
                  <span className={styles.name}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedWith;
