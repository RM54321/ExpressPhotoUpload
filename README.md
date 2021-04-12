# ExpressPhotoUpload
Photo Upload and Search application built using Express JS,Redis Cache ,Multer API. Multer is a middleware for Express and Node.js that makes it easy to handle multipart/form-data when users upload files.Masonry.js and jquery is used to display the uploaded image files in masonry grid format.

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
### Home Page
![image](https://user-images.githubusercontent.com/29458723/103464792-6b47af00-4d04-11eb-84f3-bdbe938f6867.png)

### Upload Image File
![image](https://user-images.githubusercontent.com/29458723/103464800-7995cb00-4d04-11eb-9085-1193606bd819.png)

### Dynamic Masonry Gallery
![image](https://user-images.githubusercontent.com/29458723/103464813-95996c80-4d04-11eb-97d2-cd42243e13a1.png)

### Search Image
![image](https://user-images.githubusercontent.com/29458723/103464818-a0ec9800-4d04-11eb-82b3-dab0f2f09e12.png)



