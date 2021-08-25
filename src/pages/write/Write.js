import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../components/Context/Context';
import './Write.css';

function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const submitHandler = async e => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = `${Date.now()}${file.name}`;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post(
          'https://surreal-blogging.herokuapp.com/api/upload',
          data
        );
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        'https://surreal-blogging.herokuapp.com/api/posts',
        newPost
      );
      window.location.replace(`/single/${res.data.data.post._id}`);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="write-image" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="write-form" onSubmit={submitHandler}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={e => setFile(e.target.files[0])}
          />
          <input
            className="write-input"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-text"
            placeholder="Tell your surreal story..."
            rows="10"
            cols="50"
            type="text"
            onChange={e => setDesc(e.target.value)}
          />

          <button type="submit" className="write-submit">
            Publish my story
          </button>
        </div>
      </form>
    </div>
  );
}

export default Write;
