import React from 'react';
import Card from './Components/UI/Card';

const Hello = (props) => {
  console.log(props);
  return (
    <Card className="reactangle">
      <div>
        {props.children}
        Hello React
      </div>
    </Card>
  );
};

export default Hello;
