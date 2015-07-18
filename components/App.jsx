// App component - represents the whole app
App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var sub = Meteor.subscribe("users");
    return {
      usersLoading: !sub.ready(),
      currentUser : Meteor.user()
    }
  },
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.usersLoading) {
      return <LoadingSpinner />;
    }
    return (
      <div className="container">
        <Toolbar logo="Logo" logged={!!this.data.currentUser}/>
      </div>
    );
  }
});
