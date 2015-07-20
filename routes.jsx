function requiredLogin(path, next) {
  // this works only because the use of Fast Render
  var redirectPath = (!Meteor.userId())? "/login" : null;
  next(redirectPath);
}

FlowRouter.route('/', {
    action: function(params) {
      React.render(<Landing/>, document.body);
    }
});
FlowRouter.route('/login', {
    action: function(params) {
      React.render(<Login/>, document.body);
    }
});
//si usuario logeado
FlowRouter.route('/app', {
    triggers: [requiredLogin],
    action: function(params) {
      React.render(<App/>, document.body);
    }
});
FlowRouter.route('/notifications', {
    triggers: [requiredLogin],
    action: function(params) {
      React.render(<NotificationsList/>, document.body);
    }
});
