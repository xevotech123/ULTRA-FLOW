import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

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
