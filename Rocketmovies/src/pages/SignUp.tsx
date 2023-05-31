import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { api } from '../services/api'

import bgCover from '../assets/cover.svg'
import { Title } from '../components/Title'
import { Input } from '../components/Input'
import { Button } from '../components/Button'


export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSignUp () {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post('/users', { name, email, password})
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate(-1)
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível realizar o cadastro.")
                }
            })
    }

    function handleBack() {
        navigate(-1)
    }

    return (
        <div className="flex h-screen">
            <div className="flex flex-col justify-center mx-40 mt-30 w-[340px]">
                <Title />

                <h2 className=" text-2xl font-medium my-12">
                    Crie sua conta
                </h2>

                <div className="flex flex-col gap-2 mb-6">
                    <Input
                        type="text"
                        placeholder='Nome'
                        value={name}
                        onChange={(event: any) => setName(event.target.value)}
                    />
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
                    title="Cadastrar" 
                    del={false} 
                    onClick={handleSignUp}
                />

                <button
                    onClick={handleBack}
                    className=" text-PINK cursor-pointer flex justify-center items-center mt-11 gap-2"
                >
                    <FiArrowLeft className="w-5 h-5" />
                    <p>Voltar para o login</p>
                </button>

            </div>

            <img src={bgCover} alt="" className="flex-1 object-cover "/>

        </div>
    )
}

