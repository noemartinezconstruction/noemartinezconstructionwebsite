import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Card from "./Card";
import { withRouter } from "react-router-dom";
import { changeLanguage } from "../redux/actions/languagesActions";

class IndexPage extends React.Component {
  changeLanguage = () => {
    const { language, changeLang } = this.props;
    if (language === "english") {
      return changeLang("spanish");
    }

    if (language === "spanish") {
      return changeLang("english");
    }
  };
  render() {
    const { language } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Cards">
              <h2>Noe Martinez Construction</h2>
              <h4 className="phone-number"> (214)-930-1372</h4>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <button
                  className="button-language"
                  onClick={this.changeLanguage}
                >
                  {language === "english"
                    ? "Preciona aqui para Español"
                    : "Click here for English"}
                </button>
              </div>
              <div className="CardGroup">
                <Card
                  title="Bathrooms"
                  titulo="Baños"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/bathrooms.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="Chirock"
                  titulo="Chirock"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/chirock.jpeg"
                />
                <Card
                  title="Clean gutters"
                  titulo="Limpiar Canalones"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/cleangutters.jpeg"
                />
                <Card
                  title="Concrete Projects"
                  titulo="Proyectos de Concreto"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/concreteprojects.jpeg"
                />
                <Card
                  title="Fence Repairs"
                  titulo="Reparacion de cerca"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/fencerepairs.jpeg"
                  style={{ width: "20rem", height: "17rem" }}
                />
                <Card
                  title="Fence Installation"
                  titulo="Installacion de cerca"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/fencesfixed.jpeg"
                />
                <Card
                  title="Flooring"
                  titulo="Installacion de piso"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/flooring.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="Free Estimates"
                  titulo="Estimados gratis"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/freeestimates.png"
                />
                <Card
                  title="Home Painting"
                  titulo="Trabajos de pintura"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/homepainting.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="New Fence"
                  titulo="Nueva Cerca"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/newfence.jpeg"
                />
                <Card
                  title="Patio and Deck"
                  titulo="Patio y plataforma"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/patioandeck.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="Renovation"
                  titulo="Renovacion"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/renovation.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="Retaining Wall"
                  titulo="Muro de contención"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/retainingwall.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="Sod Installation"
                  titulo="Instalación de césped"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/sodinstallation.jpeg"
                />
                <Card
                  title="Stone Retaining Wall"
                  titulo="Muro de piedra"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/stoneretainingwall.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="Stump Removal"
                  titulo="Eliminacion de muñon"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/stumpremove.jpeg"
                  style={{ width: "19rem", height: "15rem" }}
                />
                <Card
                  title="Texture"
                  titulo="Textura"
                  language={language}
                  text="Click to schedule service"
                  texto="Preciona aqui para un estimado"
                  image="/images/textura.png"
                  style={{ width: "19rem", height: "15rem" }}
                />
              </div>
            </div>
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

function mapDispatchToProps(dispatch) {
  return {
    changeLang: bindActionCreators(changeLanguage, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IndexPage)
);
