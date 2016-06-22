var express = require('express');
var router = express.Router();
var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '218860',
  key: '48de0cfc2a99f7af4e12',
  secret: 'c44f6285a0885c0d8c4b',
  encrypted: true
});
pusher.trigger('test_channel', 'my_event', {
  "message": "hello world"
});
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.post('/messages', function(req, res){
  var message = req.body;
  console.log(message);
  pusher.trigger('messages', 'new_message', message);
  res.json({success: 200});
});
module.exports = router;
