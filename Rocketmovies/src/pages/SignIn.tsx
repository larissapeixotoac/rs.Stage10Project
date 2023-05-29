import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../hooks/auth'

import { Title } from '../components/Title'
import { Input } from '../components/Input'
import { Button } from '../components/Button'


export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { userDataAndFunc } = useAuth()
    const { signIn } = userDataAndFunc

    function handleSignIn() {
        signIn(email, password)
    }
 
    return (
        <div className="flex h-screen">
            <div className=" mx-40 mt-60 w-[340px]">
                <Title />

                <h2 className=" text-2xl font-medium my-12">
                    Faça seu login
                </h2>
                <div className="flex flex-col gap-2 mb-6">
                    <Input 
                        type="email" 
                        placeholder='E-mail' 
                        value={email}           
                        onChange={(event: any) => setEmail(event.target.value)}          
                    />
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={(event: any) => setPassword(event.target.value)}                         
                    />
                </div>

                <Button 
                    title="Entrar" 
                    del={false} 
                    onClick={handleSignIn}
                />

                <Link
                    to='/register'
                    className=" text-PINK flex justify-center mt-11 cursor-pointer"
                >
                    Criar conta
                </Link>

            </div>

            <div className="flex-1 bg-BG_COVER bg-no-repeat bg-center bg-cover">
            </div>

        </div>
    )
}

