import { generateMultipleNames } from '@/lib/nameGenerator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Features from '@/components/Features'
import HowToUse from '@/components/HowToUse'
import FAQ from '@/components/FAQ'
import NameList from '@/components/NameList'

export default function Home() {
  const initialNames = generateMultipleNames(10);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-royal-100 to-royal-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-royal-800 mb-6 animate-fade-in">
              Kingdom Name Generator
            </h1>
            <p className="text-xl text-royal-600 mb-12 max-w-2xl mx-auto animate-fade-in">
              Create majestic and unique names for your fantasy kingdoms with our advanced kingdom name generator.
            </p>
            
            {/* Generator Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <NameList names={initialNames} />
            </div>
          </div>
        </section>

        <Features />
        <HowToUse />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
