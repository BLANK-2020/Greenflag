'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 24,
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
        }}>
          <h1 style={{ marginBottom: 16, color: '#333' }}>Something went wrong</h1>
          <p style={{ marginBottom: 24, color: '#555' }}>{error.message || 'An unexpected error occurred.'}</p>
          <button
            onClick={reset}
            style={{
              padding: '12px 24px',
              background: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
