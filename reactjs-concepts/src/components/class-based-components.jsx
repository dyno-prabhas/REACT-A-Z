import { Component } from "react";

class ClassBasedComponents extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    console.log("button clicked");

    // This is not recommended
    //this.state.showText = !this.state.showText

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  // constructor(props) {
  //     super(props);
  // }

  render() {
    const { showText, changeColor } = this.state;
    return (
      <div>
        {showText ? <h3 style={{ color:  changeColor? 'red': 'blue' }}>CLass Based Component</h3> : null}
        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default ClassBasedComponents;
