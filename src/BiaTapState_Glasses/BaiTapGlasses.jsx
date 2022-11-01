import React, { Component } from "react";

export default class BaiTapGlasses extends Component {


  displayGlasses = () => {
    const data = require('./dataGlasses.json');

    return data.map((data) =>  <div className="col d-flex justify-content-center"></div>);

  }





  render() {

    


    return (
      <div className="container-fluid bg-dark px-0">
        <div
          style={{
            backgroundImage: "linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url('img/glassesImage/background.jpg')",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p
            className="py-4 text-center text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
          >
            TRY GLASSES APP ONLINE
          </p>

          <div className="text-center d-flex justify-content-center my-5 py-2">
            <div className="row w-50">
              <div className="col d-flex justify-content-center">
                <div
                  style={{
                    backgroundImage: "url('img/glassesImage/model.jpg')",
                    height: "13rem",
                    width: "60%",
                    
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <img src={data alt="" /> */}
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div
                  style={{
                    backgroundImage: "url('img/glassesImage/model.jpg')",
                    height: "13rem",
                    width: "60%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="text-center d-flex justify-content-center my-5 py-4">
            <div className="row w-50 py-4 bg-primary">
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "7vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>
              <div className="col-2 d-flex justify-content-center px-2 py-2">
              <img style={{height: "6vh", width: "100%"}} src="img/glassesImage/v1.png" alt="..." />
              </div>



            </div>
          </div>
        </div>
      </div>
    );
  }
}
