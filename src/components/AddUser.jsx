import React from 'react'

const AddUser = () => {
  return (
    <div className="add-user">
        <form action="POST">
            <label htmlFor="fName">Ad</label>
            <input type="text" id='fName' required/>
            <label htmlFor="lName">Soyad</label>
            <input type="text" id='lName' required/>
            <label htmlFor="mail">Mail</label>
            <input type="email" id='mail' required/>
            <label htmlFor="birthDay">Doğum tarixi</label>
            <input type="date" id='birthDay' required/>
            <div>
            <button type='submit'>Register</button>

            </div>
        </form>
    </div>
  )
}

export default AddUser