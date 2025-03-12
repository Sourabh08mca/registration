import React, { useState } from 'react'


function Register() {

    const [username , setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [errors, setErrors] = useState({})

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
    
        
        if (value.length >= 4) {
          setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
        }
      };

      const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    
        
        if (/\S+@\S+\.\S+/.test(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
      };

      const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    
        
        if (value.length >= 4) {
          setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
      };
    
      const handleConfirm_passwordChange = (e) => {
        const value = e.target.value;
        setConfirm_password(value);
    
        
        if (value.length >= 4) {
          setErrors((prevErrors) => ({ ...prevErrors, confirm_password: "" }));
        }
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
    
        if (Object.keys(validationErrors).length === 0) {
          console.log("Username:",username);  
          console.log("Email:", email);
          console.log("Password:", password);
          console.log("Confirm_password:", confirm_password);
          alert("Registration Successful!");
        } else {
          setErrors(validationErrors);
        }
      };

      const validate = () => {
        const error = {};
        
        if (!username) {
            error.username = "Username is Required";
          } else if (username.length < 4) {
            error.username = "username must be at least 4 characters"; 
          }

        if (!email) {
          error.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          error.email = "Invalid Email Format";
        }
    
        if (!password) {
          error.password = "Password is Required";
        } else if (password.length < 4) {
          error.password = "Password must be at least 4 characters";
        }
        
        
          if (password !== confirm_password) {
            error.confirm_password = "Password not match found";
          }

        return error;
      };

  return (
    <div>
      <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8 bg-[url('https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y=')]  bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center min-h-screen flex flex-col justify-center items-center">
    <div class="w-full max-w-md space-y-8">
        <div class="bg-white shadow-md rounded-md p-6">

            <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Registration
            </h2>


            <form class="space-y-6" method="POST" onSubmit={handleSubmit}>

                <div>
                    <label for="new-password" class="block text-sm font-medium text-gray-700">Username</label>
                    {errors.username && <div className="text-red-500">{errors.username}</div>}
                    <div class="mt-1">
                        <input name="username" type="username" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            value={username}
                            onChange={handleUsernameChange}/> 
                    </div>
                </div>

                <div>
    
                    <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                    <div class="mt-1">
                         
                        <input name="email" type="text" autocomplete="email-address" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            value={email}
                            onChange={handleEmailChange}/>  
                            
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                    <div class="mt-1">
                        <input name="password" type="password" autocomplete="password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            value={password}
                            onChange={handlePasswordChange} />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    {errors.confirm_password && <div className="text-red-500">{errors.confirm_password}</div>}
                    <div class="mt-1">
                        <input name="confirm_password" type="password" autocomplete="confirm-password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            value={confirm_password}
                            onChange={handleConfirm_passwordChange} />
                    </div>
                </div>

                <div>
                    <button  type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                        
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}

export default Register