Toolbar = React.createClass({
  propTypes: { //validators for this component
    logo: React.PropTypes.string.isRequired,
    logged: React.PropTypes.bool.isRequired
  },
  getInitialState() {
    return {
      notifications  : 0
    };
  },
  render() {
    if (this.props.logged) {
      return (
        <header>
          <div className="logo">{this.props.logo}</div>
          <div className="notifications" onClick={this.showNotifications}><span>{this.state.notifications}</span> Notifications</div>
          <Button text="Logout" onClick={this.handleLogout}/>
        </header>
      );
    }
    return (
      <header>
        <div className="logo">{this.props.logo}</div>
        <Button text="Login" onClick={this.handleOnLogin}/>
      </header>
    );
  },
  handleOnLogin() {
    FlowRouter.go("/login");
  },
  handleLogout() {
    Meteor.logout(function(err){
      if (err) {
          throw new Meteor.Error("Logout failed");
      } else {
          FlowRouter.go('/');
      };
    });
  },
  showNotifications (){
    FlowRouter.go('/notifications');
  }
});
