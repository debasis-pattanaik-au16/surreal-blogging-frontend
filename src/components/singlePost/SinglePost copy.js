import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="single-post-wrapper">
        <img
          className="single-post-image"
          src="https://cutewallpaper.org/21/wallpapers-1280-800/Download-1280x800-Firewatch,-Forest,-Landscape,-In-game-.jpg"
          alt=""
        />
        <h1 className="single-post-title">
          Lorem Ipsum
          <div className="single-post-edit">
            <i className="single-post-icon fas fa-pen-fancy"></i>
            <i className="single-post-icon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-page-info">
          <span className="single-post-author">
            Author : <strong>Nihar & Debasis</strong>
          </span>
          <span className="single-post-date">100 years ago</span>
        </div>
        <p className = "single-page-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
