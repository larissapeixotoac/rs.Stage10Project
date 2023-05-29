import {FiMail, FiLock, FiUser } from "react-icons/fi"

function Icon({placeholder}: {placeholder: string}) {
    return (
        <div className=" text-GRAY_100">
            {placeholder === 'E-mail' &&
                <div>
                    <FiMail className="w-5 h-5" />
                </div>
            }
            {placeholder === 'Senha' &&
                <div>
                    <FiLock className="w-5 h-5" />
                </div>
            }
            { placeholder === 'Senha atual' &&
                <div>
                    <FiLock className="w-5 h-5" />
                </div>
            }
            { placeholder === 'Nova senha' &&
                <div>
                    <FiLock className="w-5 h-5" />
                </div>
            }
            {placeholder === 'Nome' &&
                <div>
                    <FiUser className="w-5 h-5" />
                </div>
            }
        </div>
    )
}

interface InputInfo {
    type: string; 
    placeholder: string; 
    value: number | string; 
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export function Input({type, placeholder, value, onChange}: InputInfo) {

    return (
        <div
            className=" bg-BGDARK_800 rounded-[10px] px-4 py-4 flex items-center gap-4"
        >
            <Icon 
                placeholder={placeholder}
            />

            <input
                
                type={type}  
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className=" bg-transparent placeholder:text-GRAY_100 placeholder:font-ff_secondary w-full"
            />
        </div>
    )
}