import React, { use, useState } from 'react';
import { SiIfood } from 'react-icons/si';
import { Link, useNavigate } from 'react-router';
import registerAnimation from '../assets/new register.json';
import Lottie from 'lottie-react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const { createUser, userProfile, setUser } = use(AuthContext)
    const navigate=useNavigate()
    const [error, setError] = useState('')
    const handleRegisterFrom = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        // create user
        createUser(email, password)
            .then(result => {
                const userRes = result.user
                console.log(userRes)
                userProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...userRes, displayName: name, photoURL: photo })
                        Swal.fire({
                            position: 'center',
                            icon: "success",
                            title: "Registration successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: "error",
                    title: "Please registration first ?",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        // For password validation
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (passwordRegExp.test(password) === false) {
            setError('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.')
            return
        }
    }
    return (
        <div className="card bg-base-100 w-full max-w-5xl mx-auto shrink-0 shadow-2xl my-6">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-gray-100'>
                    <Lottie animationData={registerAnimation} className='pt-17 '></Lottie>
                </div>
                <div className="card-body bg-gradient-to-b from-yellow-600 to-gray-300">
                    <div className='flex justify-center items-center'>
                        <SiIfood className='text-green-800 ' size={60} />
                        <a className="text-4xl font-bold text-white ml-2">BiteClock</a>
                    </div>
                    <h1 className="text-2xl font-bold text-center text-white mt-3">Register your account</h1>
                    <form onSubmit={handleRegisterFrom} className="form  space-y-2 px-10 ">
                        <label className="label font-bold text-lg text-white">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" required />
                        {/* {error && <p className='text-red-500 font-sans'>{error}</p>} */}
                        <label className="label font-bold text-lg text-white">Photo URL</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" required />
                        <label className="label font-bold text-lg text-white">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />
                        <label className="label font-bold text-lg text-white">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input w-full"
                            placeholder="Password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                            title="Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
                        />
                        {error && <p className='font-medium text-md text-red-500'>{error}</p>}
                        <button type='submit' className="btn  w-full  bg-gradient-to-r from-green-500 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-900 mt-2">Register</button>
                        <p className='mt-3 font-semibold text-center text-lg'>Already have an account please   ? <Link className='font-bold text-red-500 hover:text-red-600 underline' to='/logIn'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;