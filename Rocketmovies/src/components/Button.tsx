import React from "react";

interface Button {
    title: string,
    del: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}


export function Button({ title, del, onClick }: Button) {
    return (
        <button
            onClick={onClick}
            className={` font-medium w-full px-36 py-4 rounded-[10px] ${del ? ' bg-BLACK text-PINK' : 'bg-PINK text-BGDARK_700'} `}
        >
            {title}
        </button>
    )
}