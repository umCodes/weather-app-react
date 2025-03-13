import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";



function Header({setQuery}){
    const inputRef = useRef(null);
    const [input, setInput] = useState('')

    const handleEnter = e => {
        if(e.key === 'Enter')
            setQuery(input)
    }

    return(
        <header className="flex justify-center items-center text-black ">
            <div className="flex rounded-[4px] overflow-hidden border border-gray-700">
            <input 
                ref={inputRef}
                className=" text-black w-[320px] p-2 bg-white "
                type="text"
                value={input}
                onKeyPress={handleEnter}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter Region Name"
            />
            <button 
                className="py-2 px-4 transition duration-500 cursor-pointer bg-gray-700 text-white hover:bg-gray-800"
                onClick={() => setQuery(input)}><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </header>
    )
}


export default Header;