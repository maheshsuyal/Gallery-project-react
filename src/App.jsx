import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/Card"

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  async function  getData(){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)

  
    setUserData(response.data)
    

  }


  useEffect(function (){
        getData()
  },[index])

   let printUserData = <h3 className="text-gray-400 text-2xl font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading.....</h3>

   if(userData.length>0){
      printUserData = userData.map(function(elem,idx){
        return <div key={idx}  className="h-56 w-44 shrink-0 overflow-hidden rounded-xl"> 
            <Card elem = {elem}/>
        </div>
      })
   }
  return (

   
    <div className='h-screen bg-black text-amber-50 p-6 overflow-auto'>

    

      <div className=" h-[90%] flex flex-wrap gap-4 p-2">
      {printUserData}
      </div>

      <div className="flex justify-center items-center gap-6 mt-2">
        <button className="bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-3 font-bold text-black" onClick={()=>{
            if(index>1){
              setIndex(index-1)
            }
        }}>Prev</button>

        <h4 className="font-semibold">Page {index}</h4>
        <button className="bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-3 font-bold text-black" onClick={()=>{
          setIndex(index+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App