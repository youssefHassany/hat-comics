import React from 'react'

const Form = ({ handleTyping, handleSubmit, typedHero }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
            required
            type="text" 
            placeholder='Enter Hero Name' 
            value={typedHero}
            onChange={handleTyping}
        />
        <button type='submit'>Search</button>
    </form>
  )
}

export default Form