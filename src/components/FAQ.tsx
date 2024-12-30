export default function FAQ() {
  const faqs = [
    {
      question: "What kind of names does the kingdom name generator produce?",
      answer: "The kingdom name generator produces 10 random names for kingdoms, empires, and dynasties, drawing from real-world cultures and languages."
    },
    {
      question: "How do I use the kingdom name generator?",
      answer: "Simply click on the button to generate 10 random names, and if you don't like them, click again to get new names."
    },
    {
      question: "Will all the generated names be suitable for my story/game/world?",
      answer: "While our kingdom name generator strive to provide a diverse range of names, some may not work well depending on your specific cultural or thematic background."
    },
    {
      question: "Can I get a refund or cancel my subscription?",
      answer: "No, the kingdom name generator is a one-time tool - simply click on the button to generate names, and you won't be charged any fees."
    },
    {
      question: "How do I choose a good name for my kingdom?",
      answer: "We recommend choosing a name that resonates with your story's cultural or thematic background, is memorable and easy to pronounce, and evokes emotions in your audience."
    },
    {
      question: "Are the generated names unique?",
      answer: "Yes, our kingdom name generator produces unique names each time you click on it, so you can be sure to get a fresh set of suggestions every time."
    },
    {
      question: "Can I use the kingdom name generator for commercial purposes?",
      answer: "While we encourage personal use, please note that our terms and conditions prohibit using our tool for commercial purposes without explicit permission from us."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-royal-700 mb-2">{faq.question}</h3>
              <p className="text-royal-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
