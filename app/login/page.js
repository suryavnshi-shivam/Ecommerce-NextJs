"use client"
import { loginUser } from '@/api/UserApi/UserAPI';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, Controller } from "react-hook-form";

const Login = () => {
    const router = useRouter()
    const { handleSubmit, control, reset, formState: { errors }, } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const onSubmit = async (data) => {
        // console.log(data);
        const payload = {
            username: data.username,
            email: data.email,
            password: data.password
        }
        await loginUser(payload).then(res => {
            // console.log(res);
            setData(res.data)
        }).catch(err => {
            // console.log(err)
        })
        // router.push('/')
    }

    return (
        <div className='w-full p-5 text-center lg:px-[35%] xl:px-[38%] md:px-[30%] my-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='rounded p-5 text-center border border-spacing-1 border-black bg-slate-200'>
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <div>
                            <div>
                                <label className='sd:mr-[10px]'>Username</label>
                                <input
                                    className='my-2 p-3 text-center border border-spacing-1 border-black rounded'
                                    type="text"
                                    placeholder='Username'
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
                        <div>
                            <label className='sd:mr-[10px]'>Password</label>
                            <input
                                className='my-2 p-3 text-center border border-spacing-1 border-black rounded'
                                type="password"
                                placeholder='Password'
                                name='password'
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                            />
                            {errors.password && (
                                <span className="text-red-600 px-3">Password is required*</span>
                            )}
                        </div>
                    )}
                />
                <input value="Login" className='hover:bg-white cursor-pointer border border-spacing-1 border-black p-2 rounded' type="submit" />
            </form>

        </div>
    )
}

export default Login
