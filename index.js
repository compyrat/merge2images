const images = require('images')

exports.merge = function(bigImg, smallImg, outImg){
	images(bigImg).draw(images(smallImg), 0, 0).save(outImg);
}

exports.mergeWhitCoordinates = function(bigImg, smallImg, outImg, x, y){
	images(bigImg).draw(images(smallImg), x, y).save(outImg);
}
