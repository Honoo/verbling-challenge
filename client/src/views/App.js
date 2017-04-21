import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      listItems: []
    };

    this.addItem = this.addItem.bind(this);
  };

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
    var listElems = this.state.listItems.map((item, index) =>
      <li key={index}>{item}</li>
    );

    return <div className="list-area">
      <ul>{listElems}</ul>
    </div>;
  }

  buttonsArea(){
    return <span>
      <button>Open All</button>
      <button>Close All</button>
      <button>Toggle All</button>
      <button onClick={this.addItem}>Add</button>
    </span>
  }

  addItem(){
    var input = window.prompt("Enter new item:");

    if(input){
      var list = this.state.listItems;
      list.push(input);
      this.setState({listItems: list});
    }
  }

}
