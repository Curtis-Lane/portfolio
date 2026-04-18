import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
	return (
		<div style={{ minHeight: '100svh', background: 'var(--dark)' }}>
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}
