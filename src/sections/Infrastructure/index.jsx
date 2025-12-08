import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  businessesTabsData,
  developersTabsData,
  infrastructureData,
  infrastructureTabsData,
} from "./data";
import styles from "./styles.module.scss";

const RenderInfrastructure = ({ data, t }) => {
  if (!Array.isArray(data)) return null;
  return data.map((item, idx) => (
    <div className={styles.card} key={idx}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt="" />
      </div>
      <h3 className={styles.title}>
        {t(`infrastructure.tabs.${idx}.title`, { defaultValue: item.title })}
      </h3>
      <p className={styles.subTitle}>
        {t(`infrastructure.tabs.${idx}.subTitle`, {
          defaultValue: item.subTitle,
        })}
      </p>
    </div>
  ));
};

const RenderBusinesses = ({ data, t }) => {
  if (!Array.isArray(data)) return null;
  return data.map((item, idx) => (
    <div className={styles.card} key={idx}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt="" />
      </div>
      <h3 className={styles.title}>
        {t(`infrastructure.tabs.${idx}.title`, { defaultValue: item.title })}
      </h3>
      <p className={styles.subTitle}>
        {t(`infrastructure.tabs.${idx}.subTitle`, {
          defaultValue: item.subTitle,
        })}
      </p>
    </div>
  ));
};

const RenderDevelopers = ({ data, t }) => {
  if (!Array.isArray(data)) return null;
  return data.map((item, idx) => (
    <div className={styles.card} key={idx}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt="" />
      </div>
      <h3 className={styles.title}>
        {t(`infrastructure.tabs.${idx}.title`, { defaultValue: item.title })}
      </h3>
      <p className={styles.subTitle}>
        {t(`infrastructure.tabs.${idx}.subTitle`, {
          defaultValue: item.subTitle,
        })}
      </p>
    </div>
  ));
};

const Infrastructure = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("infrastructure");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const isActiveTab = (tab) => {
    return activeTab === tab;
  };

  return (
    <section className={styles.infrastructure}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {t("infrastructure.title", {
                defaultValue: infrastructureData.title,
              })}
            </h2>
            <p className={styles.description}>
              {t("infrastructure.description", {
                defaultValue: infrastructureData.description,
              })}
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              isActiveTab("infrastructure") ? styles.active : ""
            }`}
            onClick={() => handleTabClick("infrastructure")}
          >
            {t("infrastructure.labels.individuals", {
              defaultValue: "For Individuals",
            })}
          </div>
          <div
            className={`${styles.tab} ${
              isActiveTab("businesses") ? styles.active : ""
            }`}
            onClick={() => handleTabClick("businesses")}
          >
            {t("infrastructure.labels.businesses", {
              defaultValue: "For Businesses",
            })}
          </div>
          <div
            className={`${styles.tab} ${
              isActiveTab("developers") ? styles.active : ""
            }`}
            onClick={() => handleTabClick("developers")}
          >
            {t("infrastructure.labels.developers", {
              defaultValue: "For Developers",
            })}
          </div>
        </div>
        <div className={styles.cardContainer}>
          {activeTab === "infrastructure" && (
            <RenderInfrastructure data={infrastructureTabsData} t={t} />
          )}
          {activeTab === "businesses" && (
            <RenderBusinesses data={businessesTabsData} t={t} />
          )}
          {activeTab === "developers" && (
            <RenderDevelopers data={developersTabsData} t={t} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
