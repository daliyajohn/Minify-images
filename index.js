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


