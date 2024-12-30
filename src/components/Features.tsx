export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-royal-700 mb-4">Randomized Names</h3>
            <p className="text-royal-600">
              Our kingdom name generator produces 10 unique names per click, drawing from a diverse range of real-world cultures and languages.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-royal-700 mb-4">Instant Results</h3>
            <p className="text-royal-600">
              Get instant access to fitting and resonant names in seconds, eliminating the need for tedious brainstorming and testing.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-royal-700 mb-4">Unique Name Generation</h3>
            <p className="text-royal-600">
              Every time you click on our kingdom name generator, you'll get a fresh set of 10 unique names that ensure your kingdom stands out from the rest.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-royal-700 mb-4">Cultural Significance</h3>
            <p className="text-royal-600">
              Our kingdom name generator is based on actual kingdoms, empires, and dynasties that have existed or still exist today, as well as fictional versions, to provide authenticity and depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
