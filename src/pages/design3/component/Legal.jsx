import "./page.css";
import legal1 from "/legal1.png";
import legal2 from "/legal2.png";
import legal3 from "/legal3.png";
import bgGif from "/legal.gif";
import SectionTitle from "../../../components/Title/SectionTitle";
import { motion } from "framer-motion";

const Operation = () => {
  const cards = [
    {
      icon: legal1,
      title: "Accelerate cycle times",
      text: "Cut turnaround time with automated reviews, instant redlines, and intelligent workflows that eliminate repetitive manual work.",
      btn: "Learn More",
    },
    {
      icon: legal2,
      title: "Get full visibility",
      text: "See every contract, every status, and every risk exposure in one clear dashboard — from first draft to signature and beyond.",
      btn: "Learn More",
    },
    {
      icon: legal3,
      title: "Experience effortless usability",
      text: "Business teams self-serve. Legal stays in control. Simple UI + AI assistance = less friction, more result.",
      btn: "Learn More",
    },
  ];

  return (
    <section className="operation-section">
      <div className="operation-bg">
        <img src={bgGif} alt="Background animation" className="bg-gif" />
      </div>

      <div className="operation-container">
        <SectionTitle
          title="Legal operations that"
          span="move your business forward"
        />

        <motion.div
          className="operation-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="op-card"
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="card-icon"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img src={card.icon} alt={card.title} />
              </motion.div>

              <div className="cart-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>

                <motion.button
                  className="card-btn"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.btn} <span className="arrow">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Operation;
