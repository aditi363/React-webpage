import "./banner.css";

export default function Banner() {
  return (
    <header className="main-header gradient-bg">
        <div className="container pt-3">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5">
                <h2>Welcome to my first React-webpage</h2>
                <p>My name is Aditi Saini, I am from Una, Himachal Pradesh, india. Currently I am residing in Collingwood, Ontario. I am at intermediate level in Photoshop editing, and do have knowlege about c, c++, java, html, css, bootstrap </p>
                <button type = "button" className = "btn btn-outline-warning">
                    Download CV
                </button>
                </div>
                
                <div className="col-md-5"><img src={require('./../../assets/images/Remove background.png')} width="400" height="400" alt="Header image"></img></div>
            </div>
        </div>
    </header>
  );
}
