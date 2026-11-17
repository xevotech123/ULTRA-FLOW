
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* ABOUT SECTION */}
      <motion.section
        className="home-about"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="home-about__content">
          <h2>
            Engineering Safety.
            <br />
            <span>Protecting What Matters.</span>
          </h2>

          <p>
            Ultra Flow Engineering Services delivers dependable fire
            protection equipment and engineering solutions for industrial
            and commercial environments. We are committed to quality,
            reliability and safety-focused solutions.
          </p>

          <a href="/about" className="home-about__button">
            LEARN MORE <span>→</span>
          </a>
        </div>

        <motion.div
          className="home-about__visual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="home-about__visual-inner">
            <div className="home-about__icon">✧</div>
            <h3>Built Around Safety</h3>
            <p>
              Protection-focused engineering solutions for demanding
              environments.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section className="home-services">
        <p className="eyebrow">OUR SERVICES</p>
        <h2>
          Engineering <span>Safety Solutions</span>
        </h2>
        <p>
          Delivering reliable fire protection and engineering
          solutions for safer industrial environments.
        </p>
        <a href="/services">Explore Our Services →</a>
      </section>

      {/* CONTACT SECTION */}
      <section className="bottom-cta">
        <div>
          <p className="eyebrow">HAVE AN ENGINEERING REQUIREMENT?</p>
          <h2>Let's Build a Safer, Stronger Future Together.</h2>
        </div>
        <a href="/contact">Contact Us →</a>
      </section>
    </>
  )
}
