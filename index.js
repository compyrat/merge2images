const images = require('images')

exports.merge = function(bigImg, smallImg, outImg){
	images(bigImg).draw(images(smallImg), 0, 0).save(outImg);
}

exports.mergeWithCoordinates = function(bigImg, smallImg, outImg, x, y){
	images(bigImg).draw(images(smallImg), x, y).save(outImg);
}

exports.mergeWithAutoScaling = function(bigImg, size1, smallImg, size2, outImg){
	images(bigImg).size(size1).draw(images(smallImg).size(size2), 0, 0).save(outImg);
}

exports.mergeWithManualScaling = function(bigImg, width1, height1, smallImg, width2, height2, outImg){
	images(bigImg).size(width1).height(height1).draw(images(smallImg).size(width2).height(height2), 0, 0).save(outImg);
}

exports.mergeWithAll = function(bigImg, width1, height1, smallImg, width2, height2, outImg, x, y){
	images(bigImg).size(width1).height(height1).draw(images(smallImg).size(width2).height(height2), x, y).save(outImg);
}

exports.mergeWithAllCenter = function(bigImg, width1, height1, smallImg, width2, height2, outImg){
	if (width1 >= width2){
		var x = (width1/2) - (width2/2);
	}else{
		var x = 0;
	}

	if (height1 >= height2){
		var y = (height1/2) - (height2/2);
	}else{
		var y = 0;
	}
	images(bigImg).size(width1).height(height1).draw(images(smallImg).size(width2).height(height2), x, y).save(outImg);
}