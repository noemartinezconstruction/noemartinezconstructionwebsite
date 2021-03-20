import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addOrderType } from "../redux/actions/ordersActions";
import "./Card.css";

class Card extends React.Component {
  routeToScheduler = () => {
    const { addOrdType, image, title, history, language } = this.props;

    history.push("/scheduler");
    addOrdType({
      image,
      title,
      text:
        language === "english"
          ? "Click this image once you are done entering your first name, last name, phone number, address, and email to order your service."
          : "Preciona esta imagen cuando acabes de darnos tus datos para confirmar tu cita.",
    });
  };

  render() {
    const { image, title, text, texto, style, titulo, language } = this.props;
    return (
      <div className="Card" onClick={this.routeToScheduler}>
        <img
          src={image}
          alt={language === "english" ? title : titulo}
          style={style}
        />
        <h3>{language === "english" ? title : titulo}</h3>
        <h3>{language === "english" ? text : texto}</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addOrdType: (order) => dispatch(addOrderType(order)),
  };
}
export default withRouter(connect(null, mapDispatchToProps)(Card));
