import {HiArrowCircleDown, HiX} from "react-icons/hi"

type Acc = {
  title: string, 
  children: string, 
  id: number, 
  index: any, 
  setIndex: any 
}

export default function Accordion3a({title, children, id, index, setIndex}: Acc) {
  const handleSetIndex = () => index !== id && setIndex(id);
  return (
    <>
      <div 
        onClick={() => handleSetIndex(id)} 
        className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between items-center p-2 mt-2 rounded bg-white hover:bg-pink-500 hover:shadow-lg focus:bg-pink-500">
          <div className="flex group cursor-pointer"> 
            <div className="text-pink-600 font-semibold pl-10 group-hover:text-white">
              {title}
            </div>
          </div>
          <div className="flex justify-center items-center pr-10">
            {index !== id ?(
              <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-pink-500"/>
              ) : (
              <HiX className="w-6 h-6 group-hover:text-white text-pink-500"/>
            )}
          </div> 
      </div>
      {index == id &&(
        <div className="bg-pink-100 pl-10 font-semibold text-pink-500 w-3/4 h-auto rounded-md border-l-4 ">
          {children}
        </div>
      )}
    </>
  )
}

