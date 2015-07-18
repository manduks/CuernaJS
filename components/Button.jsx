Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div {...this.props} className="button">{this.props.text}</div>
    );
  }
});
