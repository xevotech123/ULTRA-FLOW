import './Hero.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background photo: put your refinery image at public/hero.jpg */}
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__copy">
          <span className="hero__bracket hero__bracket--tl" aria-hidden="true" />
          <span className="hero__bracket hero__bracket--br" aria-hidden="true" />

          <p className="eyebrow hero__rise" style={{ '--d': '0.05s' }}>
            Engineering Excellence
          </p>

          <h1 className="hero__title">
            <span className="hero__rise" style={{ '--d': '0.15s' }}>
              Engineering Flow<i>.</i>
            </span>
            <span className="hero__accent hero__rise" style={{ '--d': '0.3s' }}>
              Delivering Excellence.
            </span>
          </h1>

          <p className="hero__sub hero__rise" style={{ '--d': '0.45s' }}>
            Innovative engineering solutions for a safer, stronger and more
            sustainable tomorrow.
          </p>

          <a href="#products" className="btn hero__btn hero__rise" style={{ '--d': '0.6s' }}>
            Explore Our Solutions <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}