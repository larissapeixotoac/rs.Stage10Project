import React, { useState } from "react"
import { FiCamera } from "react-icons/fi"

import { useAuth } from "../hooks/auth"
import { api } from "../services/api"

import avatarPlaceholder from '../assets/avatar_placeholder.svg'
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Back } from "../components/Back"


export function Profile() {
    const { userDataAndFunc } = useAuth()
    const { user, updateProfile } = userDataAndFunc

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassoword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${userDataAndFunc.user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    
    async function handleUpdateProfile() {
        const Update = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, Update)

        await updateProfile(userUpdated, avatarFile)
    }

    async function handleChangeAvatar(event: any) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
   
    return (
        <div className=" relative flex justify-center">
            <div className=" bg-PINK bg-opacity-5 absolute h-[144px] w-screen -z-10">
            </div>

            <div 
                className="absolute left-0 mt-[60px] ml-36"
            >
                <Back  />
                
            </div>

            <main className=" w-[340px] flex flex-col items-center">
                <div className="flex items-end justify-end relative mb-16">
                    <img 
                        src={avatar} 
                        alt={name}
                        className=" rounded-[50%] h-[186px] w-[186px] mt-[51px]"
                    />
                    <label 
                        htmlFor="avatar"
                        className=" bg-PINK w-12 h-12 absolute rounded-full flex items-center justify-center text-BGDARK_700 right-2 bottom-2 cursor-pointer"
                    >
                        <FiCamera className="w-5 h-5"   />
                        <input 
                            type="file" 
                            id="avatar" 
                            className="hidden" 
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </div>

                <div className="w-full">
                    <div className="mb-2">
                        <Input 
                            type="text" 
                            placeholder="Nome" 
                            value={name} 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} 
                            
                        />
                    </div>
                    <div className="mb-6">
                        <Input 
                            type="email" 
                            placeholder="E-mail" 
                            value={email}  
                            onChange={(event: React.ChangeEvent<HTMLInputElement> )=> setEmail(event.target.value)} 
                        />                    
                    </div>
                </div>

                <div className="w-full">
                    <div className="mb-2">
                        <Input 
                            type="password" 
                            placeholder="Senha atual" 
                            value={oldPassword}  
                            onChange={(event: React.ChangeEvent<HTMLInputElement> )=> setOldPassoword(event.target.value)} 
                        />
                    </div>
                    <Input 
                        type="password" 
                        placeholder="Nova senha" 
                        value={newPassword} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement> )=> setNewPassword(event.target.value)} 
                    />
                </div>

                <div className="mt-6">
                    <Button 
                        title="Salvar" 
                        del={false} 
                        onClick={handleUpdateProfile}
                    />
                </div>
            </main>
        </div>
    )
}