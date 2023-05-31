import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiClock } from "react-icons/fi";

import { api } from "../services/api";
import { useAuth } from "../hooks/auth";

import { DataTag, Note } from "./Home";

import { Header } from "../components/Header";
import { Rating } from "../components/Rating";
import { Tag } from "../components/Tag";
import { Back } from "../components/Back";

export function MoviePreview() {
    const [note, setNote] = useState({} as Note)
    const [tags, setTags] = useState<DataTag[]>([])

    const { userDataAndFunc } = useAuth()
    const { user } = userDataAndFunc
    
    const params = useParams()
    const navigate = useNavigate()

    async function handleDeleteNote() {
        const confirm = window.confirm('Deseja realmente excluir essa nota?')

        if(confirm) {
            await api.delete(`/notes/${params.id}`)
            navigate(-1)
        }
    }
    
    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            setNote(response.data)
        }
        
        fetchNote()
        setTags(note.tags)        
    }, [])

    useEffect(() => {
        setTags(note.tags)
    }, [note])
    
    return (
        <div className="h-screen w-screen">
            <Header 
                onChange={() => {}}
                value=""
            />

            <div className="flex flex-col items-center">

                <main className="h-[75vh] overflow-y-auto w-[1137px] p-3">
                
                    <div className="mt-10 left-0 relative">
                        <Back/>
                    </div>

                    <div className="flex items-center gap-5">
                        <h1 className=" font-medium text-4xl max-w-[550px]">
                            {note.title}
                        </h1>
                        <Rating
                            note_id={note.id}
                            value={undefined}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 mt-6 mb-10">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://github.com/larissapeixotoac.png"
                                    alt="Foto do autor"
                                    className=" w-4 h-4 rounded-full"
                                />
                                <p>
                                    {user.name}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock className=" text-PINK"/>
                                <p>
                                    {note.created_at}
                                </p>
                            </div>
                        </div>
                        <button 
                            className="mt-6 mb-10 text-PINK text-lg"
                            onClick={handleDeleteNote}
                        >
                            Excluir
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mb-10">
                        {
                            tags ?                             
                                tags.map((tag: DataTag) => (
                                    <Tag 
                                        title={tag.name}
                                        key={tag.id}
                                    />
                                ))
                             : <div></div>
                        }
                        
                    </div>
                    <div className="text-justify flex flex-wrap gap-5">
                        <p>
                            {note.description}
                        </p>
                    </div>
                </main>
            </div>

        </div>
    )
}