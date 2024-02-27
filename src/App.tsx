import { useState } from "react";
import "./App.css";
import ImageHeader from "./components/ImageHeader";
import Input from "./components/Input";


type items={

  id:string;
  title:string
}

function App() {
  const [todo, setTodo] = useState<items[]>([]);
  const [inputValue, setValue] = useState<string>("");

  

  // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value)
  // };

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault()
    setTodo((prev:items[]) => [...prev, {title:inputValue,id:Date.now().toString()}]);
    setValue("");
  };

  const handleDelete=(id:string)=>{
    
    setTodo((prev:items[])=>prev.filter((data)=>data.id!=id))
  }

  return (
    <>
      <div className="has-[100vh] flex flex-col justify-center items-center">
        <ImageHeader />
        <div className="w-[350px]">
          <form className="mb-5">
            <Input setValue={setValue}  inputValue={inputValue} />
            <button onClick={handleSubmit} className="bg-gray-700 w-full text-white p-2">Add</button>
          </form>

          <div className="h-52 overflow-y-auto">
            {todo.map((item:items) => (
              <div key={item.id} className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2">
                <p className="text-white" >{item.title}</p>
                <button onClick={()=>handleDelete(item.id)} className="text-white mr-2">delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
