import Navigation from "./NavTabs";

const Header = () => {
  return (
    <>
      <div className="container-fluid text-center w-auto bg-myWhite">
        <div className="row">
          <div className="col-2 p-5 w-auto">
            <h1>Tristan Melillo</h1>
          </div>
          <div className="col p-5">
            <Navigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;