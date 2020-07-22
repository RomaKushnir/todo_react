import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  onOpen() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.onOpen.bind(this)} className="btn-modal-open">
          open
        </button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <p className="modal-text">I am a modal</p>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
