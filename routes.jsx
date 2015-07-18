FlowRouter.route('/', {
    action: function(params) {
      React.render(<App />, document.body);
    }
});
FlowRouter.route('/login', {
    action: function(params) {
      React.render(<Login/>, document.body);
    }
});
