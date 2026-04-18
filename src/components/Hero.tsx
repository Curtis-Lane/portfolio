const TECH_TAGS = ['Unity', 'Unreal Engine 5', 'Godot 4', 'C#', 'C++', 'GDScript']

export default function Hero() {
	return (
		<section
			className="grid-bg"
			style={{
				position: 'relative',
				minHeight: '100svh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
			}}
		>
			{/* Radial glow accents */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(168,85,247,0.14) 0%, transparent 70%)',
					pointerEvents: 'none',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					top: '10%',
					left: '-5%',
					width: '400px',
					height: '400px',
					borderRadius: '50%',
					background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
					filter: 'blur(40px)',
					pointerEvents: 'none',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					bottom: '10%',
					right: '-5%',
					width: '500px',
					height: '500px',
					borderRadius: '50%',
					background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
					filter: 'blur(60px)',
					pointerEvents: 'none',
				}}
			/>

			{/* Content */}
			<div
				style={{
					position: 'relative',
					zIndex: 1,
					maxWidth: '52rem',
					margin: '0 auto',
					padding: '8rem 1.5rem 4rem',
					textAlign: 'center',
				}}
			>
				<p className="section-label" style={{ marginBottom: '1.25rem' }}>
					// Graduating 2026 · Open to opportunities
				</p>

				<h1
					style={{
						fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
						fontWeight: 800,
						lineHeight: 1.1,
						marginBottom: '1.25rem',
						letterSpacing: '-0.02em',
					}}
				>
					<span style={{ display: 'block', color: 'var(--text-bright)' }}>
						Hi, I'm
					</span>
					<span className="text-gradient" style={{ display: 'block' }}>
						Curtis Lane
					</span>
				</h1>

				<h2
					style={{
						fontFamily: 'var(--mono)',
						fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
						fontWeight: 400,
						marginBottom: '1.5rem',
						color: 'var(--text)',
					}}
				>
					<span style={{ color: 'var(--purple)' }}>&lt;</span>
					Game Developer
					<span style={{ color: 'var(--purple)' }}> /&gt;</span>
				</h2>

				<p
					style={{
						fontSize: '1.1rem',
						maxWidth: '38rem',
						margin: '0 auto 2.5rem',
						lineHeight: 1.75,
						color: 'var(--text)',
					}}
				>
					I craft immersive game worlds with a passion for emergent gameplay,
					satisfying mechanics, and polished player experiences — from concept
					to shipping.
				</p>

				<div
					style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
				>
					<a href="#projects" className="btn-primary">
						View My Games
					</a>
					<a href="#contact" className="btn-secondary">
						Get In Touch
					</a>
				</div>

				{/* Tech tags */}
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '0.625rem',
						justifyContent: 'center',
						marginTop: '3rem',
					}}
				>
					{TECH_TAGS.map((tag) => (
						<span
							key={tag}
							style={{
								fontFamily: 'var(--mono)',
								fontSize: '0.7rem',
								padding: '0.375rem 0.75rem',
								borderRadius: '3px',
								background: 'rgba(0,212,255,0.05)',
								border: '1px solid rgba(0,212,255,0.18)',
								color: 'var(--text)',
								letterSpacing: '0.05em',
							}}
						>
							{tag}
						</span>
					))}
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				style={{
					position: 'absolute',
					bottom: '2rem',
					left: '50%',
					transform: 'translateX(-50%)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '0.5rem',
				}}
			>
				<span
					style={{
						fontFamily: 'var(--mono)',
						fontSize: '0.65rem',
						letterSpacing: '0.2em',
						textTransform: 'uppercase',
						color: '#334155',
					}}
				>
					Scroll
				</span>
				<div
					style={{
						width: '1px',
						height: '3rem',
						background: 'linear-gradient(to bottom, rgba(0,212,255,0.4), transparent)',
					}}
				/>
			</div>
		</section>
	)
}
