import React from "react";
import "./styles.css";

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <>
        <div>
          <img
            className="small"
            src="/Anj.png"
            onClick={this.handleShowDialog}
            alt="no image"
          />
          {this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}
            >
              <img
                className="image"
                src="/Anj.png"
                onClick={this.handleShowDialog}
                alt="no image"
              />
            </dialog>
          )}
        </div>

        <div>
          <button onClick={this.handleShowDialog}>sample.png</button>
          {this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}
            >
              <img
                className="image"
                src="/Anj.png"
                onClick={this.handleShowDialog}
                alt="no image"
              />
            </dialog>
          )}
        </div>

        <div>
          <button onClick={this.handleShowDialog}>sample.png</button>
          {this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}
            >
              <span
                // className="image"
                // src="/Anj.png"
                onClick={this.handleShowDialog}
                // alt="no image"
              />
            </dialog>
          )}
        </div>
      </>
    );
  }
}
