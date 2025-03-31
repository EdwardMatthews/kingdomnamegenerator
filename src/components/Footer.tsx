export default function Footer() {
  return (
    <footer className="bg-royal-800 text-royal-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Kingdom Name Generator</h3>
            <p className="text-royal-200 mb-4">
              Create majestic and unique names for your fantasy kingdoms with our advanced kingdom name generator.
            </p>
            <p className="text-royal-200">
              Generate 10 random names per click, drawing from a diverse range of real-world cultures and languages.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-white transition-colors">How to Use</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Useful Tools</h3>
            <ul className="space-y-2">
            <li>
                <a 
                  href="https://demonnamegenerator.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center"
                >
                  <span>Demon Name Generator</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://harrypotternamegenerator.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center"
                >
                  <span>Harry Potter Name Generator</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://wutangnamegenerator.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center"
                >
                  <span>Wu Tang Name Generator</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.iframegenerator.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center"
                >
                  <span>Iframe Generator</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ddstopng.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center"
                >
                  <span>DDS to PNG</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://webptopdf.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center"
                >
                  <span>WebP to PDF</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://pdftomarkdown.pro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center"
                >
                  <span>PDF to Markdown</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-royal-700 text-center text-royal-300">
          <p> {new Date().getFullYear()} Kingdom Name Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
