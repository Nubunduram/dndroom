import React from 'react'
import { Input } from './ui/input'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const SignInForm = () => {

    return (
        <form className='grid text-left gap-y-4 p-6 rounded-lg bg-secondary'>
            <img src='https://www.dndbeyond.com/content/skins/waterdeep/images/dnd-beyond-logo-black.svg' alt='d&d beyond logo' />
            <Input type="email" autoComplete='email' placeholder="Email" />
            <Input type="password" autoComplete='current-password' placeholder="Password" />
            <Button type='submit'>Sign In</Button>
            <Button variant='outline'>Sign Up</Button>
            <Link href="/forgot-password" className='text-xs hover:underline'>Forgot Password?</Link>
        </form>
    )
}

export default SignInForm
