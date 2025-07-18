import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import { SiIfood } from 'react-icons/si';
import { Link, useLocation, useNavigate } from 'react-router';
import loginAnimation from '../assets/Animation - new login.json'
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { motion } from "motion/react"
const fadeIn = {
    hidden: { opacity: 0, x: 18 },
    visible: { opacity: 1, x: 10 },
}
const LoginPage = () => {
    const { signInUser, googleLogin } = use(AuthContext)
    const [eye, setEye] = useState(false)
    const location = useLocation()
    const navgate = useNavigate()
    const [error, setError] = useState('')
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // login user.
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navgate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: "Error",
                    title: "Enter valid email and password",
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
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.data)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Login with email successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navgate('/')
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Enter your valid email",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <motion.div
         whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.05 }}
             initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 ,delay:0.2}} 
        className="card bg-base-100 w-full max-w-5xl mx-auto my-15  shadow-2xl">
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div>
                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card-body bg-gradient-to-b from-yellow-600 to-gray-300">
                    <div className='flex justify-center items-center'>
                        <SiIfood className='text-green-800 ' size={60} />
                        <a className="text-4xl font-bold text-white ml-2">BiteClock</a>
                    </div>
                    <h1 className="text-2xl font-bold text-center text-white mt-3">Login your account</h1>
                    <form onSubmit={handleSignIn} className="form space-y-3 px-10 py-1">
                        <label className="label  font-bold text-lg text-white">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />
                        <label className="label font-bold  text-white text-lg">Password</label>
                        <input
                            type={eye ? 'text' : 'password'}
                            name='password'
                            className="input w-full relative"
                            placeholder="Password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                            title="Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
                        />
                        <div onClick={() => setEye(!eye)} className='absolute lg:bottom-47 bottom-52  right-19' >
                            {eye ?<IoMdEye size={20}></IoMdEye> : <IoMdEyeOff size={20}></IoMdEyeOff>}
                        </div>
                        {error && <p className='font-medium text-md text-red-500'>{error}</p>}
                        <button type='submit' className="btn  w-full  bg-gradient-to-r from-green-500 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-900">Login</button>
                        <button onClick={handleGoogleSignIn} className="btn btn-ghost bg-white text-black border-[#e5e5e5] w-full hover:rounded-2xl">
                            <svg aria-label="Google logo" width="30" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className='mt-3 font-semibold text-center text-lg'>Dont’t have an account please  ? <Link className='font-bold text-red-500 underline hover:text-red-600' to='/register'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default LoginPage;