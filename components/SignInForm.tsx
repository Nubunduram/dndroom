import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const signIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            alert(user.email + " is connected")
        } catch (error) {
            console.error("Error signing in:", error);
            alert("The pair Mail/Password is Incorrect");
        }
    };

    return (
        <form onSubmit={signIn} className='grid text-left p-6 h-80 rounded-lg bg-secondary'>
            <img src='https://www.dndbeyond.com/content/skins/waterdeep/images/dnd-beyond-logo-black.svg' alt='D&D Beyond logo' />
            <Input type="email" autoComplete='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" autoComplete='current-password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type='submit'>Sign In</Button>
            <Link href="/forgot-password" className='text-xs hover:underline'>Forgot Password?</Link>
        </form>
    );
};

export default SignInForm;
