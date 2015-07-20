Login = React.createClass({
  render() {
    return (
      <div className="login">
        <div className="loginContainer">
          <Button text="Twitter" onClick={this.handleLogin}/>
        </div>
      </div>
    );
  },
  handleLogin() {
    Meteor.loginWithTwitter({}, function(err){
      if (err) {
        throw new Meteor.Error("Twitter login failed");
      } else {
          FlowRouter.go('/app');
      }
    });
  }
});
