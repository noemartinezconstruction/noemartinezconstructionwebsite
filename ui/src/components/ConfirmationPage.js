import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Success from "./success";
import "./ConfirmationPage.css";

class ConfirmationPage extends React.Component {
  routeToMainMenu = () => {
    this.props.history.push("/");
  };
  render() {
    const { language } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>
              {language === "english"
                ? "Your service has been ordered! We will call you to schedule an appointment with you to install your service!"
                : "Tu servicio a sido procesado te llamaremos en una hora"}
            </h2>

            <div className="goback-main-menu-flex-box">
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.routeToMainMenu}
              >
                {language === "english"
                  ? "Click to go back to main menu"
                  : "Preciona aqui para regresar al menu principal"}
              </button>
            </div>
            <Success />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.languagesReducer.language,
  };
}

export default withRouter(connect(mapStateToProps, null)(ConfirmationPage));
