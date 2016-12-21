const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({

	title:{required:true,type:String},
	content:{type:String, required:true},
	author:{type:String, required:true},
	publishDate:{required:true, type:String}

});


blogSchema.methods.apiRepr = function() {

  return {
    title: this.title,
    content: this.content,
    author: this.author,
    publishDate: this.publishDate,
    
  };
}

//Collection will be called blogs we use 'Blog' because mongoose converts whatever we put in the first argument to lowercase and plural
const blogPost = mongoose.model('blog', blogSchema);

module.exports = blogPost;