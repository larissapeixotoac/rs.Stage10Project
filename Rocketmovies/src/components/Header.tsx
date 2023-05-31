import { Link, useNavigate } from 'react-router-dom'

import { api } from '../services/api'
import { useAuth } from '../hooks/auth'

import avatarPlaceholder from '../assets/avatar_placeholder.svg'
import { Input } from './Input'

export function Header({onChange, value}: {onChange: any, value: string}) {
    const { userDataAndFunc } = useAuth()
    const { signOut, user } = userDataAndFunc
        
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const navigate = useNavigate()

    function handlesignOut() {
        signOut()
        navigate('/')
    }

    return (
        <div className='flex justify-between items-center w-screen px-28 py-[25px] border-b border-[#3E3B47]'>
            <h1 className=' text-PINK font-bold text-2xl mr-16'>
                RocketMovies
            </h1>
            <div className='flex-1'>
                <Input 
                    type="text" 
                    placeholder="Pesquisar pelo título" 
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div className='flex ml-16 gap-3'>
                <div className='flex flex-col items-end py-4'>
                    <Link 
                        to="/profile"
                        className=' font-bold'
                    >
                        {user.name}
                    </Link>

                    <button 
                        className='text-sm text-GRAY_100'
                        onClick={handlesignOut}
                    >
                        sair
                    </button>
                </div>
                <Link to="/profile">
                    <img
                        src={avatarURL}
                        alt={user.name}
                        className=' w-16 h-16 rounded-full'
                    />
                </Link>
            </div>
        </div>
    )
}