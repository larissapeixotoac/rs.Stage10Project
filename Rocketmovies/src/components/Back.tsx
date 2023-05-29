import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

export function Back() {
    const navigate = useNavigate()

    function handleBack() {        
        navigate(-1)
    }
    
    return (        
        <button 
            onClick={handleBack}
            className="flex text-PINK items-center mb-6 gap-2"
        >
            <FiArrowLeft   />
            Voltar
        </button>    
)
}