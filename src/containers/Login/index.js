import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import validator from 'validator';

const Login = () => {
  const Url = 'https://mitramas-test.herokuapp.com/auth/login';
  const [login, setLogin] = useState({ email: '', password: '' });
  const history = useHistory();
  const [emailError, setEmailError] = useState({ message: '', status: false });

  const handleChange = (e, type) => {
    if (type === 'email') {
      if (validator.isEmail(e.target.value)) {
        setEmailError({ message: 'Email is Correct', status: true });
      } else {
        if (e.target.value === '') {
          setEmailError({ message: 'Email Cannot be Empty', status: false });
        } else {
          setEmailError({ message: 'Email Must be Complete', status: false });
        }
      }
      setLogin({ ...login, email: e.target.value });
    } else {
      setLogin({ ...login, password: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(Url, login)
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          Swal.fire('Success!', 'Login Success!', 'success');
          history.push('home');
        })
        .catch((error) => {
          Swal.fire({
            title: 'Login Failed!',
            text: 'Wrong Username or Password !',
            icon: 'error',
            confirmButtonText: 'Login Again',
          });
        });
    } catch (err) {
      Swal.fire({
        title: 'Login Failed!',
        text: 'Network Error!',
        icon: 'error',
        confirmButtonText: 'Login Again',
      });
    }
  };
  
  return (	
    <section className="py-5 mb-5 mt-5">
      <div className="container px-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-info text-white"> 
              <form className="py-5 px-5" onSubmit={handleSubmit}>
                <h2 className="text-center mb-5">Login</h2> 
                  <div className="mb-3">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="form-control mb-1"
                      onChange={(e) => handleChange(e, 'email')}
                    />
                    <p className={`mb-0 text-sm ${emailError.status ? 'text-white' : 'text-pink-danger'}`}>
                      {emailError.message}
                    </p>
                  </div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="form-control mb-3"
                    onChange={(e) => handleChange(e, 'password')}
                  />
                  <input
                    type="submit" 
                    className="form-control btn btn-light mb-3" 
                    value="Login"
                  />
              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
    );
  };

export default Login;