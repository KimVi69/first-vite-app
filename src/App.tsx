import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import LandingPage from './pages/landing page/landing page'
import About from './pages/about/about'
import Article from './pages/article/article'
import Contact from './pages/contact/contact'
import Timer from './pages/exercises/timer'
import Filter from './pages/exercises/filter'
import UseRef from './pages/exercises/useRef'
import Quote from './pages/exercises/quote'
import Todo from './pages/exercises/todo'
import Quiz from './pages/exercises/quiz'
import Register from './pages/authentication/register'
import Login from './pages/authentication/login'
import { AuthProvider } from './pages/authentication/AuthContext'

const MainContent: React.FC = () => {
  const location = useLocation()
  const noHeaderPaths = ['/register', '/login', '/quiz']

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/article' element={<Article />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/useRef' element={<UseRef />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
