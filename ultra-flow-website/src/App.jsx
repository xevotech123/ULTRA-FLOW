
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Fire Fighting Equipment',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85',
    description: 'Reliable fire fighting equipment and safety solutions for industrial and commercial environments.',
    link: '/services'
  },
  {
    number: '02',
    title: 'Foam & Suppression Systems',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=900&q=85',
    description: 'Advanced foam and fire suppression solutions designed to support industrial fire safety.',
    link: '/services'
  },
  {
    number: '03',
    title: 'Sprinkler Systems',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900&q=85',
    description: 'Dependable sprinkler system solutions for effective fire protection and property safety.',
    link: '/services'
  },
  {
    number: '04',
    title: 'Pumps & Rescue Equipment',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&q=85',
    description: 'Industrial pumps and rescue equipment for demanding operational and emergency requirements.',
    link: '/services'
  }
]

export default function App() {
  return (
    <div className="website">

      <Navbar />

      <main>

        <Hero />

        <TrustStrip />

        {/* OUR SERVICES */}
        <section className="products-section" id="services">

          <div className="section-heading">

            <div>
              <p className="eyebrow">OUR SERVICES</p>

              <h2>
                Engineering
                <br />
                <span>Safety Solutions</span>
              </h2>
            </div>

            <div>
              <p>
                Comprehensive fire protection, safety and
                engineering solutions designed to support
                safer and more reliable industrial operations.
              </p>

              <a href="/services" className="hero-button">
                Explore All Services →
              </a>
            </div>

          </div>

          <div className="product-grid">

            {services.map((service) => (

              <article className="product-card" key={service.number}>

                <div className="product-image">
                  <img src={service.image} alt={service.title} />

                  <span className="product-index">
                    {service.number}
                  </span>
                </div>

                <div className="product-content">

                  <div className="product-title-row">
                    <h3>{service.title}</h3>
                    <span className="product-arrow">↗</span>
                  </div>

                  <div className="product-preview">
                    <p>{service.description}</p>

                    <a
                      className="product-enquiry"
                      href={service.link}
                    >
                      EXPLORE SERVICE →
                    </a>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* CONTACT CTA */}
        <section className="bottom-cta" id="contact">

          <div>
            <p className="eyebrow">
              HAVE AN ENGINEERING REQUIREMENT?
            </p>

            <h2>
              Let's Build a Safer,
              Stronger Future Together.
            </h2>

            <p>
              Connect with Ultraflow Engineering Services
              for your industrial supply requirements.
            </p>
          </div>

          <a href="tel:+917798477102">
            Contact Us <span>→</span>
          </a>

        </section>

      </main>

      <footer>

        <p>
          © {new Date().getFullYear()} ULTRAFLOW ENGINEERING SERVICES
        </p>

        <a href="mailto:ultraflowengineering@gmail.com">
          ultraflowengineering@gmail.com
        </a>

        <a href="tel:+917798477102">
          +91 77984 77102
        </a>

      </footer>

    </div>
  )
}
