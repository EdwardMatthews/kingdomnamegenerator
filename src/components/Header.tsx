import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-royal-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <Image
            src="/logo.svg"
            alt="Kingdom Name Generator"
            width={32}
            height={32}
            className="w-8 h-8 text-royal-600"
            priority
          />
          <span className="text-2xl font-bold text-royal-800">
            Kingdom Name Generator
          </span>
        </Link>
        <nav className="space-x-6">
          <Link href="#features" className="text-royal-700 hover:text-royal-900 transition-colors">
            Features
          </Link>
          <Link href="#how-to-use" className="text-royal-700 hover:text-royal-900 transition-colors">
            How to Use
          </Link>
          <Link href="#faq" className="text-royal-700 hover:text-royal-900 transition-colors">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  )
}
