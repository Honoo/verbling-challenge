import React from 'react';

export default class App extends React.Component {

  render() {
    return <div className="list-container">
      {this.searchBar()}
      {this.listArea()}
      {this.buttonsArea()}
    </div>;
  }

  searchBar(){
    return <input type="text" placeholder="Search" />
  }

  listArea(){
    return <div className="list-area">Test</div>;
  }

  buttonsArea(){
    return <span>
      <button>Open All</button>
      <button>Close All</button>
      <button>Toggle All</button>
      <button>Add</button>
    </span>
  }

}
