import { useEffect, useState } from 'react'
import { data } from './question'

const Quiz = () => {
  useEffect(() => {
    document.body.style.background = 'linear-gradient(#d3bdfb, #5835ac 100%)'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(data[index])
  const [selection, setSelection] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [isEnded, setIsEnded] = useState(false)

  useEffect(() => {
    setQuestion(data[index])
  }, [index])

  const checkAns = (selectedAns: number) => {
    setSelection(selectedAns)
    if (selectedAns == question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1)
      setSelection(null)
    } else setIsEnded(true)
  }

  return (
    <main className='flex justify-center items-center py-24 px-20 max-sm:py-0 max-sm:px-0 max-sm:h-full max-sm:bg-white'>
      <section className='bg-white flex rounded-lg justify-center items-center flex-1 max-w-[700px] max-sm:rounded-none'>
        <div className='flex flex-col p-12 gap-6 flex-1'>
          <h1 className='text-start w-full text-3xl font-semibold'>Quiz App</h1>
          <hr className='h-[2px] bg-black border-0 w-full' />
          {!isEnded ? (
            <div className='flex flex-col gap-6 w-full flex-1'>
              <p className='flex text-xl font-normal w-full flex-1 items-center max-sm:text-base'>{`${index + 1}. ${
                question.question
              }`}</p>
              {question.answers.map((answer, index) => (
                <button
                  className={`text-start w-full border-2 rounded-lg px-3 py-4 text-lg font-normal flex-1 
                  ${
                    selection &&
                    (question.correctAnswer == index + 1
                      ? 'bg-[#dffff2] !border-[#00d397]'
                      : selection == index + 1
                      ? 'bg-[#FFEBEB] !border-[#FF4A4A]'
                      : '')
                  } border-[#5c6066]`}
                  key={index + 1}
                  onClick={() => checkAns(index + 1)}
                  disabled={selection != null}
                >
                  {answer}
                </button>
              ))}
              <button
                className='bg-[#523897] rounded-lg text-white px-20 py-4 text-xl flex-1'
                onClick={handleNext}
                disabled={selection == null}
              >
                Next
              </button>
              <span className='flex w-full items-center justify-center text-lg'>{`${index + 1} of ${
                data.length
              } questions`}</span>
            </div>
          ) : (
            <div className='flex flex-col gap-6 w-full flex-1'>
              <h1 className='text-2xl font-medium w-full'>Result:</h1>
              <span className='text-xl font-normal'>
                You Scored {score} out of {data.length}!
              </span>
              <button
                className='bg-[#523897] rounded-lg text-white px-20 py-4 text-xl'
                onClick={() => {
                  setIsEnded(false)
                  setIndex(0)
                  setSelection(null)
                  setScore(0)
                }}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Quiz
