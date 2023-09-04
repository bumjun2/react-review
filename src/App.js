import './App.css';
import React from 'react';

function App() {
  // const $h2 = React.createElement('h2', null, '방가방가');
  const $h2 = <h2>반가워요 !</h2>;

  return (
    <>
      <div className="App">
        <h1>메롱메롱</h1>
        {$h2}
      </div>
      <div className="noName">
        <input type="text" />
        <p>
          오늘은 태풍이와서 비가 많이 내렸다. <br /> 그래서 공부가 하기 싫다.
        </p>
      </div>
    </>
  );
}

export default App;