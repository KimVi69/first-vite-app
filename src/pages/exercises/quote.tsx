import { useEffect, useState } from 'react'

interface IQuote {
  text: string
  author: string
}

const Quote = () => {
  const [quotes, setquotes] = useState<IQuote[]>([])
  const [quote, setQuote] = useState<IQuote>({
    text: 'Hasagi',
    author: 'Yasuo'
  })

  useEffect(() => {
    loadQuotes()
  }, [])

  async function loadQuotes() {
    const response = await fetch('https://type.fit/api/quotes')
    response.json().then((data) => setquotes(data))
  }

  const random = () => {
    const randomQ = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQ)
  }

  const share = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} by ${quote.author}`)
  }

  return (
    <main className='flex flex-col justify-center items-center'>
      <section className='flex flex-col gap-4'>
        <div className='flex flex-col justify-center text-center gap-4'>
          <h1 className='text-3xl font-bold'>QUOTE GENERATOR:</h1>
          <p className='text-lg'>{quote?.text}</p>
          <p className='text-start text-lg'>- {quote?.author.split(',')[0]}</p>
        </div>
        <div className='flex gap-5 justify-center'>
          <button className='bg-black text-white rounded-lg px-[16px] py-[12px]' onClick={random}>
            Generate
          </button>
          <button className='bg-black text-white rounded-lg px-[16px] py-[12px]' onClick={share}>
            Share
          </button>
        </div>
      </section>
    </main>
  )
}

export default Quote
