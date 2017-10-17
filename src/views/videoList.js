var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function() {
 
  	this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    
    console.log('THIS IS EEQUAL TO', this);
    this.$el.children().detach();
    this.$el.html(this.template());


   
    
    var newArray = this.collection.map(function(video) {
      // YOUR CODE HERE
      var newSomething = new VideoListEntryView({model:video});
      return newSomething.render();


     });
    
    console.log('NEW ARRAY LENGTH IS', newArray.length);
    for (var i = 0; i < newArray.length; i++) {
      
      this.$el.find('.video-list').append(newArray[i].el);
    }
    
    
    
    
    
    // this.$el.find('.video-list-entry').append(this.collection.map(function(video) {
    //   // YOUR CODE HERE
    //   var newSomething = new VideoListEntryView({model:video});
    //   console.log('IS RENDER ONLY BEING CALLED ONCE?', video);
    //   return newSomething.render();


    //  }));





    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
