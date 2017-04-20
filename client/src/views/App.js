import React from 'react';

export default class App extends React.Component {

  render() {
    return <div className="list-container">
      {this.listArea()}
    </div>;
  }

  listArea(){
    return <div className="list-area">Test</div>;
  }

}
