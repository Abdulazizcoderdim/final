import { useMemo } from "react";
import { integratedWithData } from "../../sections/IntegratedWith/data";
import styles from "../../sections/IntegratedWith/styles.module.scss";

const Design2integrate = () => {
  const loopedTechnologies = useMemo(
    () => ({
      part1: [
        ...integratedWithData.technologies.part1,
        ...integratedWithData.technologies.part1,
      ],
    }),
    []
  );
  return (
    <section className="">
      <div className="flex w-full justify-center">
        <h1 className="md:text-[40px] text-2xl px-4 font-normal text-white py-7">
          Trusted by millions of users worldwide
        </h1>
      </div>
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
      </div>
    </section>
  );
};

export default Design2integrate;
