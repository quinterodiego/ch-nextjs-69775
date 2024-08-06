import { Counter } from './components/ui/Counter.js';
import Image from 'next/image.js';

export const metadata = {
  title: 'Diego Next App',
  description: 'Curso de Next JS en Coderhouse'
}

export default function Home() {
  return (
    <>
      <main className="container m-auto">
        <h1 className={'text-4xl text-blue-600 text-bold my-4'}>Next JS</h1>
        <hr />
        <p className={'text-base mt-4'}>Bienvenidos a Coderhouse</p>
        <Counter />
        <Image className='mt-5' src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} width={300} height={300} />
        <Image className='mt-5' src={'/next.svg'} width={300} height={300} />
      </main>
    </>
  );
}
