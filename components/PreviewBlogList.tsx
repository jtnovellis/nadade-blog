'use client';

import { usePreview } from '@/lib/sanity.preview';
import BlogList from './BlogList';

type PreviewBlogListProps = {
  query: string;
};

export default function PreviewBlogList({ query }: PreviewBlogListProps) {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
}
