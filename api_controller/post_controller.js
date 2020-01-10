const knex = require('knex');
const config = require('../knexfile');

const dbClient = knex(config);

function addPost(request, response) {
  const caption = request.body.caption;
  const postImage = request.body.postImage;
  const username = request.body.username;
  const poster_image = request.body.poster_image;


  console.log(caption);
  dbClient
    .table('post')
    .insert({
      //this must be same for database's column
      caption: caption,
     
      postImage: postImage,
      
      username: username,
      poster_image: poster_image

    })
    .then(data => {
      response.json({
        success: 'true',
        status: 'success',
        message: 'Post Added',
        data: {
          caption: caption,
        }
      })
    })
    .catch(error => {
      console.log(error);
      response.json({
        success: 'fail',
        status: 'fail',
        message: 'Post Failed',
      })
    })

}




function getPost(req, res) {

  dbClient('post')
    .select({
      caption: 'caption',
      username: 'username',
      postImage: 'postImage',
      poster_image: 'poster_image'
    })
    .then(data => { //data aauncha
      res.json(data)
    })
    .catch(function (error) {
      console.log(error);
    });

}
function getPostById(req, res) {
 const post_id = req.params.id;

  dbClient('post')
    .select({
      caption: 'caption',
      time: 'time',
      username: 'username',
      postImage: 'postImage',
      poster_image: 'poster_image'
     
    })
    .where({post_id: post_id})
    .then(data => { //data aauncha
     

    
      let mapped=data.map(m=>{
        return m;
      });
       data=Object.assign({},...mapped);
      res.json(data)
    })
    .catch(function (error) {
      console.log(error);
    });

}

module.exports = {
  'addPost': addPost,
  'getPost': getPost,
  'getPostById':getPostById
}