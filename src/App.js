import React, { Component } from 'react';
import ClipboardItems from './ClipboardItems';
import AddClipText from './AddClipText';

class App extends Component {
  state = {
    clipItems: []
  }
  addClip = (clipItem) => {
    let clipItems = [...this.state.clipItems, clipItem];
    this.setState({
      clipItems: clipItems
    });
  }
  deleteClip = (timestamp) => {
    let clipItems = this.state.clipItems.filter(item => {
      return item.timestamp !== timestamp
    });
    this.setState({
      clipItems: clipItems
    })
  }
  render() {
    return (
      <div className="App">
        <center>
          <h1>Cloud Clipboard</h1>
          <AddClipText addClipItem={this.addClip}/>
        </center>
        <ClipboardItems deleteClipItem={this.deleteClip} clipItems={this.state.clipItems} />
      </div>
    );
  }
}

export default App;
