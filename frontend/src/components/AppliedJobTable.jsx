import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

export default function AppliedJobTable() {
    return (
        <div>
            <h1 className='font-bold text-lg my-5'>All Applied Jobs</h1>
            <Table>
                <TableCaption>Applied Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Job Title</TableHead>
                        <TableHead className='text-right'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2].map((item) => (
                            <TableRow key={item}>
                                <TableCell className='font-medium'>2024-06-01</TableCell>
                                <TableCell>Tech Corp</TableCell>
                                <TableCell>Software Engineer</TableCell>
                                <TableCell className='text-right'><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}