import React from 'react'
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
            className='me-image'
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
      </div>
    </div>
  )
}
