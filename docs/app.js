exports.loadContext = function(callback) {
  var context;
  context = require.context('./pages', true);
  if (module.hot) {
    module.hot.accept(context.id, function() {
      context = require.context('./pages', true);
      return callback(context);
    });
  }
  return callback(context);
};

exports.onRouteChange = function(state) {
  if (typeof window !== "undefined" && window.ga) {
    window.ga('send', 'pageview', {
      page: state.pathname
    });
  }
}
