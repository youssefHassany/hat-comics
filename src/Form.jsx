import React from 'react'

const Form = ({ handleTyping, typedHero }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            required
            type="text" 
            placeholder='Enter Hero Name' 
            value={typedHero}
            onChange={handleTyping}
        />
        {/* <button type='submit'>Search</button> */}
    </form>
  )
}

export default Form