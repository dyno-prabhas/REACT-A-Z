import { Component } from "react";

class ClassBasedComponents extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
    //count : 0,
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

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  

  componentDidMount() {
    const { showText, changeColor } = this.state;
    console.log("this is called at first page load");
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
      count: 0
    });
  }

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    
  }

  render() {
    const { showText, changeColor, count } = this.state;
    return (
      <div>
        {showText ? <h3 style={{ color:  changeColor? 'red': 'blue' }}>CLass Based Component</h3> : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increase Count Value</button>
        <h3>Count is {count}</h3>
      </div>
    );
  }
}

export default ClassBasedComponents;
