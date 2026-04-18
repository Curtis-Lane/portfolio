const CONTACT_ITEMS = [
	{ label: 'Email', value: 'culane@student.neumont.edu' },
	{ label: 'Location', value: 'Remote / Salt Lake City' },
]

const SOCIAL_LINKS = [
	{ label: 'GitHub', href: 'https://github.com/Curtis-Lane' },
	{ label: 'Itch.io', href: 'https://curtis-lane.itch.io/' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/curtis-m-lane/' },
]

export default function Contact() {
	return (
		<section
			id="contact"
			className="grid-bg"
			style={{ background: 'var(--dark)', padding: '6rem 1.5rem' }}
		>
			<div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
				<p className="section-label" style={{ marginBottom: '1rem' }}>
					// Let's Work Together
				</p>
				<h2
					style={{
						fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
						fontWeight: 800,
						color: 'var(--text-bright)',
						marginBottom: '1.25rem',
					}}
				>
					Got a{' '}
					<span className="text-gradient">Project in Mind?</span>
				</h2>
				<p
					style={{
						fontSize: '1.05rem',
						lineHeight: 1.75,
						color: 'var(--text)',
						marginBottom: '3rem',
					}}
				>
					Whether you're building the next indie hit, need a gameplay
					programmer for your studio, or want to collaborate on a game jam —
					I'd love to hear from you.
				</p>

				{/* Contact cards */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
						gap: '1rem',
						marginBottom: '2.5rem',
					}}
				>
					{CONTACT_ITEMS.map((item) => (
						<div
							key={item.label}
							style={{
								background: 'var(--surface)',
								border: '1px solid var(--border)',
								borderRadius: '8px',
								padding: '1.25rem 1rem',
							}}
						>
							<div
								style={{
									fontFamily: 'var(--mono)',
									fontSize: '0.65rem',
									letterSpacing: '0.15em',
									textTransform: 'uppercase',
									color: '#475569',
									marginBottom: '0.4rem',
								}}
							>
								{item.label}
							</div>
							<div
								style={{
									fontFamily: 'var(--mono)',
									fontSize: '0.8rem',
									color: 'var(--text-bright)',
								}}
							>
								{item.value}
							</div>
						</div>
					))}
				</div>

				<a
					href="mailto:culane@student.neumont.edu"
					className="btn-primary"
					style={{ fontSize: '0.875rem', padding: '0.875rem 2.25rem' }}
				>
					Send Me a Message
				</a>

				{/* Social links */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexWrap: 'wrap',
						gap: '1.75rem',
						marginTop: '2.5rem',
					}}
				>
					{SOCIAL_LINKS.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="muted-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
