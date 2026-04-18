const CATEGORIES = [
	{
		title: 'Game Engines',
		color: '#00d4ff',
		skills: [
			{ name: 'Unity', level: 95 },
			{ name: 'Unreal Engine 5', level: 75 },
			{ name: 'Godot 4', level: 85 },
		],
	},
	{
		title: 'Languages',
		color: '#a855f7',
		skills: [
			{ name: 'C#', level: 95 },
			{ name: 'C++', level: 85 },
			{ name: 'GDScript', level: 80 },
			{ name: 'HLSL / GLSL', level: 68 },
		],
	},
	{
		title: 'Tools & Software',
		color: '#00ff88',
		skills: [
			{ name: 'Git / GitHub', level: 92 },
			{ name: 'Blender', level: 75 },
			{ name: 'Visual Studio', level: 90 },
			{ name: 'FMOD', level: 50 },
		],
	},
	{
		title: 'Disciplines',
		color: '#f59e0b',
		skills: [
			{ name: 'Gameplay Systems', level: 95 },
			{ name: 'AI / Behavior Trees', level: 80 },
			{ name: 'Level Design', level: 80 },
			{ name: 'VFX & Particles', level: 65 },
		],
	},
]

export default function Skills() {
	return (
		<section
			id="skills"
			className="grid-bg"
			style={{ background: 'var(--dark)', padding: '6rem 1.5rem' }}
		>
			<div style={{ maxWidth: '72rem', margin: '0 auto' }}>
				<div style={{ textAlign: 'center', marginBottom: '4rem' }}>
					<p className="section-label" style={{ marginBottom: '1rem' }}>
						// What I Work With
					</p>
					<h2
						style={{
							fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
							fontWeight: 800,
							color: 'var(--text-bright)',
						}}
					>
						Skills &{' '}
						<span className="text-gradient">Technologies</span>
					</h2>
				</div>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '1.25rem',
					}}
				>
					{CATEGORIES.map((cat) => (
						<div
							key={cat.title}
							className="card-hover"
							style={{
								background: 'var(--surface)',
								border: '1px solid var(--border)',
								borderRadius: '8px',
								padding: '1.75rem',
							}}
						>
							<h3
								style={{
									fontFamily: 'var(--mono)',
									fontSize: '0.85rem',
									fontWeight: 700,
									letterSpacing: '0.1em',
									textTransform: 'uppercase',
									color: cat.color,
									marginBottom: '1.25rem',
								}}
							>
								{cat.title}
							</h3>

							<div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
								{cat.skills.map((skill) => (
									<div key={skill.name}>
										<div
											style={{
												display: 'flex',
												justifyContent: 'space-between',
												marginBottom: '0.3rem',
											}}
										>
											<span
												style={{
													fontFamily: 'var(--mono)',
													fontSize: '0.8rem',
													color: 'var(--text-bright)',
												}}
											>
												{skill.name}
											</span>
											<span
												style={{
													fontFamily: 'var(--mono)',
													fontSize: '0.7rem',
													color: '#475569',
												}}
											>
												{skill.level}%
											</span>
										</div>
										<div
											style={{
												height: '3px',
												borderRadius: '2px',
												background: 'var(--border)',
												overflow: 'hidden',
											}}
										>
											<div
												style={{
													width: `${skill.level}%`,
													height: '100%',
													borderRadius: '2px',
													background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
												}}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
