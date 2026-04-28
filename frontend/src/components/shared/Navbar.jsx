import React from 'react'
import { User2, LogOut,  } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const {user} = useSelector(store => store.auth);

    return (
        <div className='bg-white border-b border-b-gray-200'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
                <div>
                    <h1 className='text-2xl font-bold'>Find<span className='text-[#F83002]'>Job</span></h1>
                </div>

                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li className='hover:text-[#F83002]'><Link to="/">Home</Link></li>
                        <li className='hover:text-[#F83002]'><Link to="/jobs">Jobs</Link></li>
                        <li className='hover:text-[#F83002]'><Link to="/browse">Browse</Link></li>
                    </ul>

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/signin">
                                    <Button variant="outline" className='hover:bg-transparent hover:text-[#F83002]'>
                                        Sign In
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className='bg-[#000000] hover:bg-[#F83002] text-white'>
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profilePhoto || "https://github.com/shadcn.png"} />
                                    </Avatar>
                                </PopoverTrigger>

                                <PopoverContent
                                    className="w-80"
                                    onOpenAutoFocus={(e) => e.preventDefault()}
                                >
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profilePhoto || "https://github.com/shadcn.png"} alt="User Profile" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullName || "Unknown User"}</h4>
                                            <p className='text-sm text-muted-foreground'>{user?.role === "student" ? "Student" : "Recruiter"}</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col my-2 text-gray-600'>
                                        <div className='flex w-full items-center gap-2 cursor-pointer'>
                                            <User2 className="w-4 h-4" />
                                            <Button
                                                variant="ghost"
                                                className="hover:bg-transparent hover:text-[#F83002] p-0 h-auto focus-visible:ring-0"
                                            >
                                                <Link to="/profile">View Profile</Link>
                                            </Button>
                                        </div>

                                        <div className='flex w-full items-center gap-2 mt-2 cursor-pointer'>
                                            <LogOut className="w-4 h-4" />
                                            <Button
                                                variant="ghost"
                                                className="hover:bg-transparent hover:text-[#F83002] p-0 h-auto focus-visible:ring-0"
                                            >
                                                Log Out
                                            </Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar