import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card my-2 w-75 py-3 bg-light">
          <div className="card-body">
            <h1 className="card-title display-3">A Warm Welcome!</h1>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              minima veritatis laudantium quibusdam laborum officia unde
              similique, nulla assumenda provident magni possimus! Illum
              eligendi laboriosam porro recusandae numquam non dolorum!
            </p>
            <a href="#" className="btn btn-primary">
              Call to action
            </a>
          </div>
        </div>
      </div>
    );
  }
}
