import { Link } from 'react-router-dom'
import { IPost } from '../PostList/PostList'

export default function PostItem({ post }: {post: IPost}) {
    const handlePostText = (text: string) => {
        return text.length > 100 ? `${text.slice(0, 100)}...` : text
    }
    return (
        <div className='w-1/2 flex flex-col items-center border p-5'>
            <div className='flex justify-end mb-3'>
                <p>Номер поста: {post.id}</p>
            </div>
            <div className='gap-2.5'>
                <p className='capitalize font-semibold text-2xl mb-2'>{post.title}</p>
                <p>{handlePostText(post.body)}</p>
            </div>
            <Link className='px-4 py-1.5 border rounded-lg mt-4' to={`/post/${post.id}`}>View full</Link>
        </div>
    )
}
