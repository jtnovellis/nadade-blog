import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ClientSideRoute from './ClientSideRoute';

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const image = urlFor(post.mainImage).url();
  return (
    <ClientSideRoute route={`/posts/${post.slug.current}`}>
      <div className='flex flex-col group cursor-pointer'>
        <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
          <Image
            src={image}
            alt={post.title}
            fill
            className='object-cover object-left lg:object-center'
          />
          <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
            <div>
              <p className='font-bold'>{post.title}</p>
              <p>
                {new Date(post._createdAt).toLocaleString('es-CO', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-y-2 md: gap-x-2 items-center'>
              {post.categories.map((category) => (
                <div
                  className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'
                  key={category._id}
                >
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-5 flex-1'>
          <p className='underline text-lg font-bold'>{post.title}</p>
          <p className='line-clamp-2 text-gray-500'>{post.description}</p>
        </div>
        <Link
          href='/'
          className='flex mt-5 font-bold items-center group-hover:underline'
        >
          Read post
          <ArrowUpRightIcon className='ml-2 h-4 w-4' />
        </Link>
      </div>
    </ClientSideRoute>
  );
}
