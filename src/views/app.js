var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();


  },


  render: function() {
    this.$el.html(this.template());
    
    new VideoPlayerView();
    new SearchView();
    new VideoListView({collection: this.videos});
    //new VideoListEntryView();
    
    

    return this;
  },

  template: templateURL('src/templates/app.html')

});
