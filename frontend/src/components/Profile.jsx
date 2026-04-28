import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'

const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"]

export default function Profile() {
    const isResume = true;
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Navbar />
            <div className=' max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>

                    <div className='flex items-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src="https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
                        </Avatar>
                        <div>

                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis officia animi numquam consequuntur expedita molestiae. Nisi.</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className='text-right' variant='outline'><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>

                        <Mail />
                        <span>something@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 mt-2 my-2'>
                        <Contact />
                        <span>+92 300 1234567</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length > 0 ? (
                                skills.map((skill, index) => <Badge className="bg-black text-white" key={index}> {skill} </Badge>)
                            ) : (
                                <p>No skills added yet.</p>
                            )
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1'>
                    <Label className="text-medium font-bold"> Resume</Label>
                    {
                        isResume ? <a target='blank' href='https://youtube.com' className='text-blue-500 hover:underline cursor-pointer'> Resume   </a> : <p>No resume uploaded.</p>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
            <Footer />
        </div>
    )
}
