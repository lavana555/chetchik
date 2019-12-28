import React from 'react';



class NumberValue extends React.Component { 


    // inc=()=>{
    //     alert('inc')
    // }

  render = () => {
  return (
    
    <div className="buttonsBlock">

    <button  onClick={this.props.PlusValue} disabled={this.props.disabled} className="inc"   >inc</button>
    <button onClick={this.props.ReseTValue} className="reset">Reset</button>
  </div>
        
  );
}
}
export default NumberValue;
