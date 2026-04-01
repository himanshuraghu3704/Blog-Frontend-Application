import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input, Logo } from './index'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error,setError] = useState("");

    const login = async(data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData){
                    dispatch(authLogin(userData));
                }
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }
  return (
    <div className='flex items-center justify-center w-full mt-4 sm:mt-8 px-4 sm:px-0'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 
            rounded-xl p-6 sm:p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-fit'>
                        <Logo />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>
                    Sign in to your account
                </h2>
                <p className='mt-2 text-center text-base text-black /60'>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className='font-medium text-primary transition-all duration-200
                        hover:underline'>
                            Sign Up
                    </Link>
                </p>
                {error && (
                    <div className="bg-red-50 border border-red-200 p-4 mt-8 rounded-lg text-center shadow-sm">
                        <p className="text-red-600 text-sm font-medium">{error}</p>
                    </div>
                )}
                    <form onSubmit={handleSubmit(login)} className='mt-8'>
                        <div className='space-y-5'>
                            <Input 
                                label = "Email: "
                                placeholder="Enter your email"
                                type="email"
                                {...register("email",{
                                    required:true,
                                    validate:{
                                        matchPattern: (value) => 
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
                                            || "Email address must be a valid address",
                                    }
                                })}
                            />
                            <Input 
                                label="Password: "
                                type="password"
                                placeholder="Enter your password"
                                {...register("password",{required:true})}
                            />
                            <Button type="submit" className="w-full">
                                Sign in
                            </Button>
                        </div>
                    </form>
        </div> 
    </div>
  )
}

export default Login