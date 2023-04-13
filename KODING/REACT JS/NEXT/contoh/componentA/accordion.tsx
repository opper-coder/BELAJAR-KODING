// accordion tailwind tanpa javascript

export default function Accordion() {
  return (
    <>
    <div className="p-10 bg-gray-200 text-gray-700">

  <div className="relative overflow-hidden w-[400px]">
    <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"/>
    <div className="bg-blue-500 h-12 w-full pl-5 flex items-center">
      <h1 className="text-lg font-semibold text-white">
            halo apa kabar
      </h1>  
    </div>

{/* arrow ----- */}
<div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
  v
</div>

{/* content ----- */}
    <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
      <div className="p-4">
        <p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatem possimus sequi deserunt vitae natus consequatur eveniet eius placeat voluptatum. Consectetur laborum maiores accusantium reiciendis molestias voluptatum error nulla sapiente.
        </p>
      </div>
    </div>
  </div>

    </div>
    </>
  )
}

