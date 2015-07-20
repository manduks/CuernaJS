NotificationsList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var sub = Meteor.subscribe("notifications");
    return {
      loading: !sub.ready(),
      notifications: Notifications.find({}, {sort: {createdAt: -1}})
    }
  },
  renderNotifications() {
    return this.data.notifications.map((n) => {
      return <Notification key={n._id} notification={n} />;
    });
  },
  render() {
    if (this.data.loading) {
      return <LoadingSpinner />;
    }
    return (
      <div className="container">
        <Toolbar logo="Logo" logged={true}/>
        <div id="content">
          <ul>{this.renderNotifications()}</ul>
        </div>
      </div>
    );
  }
});
