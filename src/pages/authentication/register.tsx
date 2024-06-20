import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from './AuthContext'
import Image from '../../assets/images/login-image.jpg'

const schema = yup.object({
  name: yup.string().required('* Name is required'),
  password: yup
    .string()
    .required('* Password is required')
    .min(8, '* Password must be at least 8 characters')
    .matches(/[a-z]/, '* Password must contain at least one lowercase letter'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password') as yup.Reference, ''], '* Passwords must match')
    .required('* Confirm Password is required')
})

interface IFormInputs {
  name: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    document.body.style.backgroundColor = '#98A675'

    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  const { saveRegisterData } = useAuth()
  const navigate = useNavigate()

  const onSubmit = (data: IFormInputs) => {
    saveRegisterData(data)
    navigate('/login')
  }

  return (
    <main className='flex justify-center items-center w-full h-full px-80 py-40'>
      <section className='flex rounded-2xl overflow-hidden shadow-lg w-full h-full'>
        <div className='h-full max-w-[45%]'>
          <img className='w-full h-full object-cover' src={Image}></img>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white flex-1 flex flex-col gap-4 p-20 items-center justify-center'
        >
          <h1 className='text-start text-3xl font-bold w-full'>Register</h1>
          <div className='flex flex-col w-full gap-2'>
            <input
              className='shadow-custom rounded-lg px-[16px] py-[10px] w-full'
              placeholder='Name'
              type='text'
              id='name'
              {...register('name')}
            />
            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
          </div>
          <div className='flex flex-col w-full gap-2'>
            <input
              className='shadow-custom rounded-lg px-[16px] py-[10px] w-full'
              placeholder='Password'
              type='password'
              id='password'
              {...register('password')}
            />
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>
          <div className='flex flex-col w-full gap-2'>
            <input
              className='shadow-custom rounded-lg px-[16px] py-[10px] w-full'
              placeholder='Confirm Password'
              type='password'
              id='confirmPassword'
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}
          </div>
          <div className='flex justify-between w-full text-sm'>
            <p>
              Have an account? <Link to='/login'>Log in</Link>
            </p>
          </div>
          <button
            type='submit'
            className='bg-[#2F3B32] rounded-3xl text-white px-[30px] py-[12px] shadow-lg text-sm font-medium'
          >
            REGISTER
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

export default Register
