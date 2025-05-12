import './Footer.css'

export default function Footer() {
  return (
    <div className='size-full text-center dark:text-white'>
      <h1 className='mt-10 text-[5vh]'>Contact</h1>
      <p className='mt-3'>Contact me: <a href="/contact">here</a>.</p>
      <p className='mt-[30vh]'>&#169; {new Date().getFullYear()} hafnerp.dev - all rights reserved</p>
    </div>
  )
}
