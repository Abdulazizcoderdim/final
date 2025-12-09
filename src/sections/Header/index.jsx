import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowDownIcon, LanguageIcon } from "../../assets/icons";
import { headerData } from "./data";
import styles from "./styles.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language || headerData.language.current
  );
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleLangChange = (lng) =>
      setCurrentLanguage(lng || headerData.language.current);
    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/icons/OzakAiLogo.svg" alt="" width="140px" />
        <nav className={styles.nav}>
          {headerData.navItems.map((item, index) => (
            <Link key={index} to={item.href} className={styles.navItem}>
              {t(`header.nav.${item.key}`, { defaultValue: item.label })}
              {item.hasDropdown && <ArrowDownIcon />}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <div className={styles.languageSelect} ref={languageDropdownRef}>
            <button
              className={`${styles.languageButton} ${
                isLanguageOpen ? styles.open : ""
              }`}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <LanguageIcon />
              <span>
                {t(`header.language.${currentLanguage}`, {
                  defaultValue: currentLanguage.toUpperCase(),
                })}
              </span>
              <ArrowDownIcon />
            </button>
            {isLanguageOpen && (
              <div className={styles.languageDropdown}>
                {headerData.language.options.map((lang) => (
                  <button
                    key={lang}
                    className={`${styles.languageOption} ${
                      currentLanguage === lang ? styles.active : ""
                    }`}
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {t(`header.language.${lang}`, {
                      defaultValue: lang.toUpperCase(),
                    })}
                  </button>
                ))}
              </div>
            )}
          </div>
          {headerData.buttons.map((btn, index) => (
            <button key={index} className={styles[btn.variant]}>
              {t(`header.buttons.${btn.key}`, { defaultValue: btn.label })}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-[4px] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-[3px] bg-white transition-all ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-white transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-white transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#02071a] md:hidden flex flex-col px-6 py-4 shadow-lg z-50">
            {headerData.navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-white py-3 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`header.nav.${item.key}`, { defaultValue: item.label })}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              {headerData.buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`${styles[btn.variant]} py-3`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`header.buttons.${btn.key}`, { defaultValue: btn.label })}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
