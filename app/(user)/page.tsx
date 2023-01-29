import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSupense from '@/components/PreviewSupense';
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';

export const query = groq`
  *[_type=='post'] {
    ...,
    author ->,
    categories[] ->,
  } | order(_createdAt desc)
`;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSupense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSupense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
