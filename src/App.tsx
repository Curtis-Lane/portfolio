import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumePage from './pages/ResumePage'

function HomePage() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default function App() {
	return (
		<BrowserRouter basename="/portfolio">
			<div style={{ minHeight: '100svh', background: 'var(--dark)' }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/resume" element={<ResumePage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
