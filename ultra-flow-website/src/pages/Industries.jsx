
const industries = [
  {
    number: '01',
    title: 'Oil & Gas',
    description: 'Engineering and safety solutions for demanding oil and gas operations.'
  },
  {
    number: '02',
    title: 'Manufacturing',
    description: 'Industrial supply and protection solutions for manufacturing facilities.'
  },
  {
    number: '03',
    title: 'Power & Energy',
    description: 'Engineering support for power generation and energy infrastructure.'
  },
  {
    number: '04',
    title: 'Infrastructure',
    description: 'Reliable engineering solutions for infrastructure and commercial projects.'
  }
]

export default function Industries() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="eyebrow">INDUSTRIES WE SERVE</p>
        <h1>Powering <span>Every Industry.</span></h1>
        <p>
          Supporting industrial growth with dependable
          engineering and safety solutions.
        </p>
      </section>

      <section className="page-content">
        {industries.map((industry) => (
          <article className="service-item" key={industry.number}>
            <span>{industry.number}</span>
            <div>
              <h2>{industry.title}</h2>
              <p>{industry.description}</p>
            </div>
            <span>↗</span>
          </article>
        ))}
      </section>
    </main>
  )
}


