import { SigninFormSchema, FormState } from '@/app/lib/definitions'
import { redirect } from 'next/navigation'
import { createSession, deleteSession } from '../lib/session'

export async function signin(state: FormState, formData: any) {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  const API_URL = process.env.API_URL+'auth/login'
  // Call the provider or db to create a user...
  const data = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
        email: validatedFields.data.email,
        password: validatedFields.data.password
    }),
    headers: {
        'Content-Type': 'application/json'
    }
  })

  if(!data.ok){
    return {
        message: 'An error occurred while creating your account.',
      }
  }

  await createSession('')

  // 5. Redirect user
  redirect('/home')
 
}

export async function logout() {
  deleteSession()
  redirect('/login')
}