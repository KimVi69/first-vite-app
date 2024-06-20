import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from '../../assets/images/login-image.jpg'

const schema = yup.object({
  name: yup.string().required('* Name is required'),
  password: yup.string().required('* Password is required')
})

interface ILoginInputs {
  name: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginInputs>({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    document.body.style.backgroundColor = '#98A675'

    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  const { registerData } = useAuth()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = (data: ILoginInputs) => {
    if (registerData) {
      if (registerData.name == data.name && registerData.password == data.password) {
        navigate('/')
        login()
      } else {
        console.log(data)
        console.log(registerData)
        setErrorMessage('* Incorrect username or password')
      }
    } else {
      console.log(data)
      console.log(registerData)
      setErrorMessage('* Incorrect username or password')
    }
  }

  return (
    <main className='flex justify-center items-center w-full h-full px-80 py-40'>
      <section className='flex rounded-2xl overflow-hidden shadow-lg w-full h-full'>
        <div className='h-full max-w-[45%]'>
          <img className='w-full h-full object-cover' src={Image}></img>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white flex-1 flex flex-col gap-6 p-20 items-center justify-center'
        >
          <h1 className='text-start text-3xl font-bold w-full'>Login</h1>
          <div className='flex flex-col w-full gap-2 '>
            <input
              className='shadow-custom rounded-lg px-[16px] py-[10px] w-full'
              placeholder='Name'
              {...register('name')}
            />
            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
          </div>
          <div className='flex flex-col w-full gap-2'>
            <input
              className='shadow-custom rounded-lg px-[16px] py-[10px] w-full'
              placeholder='Password'
              type='password'
              {...register('password')}
            />
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>
          {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
          <div className='flex justify-between w-full text-sm'>
            <p>
              Don't have an account? <Link to='/register'>Sign in</Link>
            </p>
            <p>Forgot Password?</p>
          </div>
          <button className='bg-[#2F3B32] rounded-3xl text-white px-[30px] py-[12px] shadow-lg text-sm font-medium'>
            LOGIN
          </button>
          <div className='flex flex-col items-center text-sm'>
            <p>if you are having trouble please contact</p>
            <p>support@viteproject.com</p>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Login
