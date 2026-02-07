import React from 'react'

const NewHome = () => {
  return (
    <div className='flex flex-col'>
      <h1>Enquiry Detail</h1>
      <form action="">

       <div >
         <label htmlFor="name">Name</label>
        <input 
            type="text"
            placeholder='enter your name'
            name='name'
        
        />
       </div>
       <div>
         <label htmlFor="email">Email</label>
        <input 
            type="email"
            placeholder='enter your email'
            name='email'
        
        />
       </div>
       <div>
         <label htmlFor="password">Password</label>
        <input 
            type="password"
            placeholder='enter your password'
            name='password'
        
        />
       </div>
      </form>
    </div>
  )
}

export default NewHome
