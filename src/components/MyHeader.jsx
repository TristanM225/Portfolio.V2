import Navigation from "./NavTabs";

const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-2 p-5 w-auto header">
            <h1>Tristan Melillo</h1>
          </div>
          <div className="col p-5 header">
            <Navigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;