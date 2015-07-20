// App component - represents the whole app
Landing = React.createClass({
  render() {
    return (
      <div className="container">
        <Toolbar logo="Logo" logged={false}/>
        <div id="content">
          <span>Landing</span>
        </div>
      </div>
    );
  }
});
