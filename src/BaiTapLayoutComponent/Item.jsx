import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="text-center d-flex justify-content-center">
        <div className="row w-75 my-2">
          <div className="col pl-0">
            <div className="card">
              <div className="bg-secondary" style={{ height: 150 }}>
                <p className="py-5 my-3">550x325</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p classname="card-text" style={{ height: 140 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  dignissimos aspernatur nostrum.
                </p>

                <a href="#" className="btn btn-primary">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="bg-secondary" style={{ height: 150 }}>
                <p className="py-5 my-3">550x325</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p classname="card-text" style={{ height: 140 }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas sapiente, minima beatae repellat voluptatem
                  blanditiis delectus qui eveniet!
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="bg-secondary" style={{ height: 150 }}>
                <p className="py-5 my-3">550x325</p>
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p classname="card-text" style={{ height: 140 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati at culpa praesentium?
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
          <div className="col pr-0">
            <div className="card">
              <div className="bg-secondary" style={{ height: 150 }}>
                <p className="py-5 my-3">550x325</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p classname="card-text" style={{ height: 140 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis excepturi voluptate omnis amet aliquam voluptatem
                  vero! Et, sunt.
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
