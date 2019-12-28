import React from 'react';



class NumberValue extends React.Component { 
  render = () => {
  return (
    
        <div className={this.props.colors}>
           {this.props.countervalue}
          
        </div>
        
  );
}
}
export default NumberValue;
