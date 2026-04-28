import React, { useState } from 'react'
import Navbar from '../shared/navbar'
import { Label } from '../ui/label'
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_ENDPOINT } from '../utils/constant'
import axios from 'axios'
import { setLoading } from '../../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'


function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const { loading } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files[0] });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('password', input.password);
        formData.append('role', input.role);
        if (input.file) {
            formData.append('file', input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate('/signin');
                toast.success(res.data.message);
            }
            console.log(res.data);
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-full max-w-lg border border-gray-300 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>

                    <div className='flex flex-col my-2'>
                        <Label className='mb-2'>Full Name</Label>
                        <input className='border border-gray-300 rounded-md p-1' type="text" value={input.fullname} name='fullname' onChange={changeEventHandler} placeholder='Enter your full name' />
                    </div>

                    <div className='flex flex-col my-2'>
                        <Label className='mb-2'>Email</Label>
                        <input className='border border-gray-300 rounded-md p-1' type="email" value={input.email} name='email' onChange={changeEventHandler} placeholder='something@gmail.com' />
                    </div>

                    <div className='flex flex-col my-2'>
                        <Label className='mb-2'>Phone Number</Label>
                        <input className='border border-gray-300 rounded-md p-1' type="tel" value={input.phoneNumber} name='phoneNumber' onChange={changeEventHandler} maxLength={11} placeholder='0312123456789' />
                    </div>

                    <div className='flex flex-col my-2'>
                        <Label className='mb-2'>Password</Label>
                        <input className='border border-gray-300 rounded-md p-1' type="password" value={input.password} name='password' onChange={changeEventHandler} placeholder='Enter your password' />
                    </div>

                    <div className='flex items-center justify-between mt-6'>
                        <RadioGroup className='flex items-center gap-4'>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    value="student"
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r1" className="cursor-pointer">Student</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    value="recruiter"
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r2" className="cursor-pointer">Recruiter</Label>
                            </div>
                        </RadioGroup>

                        <div className='flex items-center gap-2'>
                            <Label className="whitespace-nowrap">Profile</Label>
                            <input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className='cursor-pointer text-sm w-fit max-w-36.25 border border-gray-300 rounded-md p-1 text-gray-500'
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className='w-full my-4 bg-[#000000] hover:bg-[#F83002] cursor-pointer text-white' > <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait</Button> :
                            <Button type="submit" className='w-full my-4 bg-[#000000] hover:bg-[#F83002] cursor-pointer text-white '>Sign Up</Button>
                    }                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-500 hover:underline'>Sign In</Link></span>
                </form>
            </div>
        </>
    )
}

export default Signup