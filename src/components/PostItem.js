import moment from 'moment';
import { NavLink } from 'react-router-dom';

const PostItem = ({ item }) => {
  return (
    <div>
      <div>

        <div>
          <img alt='Пользователь' style={{ borderRadius: '50%' }} src='https://via.placeholder.com/75/ff9800/000000' />

          <h4>Пользователь</h4>
        </div>

        <div>
          {moment(item.created).format('HH:mm DD.MM.YYYY')}
        </div>
      </div>
      <hr />
      <div>
        <blockquote>
          <p>{item.content}</p>
        </blockquote>
      </div>
      <hr />
      <div>
        <NavLink
          to={{
            pathname: `/posts/${item.id}`,
            state: { data: item }
          }}>Перейти к посту</NavLink><br/><br/><br/><br/>
      </div>
    </div>
  )
}
export default PostItem;