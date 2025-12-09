import "./page.css";
import shieldImage from "/homeIcon.svg";
import backgroundImage from "/home.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/design4");
  };

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: "60%" }}
      />

      <motion.div
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.3 },
          },
        }} 
      >
        <motion.div className="hero-content">
          <motion.span
            className="hero-subtitle"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { 
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            WHY LEGALSIFTER
          </motion.span>

          <motion.h1
            className="hero-title"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
          >
            LegalSifter for crypto
            <br />
            operations
          </motion.h1>

          <motion.h2
            className="hero-headline"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
          >
            Manage Crypto & Web3 Contracts
            <br />
            with Speed, Security & Full Control
          </motion.h2>

          <motion.p
            className="hero-text"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
          >
            LegalSifter is an AI-powered contract platform built for modern
            legal operations across Web3, fintech and traditional businesses.
            Automate the repetitive work, eliminate human errors and keep every
            agreement on-chain or off-chain within smart, safe, auditable
            guardrails.
            <br />
            <br />
            Handle everything from NDAs to token agreements to vendor contracts
            with a workflow that’s fast, transparent and built for scale.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
          >
            <motion.button
              className="btn-primary"
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>

            <motion.button
              className="btn-secondary"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              Watch Overview
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img src={shieldImage} alt="LegalSifter Shield" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
