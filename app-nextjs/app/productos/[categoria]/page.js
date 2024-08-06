export async function generateMetadata ({ params }, {parent}) {
  return {
    title: `Next App - ${params.categoria}`
  }
}  

const Productos = ({ params }) => {

  return (
    <div>
      Estas viendo: {params.categoria}
    </div>
  )
}

export default Productos