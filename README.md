# Merge2Images
Merge images using the api of [Images](https://www.npmjs.com/package/images)

# Author
  - Albert Marlet ([Compyrat](https://github.com/compyrat))

# Instalation
```sh
$ npm install merge2images
```

# API
```javascript
const images = require('merge2images');

//merge big image with small image and save at out image
images.merge(bigImg, smallImg, outImg);

//merge big image with small image at coordinates (x,y) and save at out image
images.mergeWithCoordinates(bigImg, smallImg, outImg, x, y);

//merge big image with small image, save at out image and auto scaling with number of width pixel
images.mergeWithAutoScaling(bigImg, size1, smallImg, size2, outImg);

//merge big image with small image, save at out image and manual scaling with number of width and height pixels
images.mergeWithManualScaling(bigImg, width1, height1, smallImg, width2, height2, outImg);

//merge big image with small image, save at out image, manual scaling and set coordinates(x,y)
images.mergeWithAll(bigImg, width1, height1, smallImg, width2, height2, outImg, x, y);

//merge big image with small image, save at out image, manual scaling and set small image at the center of the screen
images.mergeWithAllCenter(bigImg, width1, height1, smallImg, width2, height2, outImg);
```