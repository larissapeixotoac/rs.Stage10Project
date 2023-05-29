import React, { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"

import { useAuth } from "../hooks/auth"
import { api } from "../services/api"

import { Header } from "../components/Header"
import { Card } from "../components/Card"

import { Link, useNavigate } from "react-router-dom"

export interface Note {
    id: number,
    title: string,
    description: string,
    rating: number,
    user_id: number,
    created_at: string,
    updated_at: string,
    tags: DataTag[]
}

export interface DataTag {
    id: number,
    note_id: number,
    user_id: number,
    name: string
}

export function Home() {
    const [notes, setNotes] = useState<Note[]>([])
    const [search, setSearch] = useState("")
    const { userDataAndFunc } = useAuth()
    const { user } = userDataAndFunc

    const navigate = useNavigate()

    function handleMoviePreview(id: number) {
        navigate(`/moviepreview/${id}`)
    }
    
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?user_id=${user.id}&title=${search}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [search])

    return (
        <div className="flex flex-col h-[85vh]">
            <Header 
                value={search}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            />

            <div className="flex flex-col h-full px-32">
                <div className="flex justify-between mt-12 mb-10">
                    <h1 className=" text-[32px] text-white">
                        Meus filmes
                    </h1>
                    <Link to="/newmovie">
                        <button 
                            type="button"
                            className=" bg-PINK rounded-[10px] text-BGDARK_900 flex items-center px-8 py-4 gap-2"
                        >
                            <FiPlus className="h-5 w-5"/>
                            Adicionar filme
                        </button>
                    </Link>
                </div>
                <main className="flex flex-col gap-6 overflow-y-auto pr-3 pb-5">
                    {
                        notes.map(note => (
                            <Card   
                                key={note.id}
                                data={note}
                                onClick={() => handleMoviePreview(note.id)}
                            />
                        ))
                        
                    }
                    
                </main>
            </div>
        </div>
    )
}