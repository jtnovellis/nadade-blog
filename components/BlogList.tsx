import Post from './Post';

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  const renderedPosts = posts.map((post) => (
    <Post key={post._id} post={post} />
  ));
  return (
    <section>
      <hr className='border-[#F7AB0A] mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
        {renderedPosts}
      </div>
    </section>
  );
}
