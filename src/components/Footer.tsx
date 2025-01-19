import React from 'react'

const Footer: React.FC = () => {
    const x = new Date()
    return (
        <footer className=" text-gray-600 text-sm pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-center sm:text-left">
                        &copy; {x.getFullYear()} Your Company. All rights reserved.
                    </p>

                    <div className="mt-2 sm:mt-0">
                        <a href="#" className="hover:text-gray-800 transition duration-200">Privacy Policy</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:text-gray-800 transition duration-200">Terms of Service</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="hover:text-gray-800 transition duration-200">Contact</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer