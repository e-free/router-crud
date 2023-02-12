import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment';



function EditPost() {
  const { postId } = useParams();
  const [post, setPost] = useState({ id: 1, content: 'загрузка...', created: 1667557767471 });

  useEffect(() => {
    fetch(`http://localhost:7777/posts/${postId}`)
      .then(response => response.json())
      .then(response => setPost(response[0]))
  }, [postId])


  const onChange = (event) => {
    let text = event.target.value
    setPost(prevForm => ({ ...prevForm, content: text }))
  }

  const onSubmit = () => {
    const data = async () => {
      try {
        const response = await fetch('http://localhost:7777/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ "id": post.id, "content": post.content })
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
      } catch (e) {
        console.error(e);
      }
    }
    data();

  }

  return (
    <form>
      <div >
        <div>
          <h1>Редактировать</h1>
          <NavLink to='/'>
            Отмена
          </NavLink>
        </div>

        <div>
          <div>
            <img alt='Пользователь' style={{ borderRadius: '50%' }} src='https://via.placeholder.com/75/ff9800/000000' />           
            <h4>Пользователь</h4>
          </div>
          <div className="date">
            {moment(post.created).format('HH:mm DD.MM.YYYY')}
          </div>
        </div>
      </div>

      <div>
        <input type="text"  placeholder='Введите текст' value={post.content} onChange={(event) => onChange(event)} />
      </div>
      <div>
        <NavLink to='/' onClick={(event) => onSubmit(event)}  >
          Сохранить
        </NavLink>
      </div>
    </form>
  )
}

export default EditPost;