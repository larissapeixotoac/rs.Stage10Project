import { useState } from "react"
import axios, { AxiosError } from "axios"

import { api } from "../services/api"

import { Back } from "../components/Back"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { NewTag } from "../components/NewTag"

export function NewMovie() {
    const [title, setTitle] = useState<string>('')
    const [rating, setRating] = useState<number>()
    const [ratingString, setRatingString] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const [tags, setTags] = useState<string[]>([])
    const [newTag, setNewTag] = useState<string>('')

    async function handleNewNote() {
        if(!title) {
            return alert("O campo do título está vazio, escreva alguma coisa para adicionar a nota.")
        }
        if(!rating) {
            return alert("O campo da nota está vazio, escreva alguma coisa para adicionar a nota.")
        } 
        if(newTag) {
            return alert("Existe uma Tag a ser adicionada. Adicione ou deixe o campo vazio.")
        } 

        try {
            await api.post("/notes", {
                title,
                description,
                rating,
                tags
            })

            setTitle('')
            setDescription('')
            setRatingString('')
            setTags([])

            alert("Nota cadastrada com sucesso.")

        } catch(err) {
            const error = err as Error | AxiosError<Error>
            if(axios.isAxiosError(error)) {
                alert(error.response?.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    function handleDeleteMovie() {
        setTitle('')
        setRatingString('')
        setDescription('')
        setTags([])
        setNewTag('')
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deletedTag: string) {
        setTags(prevState => prevState.filter(tag => tag !== deletedTag))
    }

    return (
        <div className="w-[99vw] h-screen flex flex-col items-center">
            <Header 
                value=""
                onChange={() => {}}
            />

            <div className=" pt-10" >
                <Back   />     

                <div className="w-[1137px] h-[750px] pr-2 overflow-y-auto" >
                    <h1 className=" font-medium text-4xl mb-10">
                        Novo Filme
                    </h1>

                    <div className="flex justify-between gap-10 mb-10 ">
                        <div className="flex-1">
                            <Input 
                                type="text" 
                                placeholder="Título" 
                                value={title}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}  
                            />
                        </div>
                        <div className="flex-1">
                            <Input 
                                type="text" 
                                placeholder="Sua nota (de 0 a 5)" 
                                value={ratingString}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRatingString(() => {
                                    setRating(parseInt(event.target.value))
                                    return event.target.value                               
                                })} 
                            />
                        </div>
                    </div>

                    <textarea                
                        placeholder="Observações"   
                        className="bg-BGDARK_800 rounded-[10px] px-4 py-4 w-full h-64 resize-none placeholder:text-GRAY_100 placeholder:font-ff_secondary mb-10"
                        value={description}
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value)}
                    />

                    <h2 className=" text-xl text-GRAY_50 mb-6">
                        Marcadores
                    </h2>

                    <div className="flex flex-wrap gap-6 mb-10 bg-BLACK rounded-lg px-4 py-4">
                        {
                            tags.map((tag: string, index: number) => (
                                <NewTag 
                                    key={String(index)}
                                    value={tag} 
                                    isnew={false}
                                    onClick={() => handleRemoveTag(tag)}
                                    onChange={() => {}}
                                />
                            ))
                        }
                        <NewTag 
                            value={newTag} 
                            isnew 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewTag(event.target.value)}
                            onClick={handleAddTag}
                        />
                    </div>

                    <div
                        className="flex gap-10"
                    >
                        <Button 
                            title="Excluir filme" 
                            del 
                            onClick={handleDeleteMovie}
                        />

                        <Button 
                            title="Salvar alterações" 
                            del={false}
                            onClick={handleNewNote}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}