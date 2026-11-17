
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'

const products = [
  {
    number: '01',
    title: 'Industrial Piping Systems',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=900&q=85',
    description: 'Industrial piping solutions designed for reliable flow, performance and demanding engineering environments.'
  },
  {
    number: '02',
    title: 'Valves & Fittings',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85',
    description: 'Quality valves and fittings for efficient flow control and dependable industrial operations.'
  },
  {
    number: '03',
    title: 'Fire Protection Equipment',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&q=85',
    description: 'Fire protection equipment and solutions supporting industrial safety requirements.'
  },
  {
    number: '04',
    title: 'Process Equipment',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900&q=85',
    description: 'Industrial process equipment and engineering supplies for operational requirements.'
  }
]

export default function App() {
  return (
    <div className="website">

      <Navbar />

      <main>
        <Hero />

        <TrustStrip />

        {/* PRODUCTS SECTION */}
        <section className="products-section" id="products">

          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR PRODUCTS</p>
              <h2>
                Comprehensive
                <br />
                <span>Engineering Solutions</span>
              </h2>
            </div>

            <p>
              A wide range of high-quality industrial products
              and engineering supplies to meet your requirements.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.number}>

                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <span className="product-index">
                    {product.number}
                  </span>
                </div>

                <div className="product-content">

                  <div className="product-title-row">
                    <h3>{product.title}</h3>
                    <span className="product-arrow">↗</span>
                  </div>

                  <div className="product-preview">
                    <p>{product.description}</p>
                    <a
                      className="product-enquiry"
                      href="mailto:ultraflowengineering@gmail.com"
                    >
                      ENQUIRE NOW <span>→</span>
                    </a>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="industries" id="industries">
          <p className="eyebrow">INDUSTRIES WE SERVE</p>
          <h2>
            Engineering Solutions
            <br />
            For Industrial Excellence.
          </h2>
        </section>

        {/* CONTACT BANNER */}
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

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} ULTRAFLOW ENGINEERING SERVICES</p>

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
