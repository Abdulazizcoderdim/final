import "./blog.css";
import backgroundImage from "/blogback.png";
import logo from "/logo.png";
import { motion } from "framer-motion";

const BlogHomePage = () => {
  return (
    <div className="blog-container">
      <motion.div
        className="waves-bg"
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: "50%" }}
        initial={{ y: 0 }}
        animate={{ y: -150 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="image-placeholder"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="placeholder-box">
            <span>Image / Video</span>
          </div>
        </motion.div>

        <motion.div
          className="text-content"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="badge-date"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span className="badge" whileHover={{ scale: 1.1 }}>
              Research
            </motion.span>
            <span className="date">November 20, 2025</span>
          </motion.div>

          <motion.h1
            className="blog-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
          >
            The Great AI Heist: Generative AI Is Just a Polite Term for
            <br />
            Industrial-Scale Plagiarism
          </motion.h1>

          <motion.p
            className="blog-description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
          >
            Is generative AI learning or just copying? We explore AI plagiarism,
            from verbatim text to ghost signatures, and ask if fair use is a
            valid defense.
          </motion.p>

          <motion.div
            className="author"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ x: 8 }}
          >
            <img src={logo} alt="Ozark AI" className="author-avatar" />
            <div className="author-info">
              <div className="author-name">Ozark AI</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogHomePage;
