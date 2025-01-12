import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex-between w-full mt-16 pt-3 border-t border-gray-200'>
            <p className='text-center text-gray-600'>
                Created with <span className='text-red-500'>❤️</span> by
                <Link href='https://devfrderick.me' className='text-green-500 ml-1'>
                    devfrderick
                </Link>
            </p>
        </footer>
    );
};

export default Footer;