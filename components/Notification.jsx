Notification = React.createClass({
  propTypes: {
    notification: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.notification.text}-{this.props.notification._id}</li>
    );
  }
});
