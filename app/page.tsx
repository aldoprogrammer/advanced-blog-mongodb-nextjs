import CategoriesList from '@/components/CategoriesList'
import Post from '@/components/Post'
import Image from 'next/image'
import { postsData } from '@/data'

export default function Home() {
  return (
    <>
    <CategoriesList />
    {postsData && postsData.length > 0 ? 
    ( postsData.map((post) => (
      <Post 
        key={post.id} 
        id={post.id} 
        author={post.author}
        authorEmail={'test@gmail.com'} 
        title={post.title}
        date={post.datepublished}
        thumbnail={post.thumbnail} 
        category={post.category}
        content={post.content} 
        links={post.links || []} />
    ))
    ) : ( <div>
      No posts to display</div>)}
    </>
  )
}
