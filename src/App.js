import React from 'react';
import NumberValue from './NumberValue'
import ButtonsBlock from './ButtonsBlock'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);



  }
  state = {

    counter: 1,

    incDisabled: false,

    colorvalue: "  "

  }

  PlusValue = () => {
    if (this.state.counter < 5) {
      this.setState({
        counter: this.state.counter + 1
      });
    } else {
      let newcolorValue = this.state.colorvalue;
      newcolorValue = "active"
      this.setState({
        incDisabled: true,
        colorvalue: newcolorValue

      })
    }


  }

  ReseTValue = () => {

    this.setState({
      counter: 0,
      incDisabled: false,
      colorvalue: " "
    });

  }



  render = () => {
    return (
      <div className="App">
        <div className="chetchik">
          <NumberValue countervalue={this.state.counter} colors={this.state.colorvalue} />
          <ButtonsBlock PlusValue={this.PlusValue} ReseTValue={this.ReseTValue} disabled={this.state.incDisabled} />

        </div>

      </div>
    );
  }
}
export default App;
