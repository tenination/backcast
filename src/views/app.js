var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(fakeVideoData);
    this.render();


  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({$el: $('.list'), collection:this.videos}).render();
    new VideoPlayerView({$el: $('.player'), });
    return this;
  },

  template: templateURL('src/templates/app.html')

});
