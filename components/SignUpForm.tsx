import React, { use, useState } from 'react';
import { Input } from './ui/input';
import { Button } from "@/components/ui/button";
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const checkPasswordConfirmation = (password: any, passwordConfirmation: any) => {
        return password === passwordConfirmation
    }

    const signUp = () => {
        if (checkPasswordConfirmation(password, passwordConfirmation)) {
            async (e: { preventDefault: () => void; }) => {
                e.preventDefault()

                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential.user)
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    })
            }
        }
        else {
            alert("The Password & it's confirmation are different")
        }
    }

    return (
        <form onSubmit={signUp} className='grid text-left p-6 h-80 rounded-lg bg-secondary'>
            <img src='https://www.dndbeyond.com/content/skins/waterdeep/images/dnd-beyond-logo-black.svg' alt='d&d beyond logo' />
            <Input type="email" autoComplete='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                required />
            <Input type="password" autoComplete='new-password' placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <Input type="password" autoComplete='new-password' placeholder="Confirm Password" value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required />
            <Button type='submit'>Sign Up</Button>
        </form>
    )
}

export default SignUpForm
