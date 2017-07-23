# Minify-images
Minify image using npm install imagemin with out change image quality. 

 1. Create a folder 
 
 2. Create a index.js file.And paste this code.
 
```
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 
imagemin(['Exterior_4.jpg'], 'image/', {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({quality: '65-70'})
    ]
}).then(files => {
    console.log(files);
});
```
 3. npm install imagemin
 
 4. npm install imagemin-jpegtran
 
 5. npm install imagemin-pngquant
 
 6. Node index
