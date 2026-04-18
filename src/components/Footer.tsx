export default function Footer() {
	return (
		<footer
			style={{
				background: 'var(--surface)',
				borderTop: '1px solid var(--border)',
				padding: '2rem 1.5rem',
			}}
		>
			<div
				style={{
					maxWidth: '72rem',
					margin: '0 auto',
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '1rem',
				}}
			>
				<span
					style={{
						fontFamily: 'var(--mono)',
						fontSize: '1rem',
						fontWeight: 700,
						color: 'var(--accent)',
					}}
				>
					&lt;GameDev /&gt;
				</span>

				<p
					style={{
						fontFamily: 'var(--mono)',
						fontSize: '0.7rem',
						color: '#334155',
					}}
				>
					&copy; {new Date().getFullYear()} Curtis Lane &middot; Built with React +
					TypeScript
				</p>

				<a href="#" className="muted-link">
					Back to top &uarr;
				</a>
			</div>
		</footer>
	)
}
