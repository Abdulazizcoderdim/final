import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ShortLineLeft, ShortLineRight } from "../../assets/icons";
import { integratedWithData } from "./data";
import styles from "./styles.module.scss";

const IntegratedWith = () => {
  const { t } = useTranslation();
  const [trackWidth, setTrackWidth] = useState(0);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const loopedTechnologies = useMemo(
    () => ({
      part1: [
        ...integratedWithData.technologies.part1,
        ...integratedWithData.technologies.part1,
        ...integratedWithData.technologies.part1,
      ],
      part2: [
        ...integratedWithData.technologies.part2,
        ...integratedWithData.technologies.part2,
        ...integratedWithData.technologies.part2,
      ],
    }),
    []
  );

  useEffect(() => {
    if (row1Ref.current) {
      const width = row1Ref.current.scrollWidth / 3;
      setTrackWidth(width);
    }
  }, [loopedTechnologies]);

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
          {/* First Row - Left to Right */}
          <div className={styles.marquee}>
            <motion.div
              ref={row1Ref}
              className={styles.track}
              animate={{
                x: [-trackWidth, 0],
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
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
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className={styles.marquee}>
            <motion.div
              ref={row2Ref}
              className={`${styles.track} ${styles.trackReverse}`}
              animate={{
                x: [0, -trackWidth],
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {loopedTechnologies.part2.map((tech, index) => (
                <div
                  key={`row2-${tech.name}-${index}`}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedWith;
