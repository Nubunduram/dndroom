import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from "@/components/ui/button";
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    // Function to check password strength
    const isPasswordStrong = (password: string): boolean => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    };


    const checkPasswordConfirmation = (password: string, passwordConfirmation: string): boolean => {
        return password === passwordConfirmation;
    };

    const signUp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!checkPasswordConfirmation(password, passwordConfirmation)) {
            alert("The Password & its confirmation are different");
            return;
        }

        if (!isPasswordStrong(password)) {
            alert("Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            alert("User created successfully");
        } catch (error) {
            console.error("Error creating user:", error);
            alert("Error creating user");
        }
    };

    return (
        <form onSubmit={signUp} className='grid text-left p-6 h-80 rounded-lg bg-secondary'>
            <img src='https://www.dndbeyond.com/content/skins/waterdeep/images/dnd-beyond-logo-black.svg' alt='D&D Beyond logo' />
            <Input type="email" autoComplete='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" autoComplete='new-password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Input type="password" autoComplete='new-password' placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
            <Button type='submit'>Sign Up</Button>
        </form>
    );
};

export default SignUpForm;
