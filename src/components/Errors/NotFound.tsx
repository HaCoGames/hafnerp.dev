import './NotFound.css'

export default function NotFound() {
  return (
    <div className='container-error'>
        <div className='container-content-error dark:text-white'>
            <h1>Error 404</h1>
            <div className='line-404'></div>
            <div>
                <p>Whoops, the page does not seem to exist!</p>
                <p>&gt; <a href='/'>Main page</a> </p>
            </div>
        </div>
    </div>
  )
}
