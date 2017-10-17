var VideoListEntryView = Backbone.View.extend({

 
  initialize: function() {
    this.render();
    console.log('ONE VIDEO IS BEING INITIALIZED NOW');
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function(e) {
    this.model.select();
  },



  render: function() {
  	console.log('render is being called from videolistentryview', this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
