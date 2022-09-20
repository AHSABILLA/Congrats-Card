const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading1">Congratulations</h1>
    <div className="card-container">
      <div className="profile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
        <h1 className="name">Kiran V</h1>
        <p className="para">
          Vishnu institute of Computer Education and Technology Bhimavaram
        </p>
      </div>
      <div className="watch">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
