import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { processOrder } from "../redux/actions/ordersActions";
import "./Scheduler.css";

class Scheduler extends React.Component {
  state = {
    address: "",
    email: "",
    name: "",
    lastName: "",
    error:
      "You need to enter your first name, last name, phone number, address and email to order a service.",
    errorSpanish:
      "Necesitas darnos tu nombre, apellido, telefono, domicilio, y email para hacer una cita.",
    formError: false,
    phoneNumber: "",
    processing: false,
  };
  routeToRoot = () => {
    const { history } = this.props;
    history.push("/");
  };
  confirmOrder = () => {
    const { createOrder } = this.props;
    const { title } = this.props.orderType;
    const date = new Date();
    const { name, lastName, phoneNumber, email, address } = this.state;
    if (
      name.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      return this.setState({
        formError: true,
      });
    }
    createOrder({
      name,
      lastName,
      time: date.toString(),
      type: title,
      phoneNumber,
      email,
      address,
    });
    this.setState({ processing: true });
  };

  setValue = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      formError: false,
    });
  };
  render() {
    const { text, image, title } = this.props.orderType;
    const { language } = this.props;
    const {
      address,
      email,
      name,
      lastName,
      error,
      formError,
      phoneNumber,
      processing,
      errorSpanish,
    } = this.state;

    return (
      <React.Fragment>
        {processing ? (
          <div className="container">
            <h2 className="processing-request-header">
              {language === "english"
                ? "...Processing Request"
                : "...Procesando tu informacion"}
            </h2>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>
                  {language === "english"
                    ? "Order your service"
                    : "Ordena tu servicio"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col different-service-flex-box">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={this.routeToRoot}
                >
                  {language === "english"
                    ? "Click to order a different service"
                    : "Preciona aqui para ordenar un servicio diferente"}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="Cards card-flex-box">
                  <div className="Card card-size" onClick={this.confirmOrder}>
                    <img src={image} alt={title} className="card-size-image" />
                    <h3>{title}</h3>
                    <h3 className="card-size-text">{text}</h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="enter-details-flexbox">
                  <h3 className="enter-details-header">
                    {language === "english"
                      ? "Enter your first name, last name, phone number, address, and email"
                      : "Entra tu nombre, apellido, numero de telefono, domicilio, y email"}
                  </h3>
                  <input
                    type="text"
                    name="name"
                    placeholder={
                      language === "english"
                        ? "Enter your name"
                        : "Entra nu nombre"
                    }
                    className="input-text"
                    onChange={this.setValue}
                    value={name}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={
                      language === "english"
                        ? "Enter your last name"
                        : "Entra tu apellido"
                    }
                    className="input-text"
                    onChange={this.setValue}
                    value={lastName}
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder={
                      language === "english"
                        ? "Enter your phone number"
                        : "Entra tu telefono"
                    }
                    className="input-text"
                    onChange={this.setValue}
                    value={phoneNumber}
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder={
                      language === "english"
                        ? "Enter your address"
                        : "Entra tu domicilio"
                    }
                    className="input-text"
                    onChange={this.setValue}
                    value={address}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder={
                      language === "english"
                        ? "Enter your email"
                        : "Entra tu email"
                    }
                    className="input-text"
                    onChange={this.setValue}
                    value={email}
                  />
                  {formError ? (
                    <p className="error-text">
                      {language === "english" ? error : errorSpanish}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderType: state.ordersReducer.orderType,
    language: state.languagesReducer.language,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createOrder: bindActionCreators(processOrder, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Scheduler)
);
