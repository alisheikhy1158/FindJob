import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white text-black text-center py-4 bottom-0 w-full">
                <p className="text-sm">
                   FindJob © {new Date().getFullYear()} All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer
