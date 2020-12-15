
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs=require('fs');
const app = express();
const port = process.env.PORT || 3000
// middleware to parse request body
app.use(express.json());
app.use(express.urlencoded());

//redis to store key value pairs of image labels and path
var redis = require('redis');
const client = redis.createClient({
          host : '127.0.0.1',
          no_ready_check: true,
          auth_pass: '',
});

//check rediis server connection
client.on('connect', () => {
global.console.log("connected");
});

//check for anny error on redis server startup
client.on('error', err => {
    console.log('Error ' + err);
});

// multer api to upload image files in server folder
const upload = multer({dest: __dirname + '/public/uploads'});
app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

//masonry.js to display images in grid
app.use(
'/static/masonry.pkgd.min.js',
express.static('./node_modules/masonry-layout/dist/masonry.pkgd.min.js')
);

// homepage(index.ejs)
app.get('/', function(req, res) {
  res.render('index');
});

// joining path of directory
const directoryPath = path.join(__dirname, 'public/uploads');

// routing to index file to display uploaded images
app.post('/index', upload.single('photo'), (req, res) => {
if(req.file!='undefined') {
const files=fs.readdirSync(directoryPath);
let sub={p:files, q:req.file.filename,label:req.body.tagname};
client.set(req.body.tagname, req.file.filename);
    res.render('index',{sub});
}  else {
  res.render('index');
}
});

//routing to search page to display search results
app.post('/search',(req, res) => {
  client.get(req.body.searchkey, (err, reply) => {
        if (err) throw err;
         console.log(reply);
        let image_arr={img_path:reply};
          res.render('search',{image_arr});
    });
});

//to check  whether express app is up and running
app.listen(port, function() {
   console.log('Photo upload app listening on port 3000!');
});
