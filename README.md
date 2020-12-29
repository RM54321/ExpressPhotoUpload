# ExpressPhotoUpload
Photo Upload and Search application built using Express JS,Redis Cache ,Multer API. Multer is a middleware for Express and Node.js that makes it easy to handle multipart/form-data when users upload files.Masonry.js and jquery is used to display the uploaded image files in masonry-grid format.

## Installation
<ul>
  <li>Node and Express.js needs to be installed.</li>
  <li>Multer middleware for file uploading needs to be installed via npm.</li>
  <li>The fs (File System) module provides a lot of very useful functionality to access and interact with the file system.</li>
  <li>There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it: const fs = require('fs')</li>
  <li>Redis is used for searching image files by their labels.</li>
  <li>Redis needs to be installed in the machine and also installed via npm in the application. Connection to redis is set up by using redis.createClient() function       in server.js.</li>


## Usage
Starting Redis Server 
```bash
$redis-server
```

<ul>
<li>Navigate to the application path: cd photoapp</li>
<li>Run the command: node server.js</li>
<li>Open localhost:3000 and view the application running.</li>


## Screenshots
Home Page
![image](https://user-images.githubusercontent.com/29458723/103260593-26babd00-496c-11eb-807b-73693a024e86.png)

Upload File
![image](https://user-images.githubusercontent.com/29458723/103260745-ce37ef80-496c-11eb-9c5a-d1f18a3e2c3d.png)

Search File
![image](https://user-images.githubusercontent.com/29458723/103260761-e1e35600-496c-11eb-99c5-004ced9d4bd7.png)

Dynamiic Masonry Layout
![image](https://user-images.githubusercontent.com/29458723/103260789-f4f62600-496c-11eb-8ac1-76abe997cebe.png)

