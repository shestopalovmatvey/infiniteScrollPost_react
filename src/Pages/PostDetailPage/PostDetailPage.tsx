import { Link, useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../Api/api';

export default function PostDetailPage() {
    const { id } = useParams();
    const { data: post, isFetching } = useGetPostQuery(id);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex-1 h-full flex justify-center items-center'>
            <div className='w-1/2 flex flex-col items-center border p-5'>
                <div className='flex justify-end mb-3'>
                    <p>Номер поста: {post.id}</p>
                </div>
                <div className='gap-2.5'>
                    <p className='capitalize font-semibold text-2xl mb-2'>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                <Link className='px-4 py-1.5 border rounded-lg mt-4' to={`/`}>Back to home</Link>
            </div>
        </div>
    )
}
