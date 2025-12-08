import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PlusIcon } from "../../assets/icons";
import { faqData } from "./data";
import styles from "./styles.module.scss";

const FAQ = () => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(1);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h5 className={styles.tagTitle}>
          {t("faq.tag", { defaultValue: "FAQ's" })}
        </h5>
        <h2 className={styles.title}>
          {t("faq.title", { defaultValue: faqData.title })}
        </h2>
        <div className={styles.questions}>
          {faqData.questions.map((item) => (
            <div
              key={item.id}
              className={`${styles.questionItem} ${
                openId === item.id ? styles.open : ""
              }`}
            >
              <div
                className={styles.questionHeader}
                onClick={() => toggleQuestion(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  toggleQuestion(item.id)
                }
                aria-expanded={openId === item.id}
              >
                <div className={styles.question}>
                  {t(`faq.questions.${item.id}.question`, {
                    defaultValue: item.question,
                  })}
                </div>
                <div
                  className={`${styles.toggle} ${
                    openId === item.id ? styles.open : ""
                  }`}
                >
                  <PlusIcon
                    className={openId === item.id ? styles.plus : styles.xmark}
                  />
                </div>
              </div>
              <div
                className={`${styles.answer} ${
                  openId === item.id ? styles.expanded : ""
                }`}
              >
                <div className={styles.answerContent}>
                  {t(`faq.questions.${item.id}.answer`, {
                    defaultValue: item.answer,
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
