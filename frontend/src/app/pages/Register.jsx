/*
    useState - for form fields to have component level state
*/

import {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
    /*
        formData is an object that will contain all fields, another option would be to have separate 
        state for each value  
    */    

        name: '',
        email: '', 
        password: '',
        password2: '',
    })
    // destructure fields from formData
    const { name, email, password, password2} = formData


    const onChange = (e) => {
        // Setting form data to an object
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault()
    };


  return (
    <>
        <section className="heading">
            <h1>
                <FaUser/> Register
            </h1>
            <p>Please Create an Account..</p>
        </section>
        <section className="form">
            <form action="">
                <div className="form-group">
                <input type='text' className='form-control' id='name' name='name' value={name} 
                onChange={onChange} placeholder='Enter your name'/>
                </div>
                <div className="form-group">
                <input type='email' className='form-control' id='email' name='email' value={email} 
                onChange={onChange} placeholder='Enter your email'/>
                </div>
                <div className="form-group">
                <input type='password' className='form-control' id='password' name='password' value={password} 
                onChange={onChange} placeholder='Enter password'/>
                </div>
                <div className="form-group">
                <input type='password' className='form-control' id='password2' name='password2' value={password2} 
                onChange={onChange} placeholder='Enter confirm password'/>
                </div>
                <div className="form-group">
                    {/* shortcut : to enter a type attribute */}
                    <button type="submit" className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register