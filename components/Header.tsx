import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between font-bold px-10 py-5'>
      <div className='flex items-center gap-2'>
        <Link href='/'>
          <Image
            src='https://links.papareact.com/1m8'
            alt='logo'
            className='rounded-full'
            width={50}
            height={50}
          />
        </Link>
        <h1>Doc. Infantil | Nayade Novellis</h1>
      </div>
      <div>
        <Link
          href='/'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'
        >
          Suscribete al Newsletter
        </Link>
      </div>
    </header>
  );
}
