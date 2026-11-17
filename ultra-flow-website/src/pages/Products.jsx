
const products = [
  {
    number: '01',
    title: 'Industrial Piping Systems',
    description: 'Industrial piping solutions for reliable flow and performance.'
  },
  {
    number: '02',
    title: 'Valves & Fittings',
    description: 'Quality flow control products for industrial applications.'
  },
  {
    number: '03',
    title: 'Fire Protection Equipment',
    description: 'Equipment supporting fire safety and protection systems.'
  },
  {
    number: '04',
    title: 'Process Equipment',
    description: 'Engineering equipment for industrial process requirements.'
  }
]

export default function Products() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="eyebrow">OUR PRODUCTS</p>
        <h1>Engineered for <span>Performance.</span></h1>
        <p>
          Industrial products and engineering supplies
          for demanding operational environments.
        </p>
      </section>

      <section className="page-content product-list">
        {products.map((product) => (
          <article className="service-item" key={product.number}>
            <span>{product.number}</span>
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <span>↗</span>
          </article>
        ))}
      </section>
    </main>
  )
}

