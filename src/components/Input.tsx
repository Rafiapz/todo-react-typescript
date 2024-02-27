import React from 'react'

type Input={

    setValue:React.Dispatch<React.SetStateAction<string>>,
    inputValue:string    
}

function Input({setValue,inputValue}:Input) {
  return (
    <>
    <input onChange={(e)=>setValue(e.target.value)} value={inputValue} className="w-full p-2 rounded-sm mb-2" type="text" />
    </>
  )
}

export default Input