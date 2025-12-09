import { useState } from "react";
import "./page.css";
import operation1 from "/operation1.png";
import operation2 from "/operation2.jpg";
import operation3 from "/operation3.jpg";
import SectionTitle from "../../../components/Title/SectionTitle";
import { motion } from "framer-motion";

const AccordionItem = ({ title, desc, isOpen, onClick }) => {
  return (
    <motion.div
      className={`accordion-item ${isOpen ? "open" : ""}`}
      onClick={onClick}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="accordion-header">
        <h4>{title}</h4>
      </div>
      <motion.div
        className="accordion-content"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p>{desc}</p>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);
  const [openIndex3, setOpenIndex3] = useState(null);

  const card1Items = [
    {
      title: "No-code workflow builder",
      desc: "Launch approval flows, review paths, and risk-checks in minutes — no engineering required.",
    },
    {
      title: "AI contract drafting & review",
      desc: "Generate first drafts in seconds and get instant redlines with AI trained on millions of contracts.",
    },
    {
      title: "Dynamic approval routing",
      desc: "Route contracts automatically based on value, department, region, or custom rules.",
    },
  ];

  const card2Items = [
    {
      title: "Unified contract dashboard",
      desc: "All contracts, statuses, and deadlines in one clear view.",
    },
    {
      title: "Searchable contract repository",
      desc: "Find any clause or term across your entire contract portfolio.",
    },
    {
      title: "Flexible data management",
      desc: "Custom fields, tags, and metadata tailored to your business.",
    },
  ];

  const card3Items = [
    {
      title: "Work where your team works",
      desc: "Create and negotiate contracts directly in Slack, Teams, Google Docs, etc.",
    },
    {
      title: "Intuitive UI anyone can use",
      desc: "Seamless connections with Google Drive, Dropbox, Salesforce, and 50+ tools.",
    },
    {
      title: "Standardized templates & playbooks",
      desc: "Ensure consistency while giving teams self-serve access.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="features-section">
      <SectionTitle
        title="How legal operations"
        span="produce results with LegalSifter"
      />

      <div className="features-container">
        <div className="features-grid">
          <motion.div
            className="feature-card card-1"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="card-content">
              <motion.span className="card-badge" whileHover={{ scale: 1.1 }}>
                SPEED
              </motion.span>
              <h3 className="operation-title1">
                Accelerate the entire contract lifecycle
              </h3>

              <div className="accordion">
                {card1Items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    title={item.title}
                    desc={item.desc}
                    isOpen={openIndex1 === i}
                    onClick={() => setOpenIndex1(openIndex1 === i ? null : i)}
                  />
                ))}
              </div>
            </div>

            <motion.div className="card-image" whileHover={{ scale: 1.03 }}>
              <img src={operation1} alt="Speed" />
            </motion.div>
          </motion.div>

          <motion.div
            className="feature-card card-2"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <motion.div className="card-image" whileHover={{ scale: 1.03 }}>
              <img src={operation2} alt="360 view" />
            </motion.div>

            <div className="card-content top">
              <motion.span className="card-badge" whileHover={{ scale: 1.1 }}>
                VISIBILITY
              </motion.span>
              <h3 className="operation-title1">
                A 360° view of your legal operations
              </h3>

              <div className="accordion">
                {card2Items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    title={item.title}
                    desc={item.desc}
                    isOpen={openIndex2 === i}
                    onClick={() => setOpenIndex2(openIndex2 === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="feature-card card-3"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="card-content">
              <motion.span className="card-badge" whileHover={{ scale: 1.1 }}>
                EASE OF USE
              </motion.span>
              <h3 className="operation-title1">
                Self-serve contracting without losing control
              </h3>

              <div className="accordion">
                {card3Items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    title={item.title}
                    desc={item.desc}
                    isOpen={openIndex3 === i}
                    onClick={() => setOpenIndex3(openIndex3 === i ? null : i)}
                  />
                ))}
              </div>
            </div>

            <motion.div className="card-image" whileHover={{ scale: 1.03 }}>
              <img src={operation3} alt="Self-serve" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="features-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
