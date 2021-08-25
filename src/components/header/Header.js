import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="header-title-large">Surreal-Blogging</span>
      </div>
      <img
        className="header-image"
        src="https://images.wallpaperscraft.com/image/beach_tropics_sea_sand_palm_trees_sunset_84729_1920x1200.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
