'use client'
import { useState } from "react"
import Accordion3a from "./accordion3a";

export default function Accordion3() {
const[index, setIndex]= useState(false);

const data=[
  {
    id: 1,
    question: "accordion 1",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur distinctio nemo quas neque. Eligendi earum voluptatibus impedit magni deleniti unde esse ullam. Numquam odio debitis enim, laboriosam provident ratione?" 
  },
  {
    id: 2,
    question: "accordion 2",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ducimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iste sint corrupti esse ducimus eius laboriosam ab, ea sapiente quos consequuntur aliquam non delectus repudiandae deserunt aut dolorem quibusdam in ipsam unde fugiat. Nesciunt culpa quod harum soluta itaque necessitatibus facilis odio eveniet, minus laborum, id illo saepe ratione nostrum?" 
  },
  {
    id: 3,
    question: "accordion 3",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ducimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates saepe odit, quod quas voluptatem minima optio. Alias sed libero, ad commodi error iure magni eaque nulla voluptatibus assumenda aperiam et deserunt voluptas odit magnam voluptate a! Fugit possimus, autem nesciunt consectetur voluptatibus commodi voluptas nihil culpa eligendi cupiditate nulla numquam animi dolores molestias ab eos quae veritatis magni non, et corrupti dolorum recusandae similique? Quibusdam consectetur molestias numquam sunt asperiores?" 
  },
]

return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:m-x-60 p-10 rounded-xl h-auto py-20 bg-gray-50">
      {/* map data */}
      {data.map((data)=>{
        return(
          <Accordion3a 
            title={data.question}
            id={data.id}
            children={data.answer}
            index={index}
            setIndex={setIndex}
          />
        )
      })}

    </div>
  )
}
