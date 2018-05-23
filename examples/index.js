import React, { Component } from "react";
import ReactDOM from 'react-dom';
import FileSelector from '../dist/index.js';

class App extends Component {

  constructor() {
    super();
    this.state = { file:null };
  }

  render() {
    return (
      <div>
        <FileSelector
          file={this.state.file}
          onSelectFile={this.onSelectFile.bind(this)}
        />
      </div>
    );
  }
  onSelectFile(f) {
    this.setState({ file: f });
  }
}

ReactDOM.render(<App />, document.getElementById('root')); 