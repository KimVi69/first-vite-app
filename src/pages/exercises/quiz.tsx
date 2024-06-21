import { useEffect, useState } from 'react'
import { data } from './question'

const Quiz = () => {
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(0deg, rgba(88,53,172,1) 0%, rgba(211,189,251,1) 100%, rgba(211,189,251,1) 100%)'

    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(data[index])

  useEffect(() => {
    setQuestion(data[index])
  }, [index])

  return (
    <main className='flex justify-center items-center p-20 h-full'>
      <section className='bg-white flex rounded-lg max-w-[600px] flex-1 justify-center'>
        <div className='flex flex-col p-10 items-center text-start gap-6 w-full'>
          <h1 className='text-start w-full text-3xl font-semibold flex-1'>Quiz App</h1>
          <hr className='h-[2px] bg-black border-0 w-full' />
          <p className='text-xl font-normal w-full flex-1'>{`${index + 1}. ${question.question}`}</p>
          <button className='text-start w-full border-2 rounded-lg border-gray-400 px-3 py-3 text-lg font-normal flex-1'>
            {question.answer1}
          </button>
          <button className='text-start w-full border-2 rounded-lg border-gray-400 px-3 py-3 text-lg font-normal flex-1'>
            {question.answer2}
          </button>
          <button className='text-start w-full border-2 rounded-lg border-gray-400 px-3 py-3 text-lg font-normal flex-1'>
            {question.answer3}
          </button>
          <button className='text-start w-full border-2 rounded-lg border-gray-400 px-3 py-3 text-lg font-normal flex-1'>
            {question.answer4}
          </button>
          <button
            className='bg-[#523897] rounded-lg text-white px-20 py-4 text-xl flex-1'
            onClick={() => {
              if (index < data.length - 1) setIndex(index + 1)
            }}
          >
            Next
          </button>
          <span className='flex-1 w-full text-center'>{`${index + 1} of ${data.length} questions`}</span>
        </div>
      </section>
    </main>
  )
}

export default Quiz
