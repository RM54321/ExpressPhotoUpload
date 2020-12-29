# ExpressPhotoUpload
Photo Upload and Search application built using Express JS,Redis Cache ,Multer API. Multer is a middleware for Express and Node.js that makes it easy to handle multipart/form-data when users upload files.

## Prerequisites:
1.Node and Express.js needs to be installed.
2.Multer middleware for file uploading needs to be installed via npm.
3.The fs (File System) module provides a lot of very useful functionality to access and interact with the file system.
There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it: const fs = require('fs')
4.Redis is used for searching image files by their labels.
Redis needs to be installed in the machine and also installed via npm in the application. Connection to redis is set up by using redis.createClient() function in server.js.
5.Masonry.js and jquery is used to display the uploaded image files in masonry-grid format.


## Usage
1.Navigate to the application path: cd photoapp
2.Run the command: node server.js
3.Open localhost:3000 and view the application running.
