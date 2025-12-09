import { motion } from "framer-motion";
import SectionTitle from "../../../components/Title/SectionTitle";
import "./page.css";
import figure1 from "/figure1.png";
import figure2 from "/figure2.png";

import partner1 from "/partner1.svg";
import partner2 from "/partner2.svg";

const Partner = ({ title, desc, span }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="partner-container pb-16">
      <SectionTitle title={title} span={span} subtitle={desc} />

      <div className="partner-cards">
        <motion.div
          className="analyst-card"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          whileHover={{ y: -12, transition: { duration: 0.3 } }}
        >
          <motion.div className="analyst-image">
            <img src={figure1} alt="Gartner" className="partner-image" />
            <img src={partner1} className="analyst-logo" />
          </motion.div>

          <div className="analyst-content">
            <h3>Easy to adopt</h3>
            <p>
              A clean, intuitive platform designed for both crypto-native teams
              and everyday users. Advanced AI <br /> capabilities + human
              experts ensure smooth <br /> onboarding and instant value.
            </p>
            <motion.button
              className="analyst-btn text-black"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              Learn More →
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="analyst-card"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          whileHover={{ y: -12, transition: { duration: 0.3 } }}
        >
          <motion.div className="analyst-image">
            <img src={figure2} alt="Forrester" className="partner-image" />
            <img src={partner2} className="analyst-logo" />
          </motion.div>

          <div className="analyst-content">
            <h3>Easy to adopt</h3>
            <p>
              A clean, intuitive platform designed for both crypto-native teams
              and everyday users. Advanced AI <br /> capabilities + human
              experts ensure smooth <br /> onboarding and instant value.
            </p>
            <motion.button
              className="analyst-btn text-black"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              Learn More →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
