const STATS = [
	{ value: 'B.S.', label: 'Game Development' },
	{ value: '10+', label: 'Projects Built' },
	{ value: '3', label: 'Game Jams Entered' },
	{ value: '2026', label: 'Graduating' },
]

export default function About() {
	return (
		<section
			id="about"
			style={{ background: 'var(--surface)', padding: '6rem 1.5rem' }}
		>
			<div style={{ maxWidth: '72rem', margin: '0 auto' }}>
				<div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
					{/* Text */}
					<div style={{ marginBottom: '3rem' }} className="md:mb-0">
						<p className="section-label" style={{ marginBottom: '1rem' }}>
							// About Me
						</p>
						<h2
							style={{
								fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
								fontWeight: 800,
								color: 'var(--text-bright)',
								lineHeight: 1.2,
								marginBottom: '1.5rem',
							}}
						>
							Turning Ideas Into{' '}
							<span className="text-gradient">Playable Realities</span>
						</h2>
						<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text)' }}>
							<p>
								I'm a soon-to-be game development graduate with a passion for
								building experiences that are fun to play and interesting to
								dissect. Throughout my degree I've built projects spanning
								gameplay systems, AI behaviors, procedural generation, and the
								kind of game feel that makes every interaction satisfying.
							</p>
							<p>
								My coursework and personal projects have given me hands-on
								experience across the full development cycle — from rapid
								prototyping and design documentation through to playtesting and
								polish. I thrive in collaborative environments and love the
								problem-solving that sits at the intersection of code and
								creativity.
							</p>
							<p>
								When I'm not studying or building something new, I'm prototyping
								mechanics, participating in game jams, or writing shaders that
								make worlds feel alive.
							</p>
						</div>
						<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
							<a href="#projects" className="btn-primary">
								My Projects
							</a>
						</div>
					</div>

					{/* Stats grid */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: '1rem',
						}}
					>
						{STATS.map((stat) => (
							<div
								key={stat.label}
								className="card-hover"
								style={{
									background: 'var(--dark)',
									border: '1px solid var(--border)',
									borderRadius: '8px',
									padding: '1.75rem 1.25rem',
									textAlign: 'center',
								}}
							>
								<div
									className="text-gradient"
									style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.4rem' }}
								>
									{stat.value}
								</div>
								<div
									style={{
										fontFamily: 'var(--mono)',
										fontSize: '0.7rem',
										letterSpacing: '0.12em',
										textTransform: 'uppercase',
										color: '#475569',
									}}
								>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
