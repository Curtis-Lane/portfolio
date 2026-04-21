export default function ResumePage() {
	const pdfUrl = import.meta.env.BASE_URL + '/resume.pdf'

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100svh',
				background: 'var(--dark)',
			}}
		>
			{/* Minimal header */}
			<header
				style={{
					background: 'rgba(6,6,8,0.95)',
					borderBottom: '1px solid var(--border)',
					padding: '0.875rem 1.5rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexShrink: 0,
				}}
			>
				<a
					href="./"
					style={{
						fontFamily: 'var(--mono)',
						fontSize: '1rem',
						fontWeight: 700,
						color: 'var(--accent)',
						textDecoration: 'none',
					}}
				>
					&lt;GameDev /&gt;
				</a>

				<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
					<a
						href={pdfUrl}
						download
						className="btn-secondary"
						style={{ padding: '0.45rem 1.1rem' }}
					>
						Download
					</a>
					<a
						href="./"
						className="nav-link"
					>
						← Back to Portfolio
					</a>
				</div>
			</header>

			{/* PDF viewer */}
			<embed
				src={pdfUrl}
				type="application/pdf"
				style={{ flex: 1, width: '100%', minHeight: 0, height: '100%' }}
			/>

			{/* Fallback for browsers that don't support embedded PDFs */}
			<noscript>
				<div
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '1rem',
						color: 'var(--text)',
					}}
				>
					<p>Your browser can't display the PDF inline.</p>
					<a href={pdfUrl} download className="btn-primary">
						Download Resume
					</a>
				</div>
			</noscript>
		</div>
	)
}
