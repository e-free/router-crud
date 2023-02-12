import PostItem from './PostItem';

function PostList({ posts }) {
  return (
    <div>
      <h1>{posts.length > 0 ? 'Записи:' : 'Нет записей'}</h1>
      {posts.map(item => <PostItem item={item} key={item.id} />)}
    </div>
  )
}
export default PostList;