import React from 'react'
import { FiX, FiPlus } from 'react-icons/fi'

interface Tag {
    isnew: boolean,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function NewTag({isnew, value, onChange, onClick}: Tag) {
    return (
        <div
            className={`bg-BGDARK_800 rounded-[10px] font-ff_secondary text-white flex items-center px-4 py-4 ${isnew ? ' bg-transparent rounded-[10px] border-dashed border-GRAY_100 border-2' : 'bg-BGDARK_800'}`}
        >
            <input         
                type="text"          
                value={value}       
                readOnly={!isnew}
                placeholder="Novo marcador" 
                className=' bg-transparent placeholder:text-GRAY_100'
                onChange={onChange}

            />

            <button 
                onClick={onClick}
                className=' text-PINK'
            >
                {isnew ? <FiPlus className="w-6 h-6"   /> : <FiX className="w-6 h-6"  />}
            </button>

        </div>
    )
}