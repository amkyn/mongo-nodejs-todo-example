var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo );

// Clever Cloud connection
// mongoose.connect( 'mongodb://db_username:db_password@db_host/db_name' );
mongoose.connect( 'mongodb://upi8z7ecoie7jda:9uRjTbB2lr6RiTdyIQpn@bubk3zzp6mrilrc-mongodb.services.clever-cloud.com:27017/bubk3zzp6mrilrc' );
