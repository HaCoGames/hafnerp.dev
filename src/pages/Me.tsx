import './Me.css'

export default function Me() {
  return (
    <div className='me-container dark:text-white'>
      <div className='me-inner-container'>
        <h1 className='mb-3 w-full border-b dark:text-white'>Peter Hafner</h1>

        <div className='me-content'>
          <img 
            src='/favicon.png' 
            alt='Image of Peter Hafner' 
            className='me-image ml-3 rounded-[15px] border-2 dark:border-white'
          />

          <div className='me-bullet-list-container'>
            <ol>
              <li>I'm currently studying computer science at HTL-Villach</li>
              <li>I'm getting into open source software</li>
              <li>I'm using Linux as my main OS / using Arch Linux</li>
              <li>I'm into cybersecurity</li>
              <li>I'm into IoT and Raspberry Pi</li>
              <li>I'm an enthusiastic coffee enjoyer</li>
            </ol>
          </div>
        </div>

        <h1 className='mt-5 border-b'></h1>

        <div className='me-about-me'>
            <b>About me: </b> 
            <p>
              I currently am a student at HTL-Villach. 
              I am studying Computer Science with main focus areas being 'NSCS' - Network-Systems and Cybersecurity, 
              'DSAI' - Data Science and Artificial Intelligence, Webdesign, Mobile computing (Such as Android apps or React native, pwa.) 
              and Java applications. In addition I have knowledge in Software development methods, such as SCRUM. My private and main focus is
              in the cloud and OS area. Nevertheless, I am a fully qualified fullstack developer. 
            </p>
            <p className='pt-3'>
              In my free time I complete private projects and I am trying to learn something new every day!
            </p>
            <p className='pt-3'>
              I really like Coffee!
            </p>
          </div>
      </div>
    </div>
  )
}
