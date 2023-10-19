import { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../Api/api';
import PostItem from '../PostItem/PostItem';


export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostList() {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetPostsQuery(page);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data]);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching && page < 10) {
        setPage((p) => p + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  if (isFetching && page === 1) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className='flex flex-col items-center gap-5 list-none'>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
