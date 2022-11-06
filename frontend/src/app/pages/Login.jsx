
import {useState, useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
    /*
        formData is an object that will contain all fields, another option would be to have separate 
        state for each value  
    */    
        email: '', 
        password: '',
    })
    // destructure fields from formData
    const { email, password} = formData


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
                <FaSignInAlt/> LogIn
            </h1>
            <p>Log In and Start setting Goals..</p>
        </section>
        <section className="form">
            <form action="">
                <div className="form-group">
                <input type='email' className='form-control' id='email' name='email' value={email} 
                onChange={onChange} placeholder='Enter your email'/>
                </div>
                <div className="form-group">
                <input type='password' className='form-control' id='password' name='password' value={password} 
                onChange={onChange} placeholder='Enter password'/>
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

export default Login