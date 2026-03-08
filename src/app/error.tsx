'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-xl font-semibold text-[#333333]">Something went wrong</h1>
      <p className="mb-6 text-[#555555]">{error.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-[#4caf50] px-6 py-3 font-medium text-white hover:bg-[#43a047]"
      >
        Try again
      </button>
    </div>
  )
}
