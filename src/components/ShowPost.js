import moment from 'moment';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';

const ShowPost = () => {
  const { rID } = useParams();
  const [post, setPost] = useState([{ id: 0, content: 'загрузка...', created: 1667557767471 }]);

  fetch(`http://localhost:7777/posts/${rID}`)
    .then(response => response.json())
    .then(response => setPost(response))

  const onDel = (i) => {
    fetch(`http://localhost:7777/posts/${i}/`, {
      method: 'DELETE',
      headers: {
      },
    });
  }

  return (
    <div>
      <div>
        <div>
          <img alt='' style={{ borderRadius: '50%' }} src='https://via.placeholder.com/75/ff9800/000000' />
          <div className='col-1'></div>
          <h4>Пользователь</h4>
        </div>

        <div className="date">
          {moment(post.created).format('HH:mm DD.MM.YYYY')}
        </div>
      </div>
      <hr />
      <div>
        <blockquote>
          <p>{post[0].content}</p>
        </blockquote>
      </div>
      <hr />
      <div>
        <NavLink to={{
          pathname: `/edit/${rID}`,
          state: { post }
        }}>
          <button>Изменить</button>
        </NavLink>

        <NavLink to='/'>
          <button onClick={() => onDel(post[0].id)}>Удалить
          </button>
        </NavLink>
      </div>
    </div>
  )
}
export default ShowPost;