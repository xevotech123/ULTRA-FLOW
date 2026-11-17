
const services = [
  {
    number: '01',
    title: 'Fire Fighting Equipment',
    description: 'Reliable fire fighting equipment and solutions for industrial and commercial safety.'
  },
  {
    number: '02',
    title: 'Foam & Suppression Systems',
    description: 'Advanced foam and suppression solutions for demanding fire protection requirements.'
  },
  {
    number: '03',
    title: 'Sprinkler Systems',
    description: 'Effective sprinkler systems designed to support fire safety and property protection.'
  },
  {
    number: '04',
    title: 'Pumps & Rescue Equipment',
    description: 'Dependable pumps and rescue equipment for industrial and emergency applications.'
  }
]

export default function Services() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="eyebrow">WHAT WE DO</p>
        <h1>Supply of <span>Services.</span></h1>
        <p>
          Engineering and fire protection solutions
          designed for safer industrial environments.
        </p>
      </section>

      <section className="page-content">
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <span>{service.number}</span>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <span>↗</span>
          </article>
        ))}
      </section>
    </main>
  )
}

