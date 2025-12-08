import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LineLeft, LineRight, PlayIcon } from "../../assets/icons";
import { heroData } from "./data";
import styles from "./styles.module.scss";

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", handlePlay);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <LineLeft />
          <div className={styles.badge}>
            {t("hero.badge", { defaultValue: heroData.badge.text })}
          </div>
          <LineRight />
        </div>
        <h1 className={styles.title}>
          {t("hero.title", { defaultValue: heroData.title })}
        </h1>
        <p className={styles.subtitle}>
          {t("hero.subtitle", { defaultValue: heroData.subtitle })}
        </p>
        <div className={styles.videoContainer} onClick={togglePlayPause}>
          <video
            ref={videoRef}
            className={styles.videoPlayer}
            src="/video/screenRecord.mov"
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              className={styles.playOverlay}
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              aria-label="Play video"
            >
              <PlayIcon />
            </button>
          )}
        </div>
      </div>
      <Link to={heroData.cta.href} className={styles.ctaButton}>
        {t("hero.cta", { defaultValue: heroData.cta.label })}
      </Link>
    </section>
  );
};

export default Hero;
