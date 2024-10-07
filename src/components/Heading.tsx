
interface propsTypes {
    title:string;
}

const Heading: React.FC<propsTypes> =({title}) =>{
  return (
    <div>   <div className='text-center text-4xl pb-8'></div>
<p className='border-b-4 inline-block pb-2'>{title}</p></div>
  )
}
