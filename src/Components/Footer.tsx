import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white p-6 mt-8 top-0">
                <div className="container mx-auto flex justify-between items-center mb-6">
                    <div className="text-2xl font-bold">Boxcars</div>
                    <div>
                        <label htmlFor="email" className="block text-sm">Subscribe to our newsletter</label>
                        <div className="flex mt-2">
                            <input type="email" id="email" placeholder="Enter your email" className="p-2 rounded-l-lg text-white" />
                            <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center mb-6">
                    <div>Section 1</div>
                    <div>Section 2</div>
                    <div>Section 3</div>
                    <div>Section 4</div>
                    <div>Section 5</div>
                    <div>Section 6</div>
                </div>

                <div className="text-center border-t border-gray-600 pt-4">
                    <p>&copy; 2025 Boxcars. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
