export default function DetailProduct( props:{params: {slug: string }} ) {
  const {params} = props
  return (
    <div>Detail Product {params.slug} </div>
  )
}