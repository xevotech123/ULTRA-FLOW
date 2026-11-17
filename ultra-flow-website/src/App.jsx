
import Navbar from './components/Navbar'
import Home from './pages/Home'
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
<Home />
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
