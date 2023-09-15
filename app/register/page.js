"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { registerUser } from "@/api/UserApi/UserAPI";
const Register = () => {
    const router = useRouter()
    const { handleSubmit, control, reset, formState: { errors }, } = useForm({
        defaultValues: {
            username: '',
            password: '',
            email: ''
        }
    });
    const onSubmit = async (data) => {
        // console.log(data);
        const payload = {
            username: data.username,
            email: data.email,
            password: data.password
        }
        await registerUser(payload).then(res => {
            // console.log(res);
            setData(res.data)
        }).catch(err => {
            // console.log(err)
        })
        // router.push('/login')
    }
    return (
        <div className='w-full p-5 text-center lg:px-[20rem] xl:px-[30rem] md:px-[10rem] my-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='rounded p-5 text-center border border-spacing-1 border-black bg-slate-200'>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (   
                        <div className=''>
                            <label>Email</label>
                            <div >
                                <input
                                    className='my-2 p-3 text-center border border-spacing-1 border-black rounded'
                                    type="text"
                                    placeholder='email address'
                                    name="email"
                                    value={value}
                                    onChange={(e) => onChange(e.target.value)}
                                />
                            </div>
                            {errors.email && (
                                <span className=" text-red-600 px-3">Email is required*</span>
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <div className=''>
                            <label>Username</label>
                            <div >
                                <input
                                    className='my-2 p-3 text-center border border-spacing-1 border-black rounded'
                                    type="text"
                                    placeholder='username'
                                    name="username"
                                    value={value}
                                    onChange={(e) => onChange(e.target.value)}
                                />
                            </div>
                            {errors.username && (
                                <span className=" text-red-600 px-3">Username is required*</span>
                            )}
                        </div>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <div className=''>
                                <label>Password</label>
                            <div>
                                <input
                                    className='my-2 p-3 text-center border border-spacing-1 border-black rounded'
                                    type="password"
                                    placeholder='password'
                                    name='password'
                                    value={value}
                                    onChange={(e) => onChange(e.target.value)}
                                />
                            </div>
                            {errors.password && (
                                <span className="text-red-600 px-3">Password is required*</span>
                            )}
                        </div>
                    )}
                />
                <input className='hover:bg-white cursor-pointer border border-spacing-1 border-black p-2 rounded' type="submit" />
            </form>
        </div>
    )
}
export default Register