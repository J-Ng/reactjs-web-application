var App = React.createClass({
  getInitialState: function() {
    return { items: [], products: [] };
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render: function() {
    return (
      <div className="container">
        <Header  />
        <p>Hello World from main App.js!</p>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));