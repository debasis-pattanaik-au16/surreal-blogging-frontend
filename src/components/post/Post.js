import './Post.css';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const PF = 'https://surreal-blogging.herokuapp.com/images/';
  console.log(post);
  return (
    <div className="post">
      {post.photo && (
        <img className="post-image" src={PF + post.photo} alt="" />
      )}
      <div className="post-info">
        <div className="post-categories">
          {post.categories.map(cat => {
            return (
              <span key={cat.id} className="post-category">
                {cat.name}
              </span>
            );
          })}
        </div>
        <Link to={`/single/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-desc">{post.desc}</p>
    </div>
  );
}

export default Post;
