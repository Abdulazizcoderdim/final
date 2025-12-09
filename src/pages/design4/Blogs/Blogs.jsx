import "./blog.css";
import logo from "/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const blogPosts = [
  {
    title:
      "The Great AI Heist: Generative AI Is Just a Polite Term for Industrial-Scale Plagiarism",
    excerpt:
      "Is generative AI learning or just copying? We explore AI plagiarism, from verbatim text to ghost...",
    date: "November 18, 2025",
    category: "Research",
  },
  {
    title:
      "x402: The Internet’s “Payment Required” Button (And Why Our AI Subscriptions Are Holding It Back)",
    excerpt:
      "Subscriptions and API keys are holding AI back. It’s time the web got paid the old-fashioned way...",
    date: "November 4, 2025",
    category: "Research",
  },
  {
    title: "AI Attention Economy: Are You the Customer or the Product?",
    excerpt:
      "Let’s talk how AI is designed to capture your attention for profit. The hidden costs of “free” apps...",
    date: "October 8, 2025",
    category: "Research",
  },
  {
    title: "Ozark AI x Megane: Real-Time Insights Fueled by Shared Bandwidth",
    excerpt:
      "Ozark AI’s Prediction Agents team up with Megane to make internet bandwidth affordable...",
    date: "October 2, 2025",
    category: "Partnerships",
  },
  {
    title: "Introducing Eon",
    excerpt:
      "Discover Eon, the intuitive dashboard from Ozark AI where you access private Predictive Agents and...",
    date: "October 1, 2025",
    category: "Product",
  },
  {
    title:
      "Ozark AI x Phala: Secure Predictions with Trusted, Private AI Computing",
    excerpt:
      "Ozark AI’s Prediction Agents team up with Phala’s confidential computing to boost privacy and trust...",
    date: "October 1, 2025",
    category: "Partnerships",
  },
  {
    title: "Inside the Ozark Streaming Network: Real-Time Data Magic",
    excerpt:
      "Learn how Ozark Streaming Network (OSN) handles billions of tokens per second for real-time AI...",
    date: "September 28, 2025",
    category: "Product",
  },
  {
    title:
      "Ozark AI Completes Sherlock Audit: Zero Unresolved Issues for Rock-Solid Security",
    excerpt:
      "Ozark AI has completed a rigorous security audit by Sherlock with zero unresolved issues...",
    date: "September 28, 2025",
    category: "Announcements",
  },
  {
    title:
      "Ozark AI x Celo: Scaling Predictive AI with Fast, Low-Cost Onchain Transactions",
    excerpt:
      "Ozark AI’s partnership with Celo brings lightning-fast, affordable onchain transactions...",
    date: "September 24, 2025",
    category: "Partnerships",
  },
  {
    title: "What Happens When AI Becomes Its Own Bank?",
    excerpt:
      "In the near future, AI won’t ask for your credit card. It will have its own wallet, budget, and spend...",
    date: "September 17, 2025",
    category: "Research",
  },
  {
    title:
      "Ozark AI x Mira Network: Building Trustworthy Predictions with Verifiable Compute",
    excerpt:
      "Ozark AI teams up with Mira Network to enable verifiable, decentralized AI predictions...",
    date: "September 17, 2025",
    category: "Partnerships",
  },
  {
    title: "Ozark AI x Perceptron: Fast Predictions Powered by Rewarded Agents",
    excerpt:
      "Discover how Ozark AI and Perceptron together reward agents to deliver fast, accurate predictions...",
    date: "September 16, 2025",
    category: "Partnerships",
  },
];

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts
    .filter((post) => activeTab === "All" || post.category === activeTab)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const truncationStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div className="blogs-page">
      <motion.header
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container2">
          <div className="nav-left">
            {[
              "All",
              "Research",
              "Announcements",
              "Product",
              "Partnerships",
            ].map((tab, i) => (
              <motion.button
                key={i}
                className={`nav-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          <motion.div
            className="search-bar"
            initial={{ scaleX: 0.8, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FiSearch style={{ marginRight: "8px" }} className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </motion.div>
        </div>
      </motion.header>

      <main className="blogs-grid">
        {currentPosts.length === 0 ? (
          <motion.p
            className="no-posts"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The posts you searched for were not found.
          </motion.p>
        ) : (
          currentPosts.map((post, index) => (
            <motion.article
              key={index}
              className="blog-card-new"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="image-placeholder1" />

              <div className="card-content-new">
                <motion.h2
                  className="card-title-new"
                  style={truncationStyle}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {post.title}
                </motion.h2>

                <p className="card-excerpt-new" style={truncationStyle}>
                  {post.excerpt}
                </p>

                <motion.div
                  className="card-footer-new"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <img src={logo} alt="Ozark AI" className="logo" />
                  <span className="footer-text">Ozark AI</span>
                  <span className="dot">•</span>
                  <span className="date-new">{post.date}</span>
                </motion.div>
              </div>
            </motion.article>
          ))
        )}
      </main>

      <motion.div
        className="pagination"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <motion.span
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrev}
          whileHover={{ x: -4 }}
          style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
        >
          Previous
        </motion.span>
        <span className="page-number">{currentPage}</span>
        <motion.span
          className={`next ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={handleNext}
          whileHover={{ x: 4 }}
          style={{
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Blogs;
