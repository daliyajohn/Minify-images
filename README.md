# Minify-images
Minify image using npm install imagemin with out change image quality  

 Create a folder 
 
 Create a index.js file.
 
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
 npm install imagemin
 npm install imagemin-jpegtran
 npm install imagemin-pngquant
 Node index
