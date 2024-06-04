import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignInForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const signIn = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user connected")
            })
            .catch((err) => {
                console.log(err.code);
                console.log(err.message);
            });
    }

    return (
        <form onSubmit={signIn} className='grid text-left p-6 h-80 rounded-lg bg-secondary'>
            <img src='https://www.dndbeyond.com/content/skins/waterdeep/images/dnd-beyond-logo-black.svg' alt='d&d beyond logo' />
            <Input type="email" autoComplete='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                required />
            <Input type="password" autoComplete='current-password' placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <Button type='submit'>Sign In</Button>
            <Link href="/forgot-password" className='text-xs hover:underline'>Forgot Password?</Link>
        </form>
    )
}

export default SignInForm
