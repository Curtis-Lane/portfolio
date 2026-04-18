const PROJECTS = [
	{
		title: 'Five Minutes Until Escape',
		genre: 'First-Person Survival Shooter',
		platform: 'PC',
		description:
			'A thrilling survival shooter where you must defend yourself against an onslaught of hostile aliens after crash landing on their planet. Do you have what it takes to survive?',
		tech: ['Unity', 'C#', 'AI State Machines'],
		accent: '#00d4ff',
		bg: '#002233',
		status: 'Released',
		// githubUrl: '#',
		playUrl: 'https://curtis-lane.itch.io/five-minutes-until-escape',
	},
	{
		title: 'Breakaway Platforms',
		genre: '3D Platformer',
		platform: 'PC / Web',
		description:
			'A simple platformer where you jump from platform to platform, trying not to fall. Be careful, however, as the platforms you\'re standing on fall a few seconds after you touch them. Can you beat all seven levels?',
		tech: ['Unity', 'C#', 'Input System Package'],
		accent: '#a855f7',
		bg: '#1a0033',
		status: 'Released',
		// githubUrl: '#',
		playUrl: 'https://curtis-lane.itch.io/breakaway-platforms',
	},
	{
		title: 'The Virtual Library',
		genre: 'VR Cozy Application',
		platform: 'PC',
		description:
			'A relaxing virtual-reality experience that simulates a library environment. Peruse your catalogue of books, choose one to read, and relax with a calm, welcoming environment.',
		tech: ['Godot 4', 'GDScript', 'C#'],
		accent: '#00ff88',
		bg: '#001a0f',
		status: 'In Development',
		// githubUrl: '#',
		playUrl: null,
	},
	{
		title: 'RayEngine',
		genre: 'Game Engine',
		platform: 'PC',
		description:
			'A custom game engine built on top of a handful of battle-tested, poplar libraries. Designed to be simple, fast, and to stay out of the user\'s way.',
		tech: ['C++', 'SDL3', 'Jolt', 'Filament'],
		accent: '#f59e0b',
		bg: '#1a0e00',
		status: 'In Development',
		// githubUrl: '#',
		playUrl: null,
	},
]

function StatusBadge({ status, accent }: { status: string; accent: string }) {
	const released = status === 'Released'
	const color = released ? '#00ff88' : '#f59e0b'
	return (
		<span
			style={{
				fontFamily: 'var(--mono)',
				fontSize: '0.65rem',
				letterSpacing: '0.1em',
				textTransform: 'uppercase',
				padding: '0.3rem 0.7rem',
				borderRadius: '999px',
				background: released ? 'rgba(0,255,136,0.1)' : 'rgba(245,158,11,0.1)',
				border: `1px solid ${released ? 'rgba(0,255,136,0.3)' : 'rgba(245,158,11,0.3)'}`,
				color,
			}}
		>
			{status}
		</span>
	)
}

export default function Projects() {
	return (
		<section
			id="projects"
			style={{ background: 'var(--surface)', padding: '6rem 1.5rem' }}
		>
			<div style={{ maxWidth: '72rem', margin: '0 auto' }}>
				<div style={{ textAlign: 'center', marginBottom: '4rem' }}>
					<p className="section-label" style={{ marginBottom: '1rem' }}>
						// What I've Built
					</p>
					<h2
						style={{
							fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
							fontWeight: 800,
							color: 'var(--text-bright)',
						}}
					>
						Featured{' '}
						<span className="text-gradient">Projects</span>
					</h2>
				</div>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '1.25rem',
					}}
				>
					{PROJECTS.map((project) => (
						<div
							key={project.title}
							className="card-hover"
							style={{
								background: 'var(--dark)',
								border: '1px solid var(--border)',
								borderRadius: '8px',
								overflow: 'hidden',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							{/* Banner */}
							<div
								className="scanlines"
								style={{
									position: 'relative',
									height: '9rem',
									background: `linear-gradient(135deg, ${project.bg}, ${project.accent}18)`,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<span
									style={{
										fontFamily: 'var(--mono)',
										fontSize: '3.5rem',
										fontWeight: 900,
										color: project.accent,
										opacity: 0.18,
										letterSpacing: '-0.04em',
										userSelect: 'none',
									}}
								>
									{project.title
										.split(' ')
										.map((w) => w[0])
										.join('')}
								</span>
								<div
									style={{
										position: 'absolute',
										top: '0.75rem',
										right: '0.75rem',
									}}
								>
									<StatusBadge status={project.status} accent={project.accent} />
								</div>
								<div
									style={{
										position: 'absolute',
										bottom: '0.625rem',
										left: '1rem',
										fontFamily: 'var(--mono)',
										fontSize: '0.65rem',
										color: project.accent,
										opacity: 0.7,
									}}
								>
									{project.genre} · {project.platform}
								</div>
							</div>

							{/* Body */}
							<div
								style={{
									padding: '1.25rem',
									display: 'flex',
									flexDirection: 'column',
									flex: 1,
								}}
							>
								<h3
									style={{
										fontSize: '1.15rem',
										fontWeight: 700,
										color: 'var(--text-bright)',
										marginBottom: '0.625rem',
									}}
								>
									{project.title}
								</h3>
								<p
									style={{
										fontSize: '0.875rem',
										lineHeight: 1.65,
										color: 'var(--text)',
										marginBottom: '1rem',
										flex: 1,
									}}
								>
									{project.description}
								</p>

								{/* Tech tags */}
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										gap: '0.4rem',
										marginBottom: '1rem',
									}}
								>
									{project.tech.map((t) => (
										<span
											key={t}
											style={{
												fontFamily: 'var(--mono)',
												fontSize: '0.65rem',
												padding: '0.25rem 0.55rem',
												borderRadius: '3px',
												background: `${project.accent}12`,
												border: `1px solid ${project.accent}30`,
												color: project.accent,
											}}
										>
											{t}
										</span>
									))}
								</div>

								{/* Actions */}
								<div style={{ display: 'flex', gap: '0.625rem' }}>
									{/* <a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											fontFamily: 'var(--mono)',
											fontSize: '0.7rem',
											letterSpacing: '0.08em',
											textTransform: 'uppercase',
											padding: '0.5rem 0.875rem',
											borderRadius: '4px',
											background: 'transparent',
											border: '1px solid var(--border)',
											color: '#64748b',
											textDecoration: 'none',
											transition: 'border-color 0.2s, color 0.2s',
										}}
									>
										GitHub
									</a> */}
									{project.playUrl && (
										<a
											href={project.playUrl}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												fontFamily: 'var(--mono)',
												fontSize: '0.7rem',
												letterSpacing: '0.08em',
												textTransform: 'uppercase',
												padding: '0.5rem 0.875rem',
												borderRadius: '4px',
												flex: 1,
												textAlign: 'center',
												background: `${project.accent}14`,
												border: `1px solid ${project.accent}38`,
												color: project.accent,
												textDecoration: 'none',
											}}
										>
											Play Now →
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
