import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios, { AxiosError } from 'axios'

import { api } from '../services/api'

import star from '../assets/star.svg'
import hollowStar from '../assets/hollowStar.svg'
import bigStar from '../assets/bigStar.svg'
import bigHollowStar from '../assets/bigHollowStar.svg'
import { Note } from '../pages/Home'

type Rate = {
    rate: number
}

function HandleBigRating(rate: Rate) {
    let stars = (5 - rate.rate)

    return (
        <div className="flex flex-row-reverse items-center gap-[6px]">
            {stars >= 1 ? 
                <img src={bigHollowStar} alt="" />
                :
                <img src={bigStar} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={bigHollowStar} alt="" />
                :
                <img src={bigStar} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={bigHollowStar} alt="" />
                :
                <img src={bigStar} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={bigHollowStar} alt="" />
                :
                <img src={bigStar} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={bigHollowStar} alt="" />
                :
                <img src={bigStar} alt="" />
            }
        </div>
    )
}

type Value = {
    value: number
}

function HandleLittleStars(value: Value) {
    let stars = (5 - value.value)
    console.log(value.value)
    return (
        <div className="flex flex-row-reverse items-center gap-[6px]">
            {stars >= 1 ? 
                <img src={hollowStar} alt="" />
                :
                <img src={star} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={hollowStar} alt="" />
                :
                <img src={star} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={hollowStar} alt="" />
                :
                <img src={star} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={hollowStar} alt="" />
                :
                <img src={star} alt="" />
            }
            <div className='hidden'>
                {stars--}
            </div>
            {stars >= 1 ? 
                <img src={hollowStar} alt="" />
                :
                <img src={star} alt="" />
            }
        </div>
    )

}

export function Rating({ big, note_id, value}: {big: boolean, note_id: number, value: number|undefined}) {
    const [rate, setRate] = useState<number>()
    const [note, setNote] = useState<Note>()

    const params = useParams()

    useEffect(() => {
        async function fetchNote() {
            try {
                const response = await api.get(`/notes/${params.id}`)
                setNote(response.data)
                
            } catch(err) {
                const error = err as Error | AxiosError<Error>
                if(axios.isAxiosError(error)) {
                    console.log(error.response?.data.message)
                } else {
                    console.log("...")
                }
            }
        }
        fetchNote()     
    }, [note_id])

    useEffect(() => {
        setRate(note?.rating) 
    }, [note])

    return (
        <div className="flex items-center gap-[6px]">
            {
                rate ? 
                <HandleBigRating rate={rate} />
                :
                <HandleLittleStars value={value} />
            }
            
        </div>
    )
}