import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders, deleteOrder } from "../redux/actions/ordersActions";
import "./Order.css";

class Orders extends React.Component {
  state = {
    password: "",
    email: "",
    loggedIn: false,
  };
  componentDidMount() {
    this.props.getOrdrs();
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  logIn = () => {
    const { email, password } = this.state;

    if (
      email === "noemartinezconstruction@gmail.com" &&
      password === "password4321"
    ) {
      this.setState({
        loggedIn: true,
      });
    }
  };

  render() {
    const { orders } = this.props;
    const { password, email, loggedIn } = this.state;

    return (
      <div className="container">
        {loggedIn === true ? (
          <div className="row">
            <div className="col">
              <h2>Service Orders</h2>
              {orders.length > 0 ? (
                <table className="table table-color">
                  <thead>
                    <tr>
                      <th scope="col">Phone Number</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Email</th>
                      <th scope="col">Time</th>
                      <th scope="col">Order Type</th>
                      <th scope="col">Delete Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length > 0
                      ? orders.map((order, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{order.phoneNumber}</th>
                              <td>{order.name}</td>
                              <td>{order.lastName}</td>
                              <td>{order.address}</td>
                              <td>{order.email}</td>
                              <td>{order.time}</td>
                              <td>{order.type}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.props.deleteOrdr(order._id)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              ) : (
                <h2 className="loading-order-header">...Loading Orders</h2>
              )}
            </div>
          </div>
        ) : (
          <div
            className="row"
            style={{ justifyContent: "center", marginTop: "10rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <input
                onChange={this.setValue}
                type="text"
                name="email"
                value={email}
                placeholder="Enter your email"
                style={{
                  marginRight: "1rem",
                  borderRadius: "10px",
                  width: "22rem",
                }}
              />
              <input
                onChange={this.setValue}
                type="text"
                name="password"
                value={password}
                placeholder="Enter your password"
                style={{ borderRadius: "10px", width: "22rem" }}
              />
              <button
                className="btn btn-danger"
                type="button"
                style={{ width: "22rem" }}
                onClick={this.logIn}
              >
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.ordersReducer.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrdrs: bindActionCreators(getOrders, dispatch),
    deleteOrdr: bindActionCreators(deleteOrder, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));
