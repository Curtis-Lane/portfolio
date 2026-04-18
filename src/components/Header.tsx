import { useState, useEffect } from 'react'

const NAV_LINKS = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 50,
				transition: 'background 0.3s ease, border-color 0.3s ease',
				background: scrolled ? 'rgba(6,6,8,0.92)' : 'transparent',
				backdropFilter: scrolled ? 'blur(12px)' : 'none',
				borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
			}}
		>
			<nav
				style={{
					maxWidth: '72rem',
					margin: '0 auto',
					padding: '1rem 1.5rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<a
					href="#"
					style={{
						fontFamily: 'var(--mono)',
						fontSize: '1.1rem',
						fontWeight: 700,
						color: 'var(--accent)',
						textDecoration: 'none',
					}}
				>
					&lt;GameDev /&gt;
				</a>

				{/* Desktop nav */}
				<ul
					className="hidden md:flex"
					style={{ listStyle: 'none', alignItems: 'center', gap: '2rem' }}
				>
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<a href={link.href} className="nav-link">
								{link.label}
							</a>
						</li>
					))}
				</ul>

				{/* Hamburger */}
				<button
					className="md:hidden"
					onClick={() => setMenuOpen((o) => !o)}
					aria-label="Toggle menu"
					style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
				>
					{[0, 1, 2].map((i) => (
						<span
							key={i}
							style={{
								display: 'block',
								width: '22px',
								height: '2px',
								background: 'var(--accent)',
								marginBottom: i < 2 ? '5px' : '0',
								transition: 'transform 0.3s ease, opacity 0.3s ease',
								transform:
									menuOpen
										? i === 0
											? 'rotate(45deg) translateY(7px)'
											: i === 2
											? 'rotate(-45deg) translateY(-7px)'
											: 'scaleX(0)'
										: 'none',
								opacity: menuOpen && i === 1 ? 0 : 1,
							}}
						/>
					))}
				</button>
			</nav>

			{/* Mobile drawer */}
			{menuOpen && (
				<div
					style={{
						background: 'var(--surface)',
						borderTop: '1px solid var(--border)',
						padding: '1rem 1.5rem 1.5rem',
					}}
				>
					<ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="nav-link"
									onClick={() => setMenuOpen(false)}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	)
}
