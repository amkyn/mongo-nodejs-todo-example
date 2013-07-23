var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo );

mongoose.connect( 'mongodb://u9pu1gf9le453av6:a1fd9e548cc341408ddf28a97dd51a80@bijf5djt2a8hm3fv.mongo.clvrcld.net/bijf5djt2a8hm3fv' );