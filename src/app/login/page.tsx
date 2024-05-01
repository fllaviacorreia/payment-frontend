'use client'
import { signin } from '@/app/actions/auth'
import Button from '@/components/button'
import { Input } from '@/components/input'
import { useFormState, useFormStatus } from 'react-dom'

export function Login() {
    const [state, action] = useFormState(signin, undefined)
    const { pending } = useFormStatus()

    return (
        <form action={action}>
            <Input 
                id='email' 
                name='email' 
                type='email' 
                placeholder='Email' 
                title='Insira seu email' 
                errorMessage={state?.errors?.email ? state?.errors?.email : undefined} 
            />
            <Input 
                id='password' 
                name='password' 
                type='password' 
                placeholder='Senha' 
                title='Insira sua senha' 
                errorMessage={state?.errors?.password ? state?.errors?.password : undefined} 
            />
            <Button 
                aria-disabled={pending} 
                classes="text-white bg-english-violet" 
                type='submit' 
                title={pending ? 'Carregando...' : 'Entrar'} 
            />
        </form>
    )
}