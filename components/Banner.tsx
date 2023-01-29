export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>{'Creando y Jugando'}</h1>
        <h2 className='mt-5 md:mt-0'>
          {'Bienvenidos a '}
          <span className='underline decoration-4 decoration-[#F7AB0A]'>
            cada lector
          </span>
          {' al maravilloso mundo de la educación en la primera infancia'}
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        {
          'Desarrollo cognitivo | Desarrollo emocional/social | Desarrollo del habla/lenguaje | Habilidades motoras'
        }
      </p>
    </div>
  );
}
