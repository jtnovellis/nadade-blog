import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center p-5'>
        <Link href='/' className='text-[#F7AB0A] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A]' />
          Volver al sitio web
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
