import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-royal-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-royal-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-royal-700 mb-6">Page Not Found</h2>
        <p className="text-royal-600 mb-8">
          The kingdom you seek appears to be lost in the mists of time...
        </p>
        <Link 
          href="/" 
          className="btn-royal inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
