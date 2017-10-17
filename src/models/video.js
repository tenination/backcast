var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    $('.video-list-entry-title').on('click', function() {
      console.log(this);
      this.select();
    }, this);

  },

  select: function() {
    this.trigger('select', this);
  }

});
