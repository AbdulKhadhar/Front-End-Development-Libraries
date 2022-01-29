class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <Welcome name="World"/>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Access Props Using this.props */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
};
