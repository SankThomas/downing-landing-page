import hero from "../images/hero.svg"
import { motion } from "framer-motion"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <motion.article
            className="text"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h3>This is Downing</h3>
            <h1>The Minimalist CSS Framework</h1>
          </motion.article>
          <motion.article
            className="image"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <img src={hero} alt="html and css" />
          </motion.article>
        </div>
      </section>
    </>
  )
}

export default Showcase
