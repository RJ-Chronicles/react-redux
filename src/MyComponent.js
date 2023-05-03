import React from "react";
import { connect } from "react-redux";

class ComponentThree extends React.Component {
  handleOnChange(e) {
    const textValue = e.target.value;
    this.props.setText(textValue, "someText2");
  }
  render() {
    let state = this.props;
    console.log(this.props.filterType);
    console.log(state);
    return (
      <div className="ComponentThree">
        <div
          style={{
            borde: "2px solid gray",
            padding: "20px",
            backgroundColor: "blue",
            color: "white",
            margin: "10px"
          }}
        >
          {this.props.filterText}
        </div>

        <input type="text" onChange={this.handleOnChange.bind(this)} />
        <button onClick={this.handleOnChange.bind(this)}>Change</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterText: state.data.filterText,
    filterType: state.data.filterType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setText: (val, val2) =>
      dispatch({ type: "SET_TEXT", filterText: val, filterType: val2 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentThree);
