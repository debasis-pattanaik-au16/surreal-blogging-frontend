import axios from 'axios';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../Context/Context';
import './SinglePost.css';

function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const PF = 'https://surreal-blogging.herokuapp.com/images';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `https://surreal-blogging.herokuapp.com/api/posts/${path}`
      );
      setPost(res.data.data.post);
      setTitle(res.data.data.title);
      setDesc(res.data.data.desc);
    };
    getPost();
  }, [path]);

  const deleteHandler = async () => {
    try {
      await axios.delete(
        `https://surreal-blogging.herokuapp.com/api/posts/${post._id}`,
        {
          data: { username: user.username },
        }
      );
      window.location.replace(`/`);
    } catch (err) {}
  };

  const updateHandler = async () => {
    try {
      await axios.put(
        `https://surreal-blogging.herokuapp.com/api/posts/${post._id}`,
        {
          username: user.username,
          title,
          desc,
        }
      );
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="single-post-wrapper">
        {post.photo && (
          <img className="single-post-image" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            className="single-post-title-input"
            onChange={e => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
        ) : (
          <h1 className="single-post-title">
            {title}
            {post.username === user?.username && (
              <div className="single-post-edit">
                <i
                  className="single-post-icon fas fa-pen-fancy"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="single-post-icon fas fa-trash-alt"
                  onClick={deleteHandler}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="single-page-info">
          <span className="single-post-author">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <strong>{post.username}</strong>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="single-page-desc-input"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        ) : (
          <p className="single-page-desc">{desc}</p>
        )}
        {updateMode && (
          <button className="single-post-button" onClick={updateHandler}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
