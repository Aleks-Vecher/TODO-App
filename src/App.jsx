import React, { Component } from 'react';
import Hero from './component/Hero';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Grey',
    };
  }

  render() {
    const { name } = this.state;
    return <Hero name={name} />;
  }
}

export default App;
