$(document).ready(function() {
	let i = 1;
	let total = 3;
	// $("#image-container").css("background-image", "url(" + images[0] + ")");
	setInterval(function(){ changeImage(i++%total); }, 7000);
});

function changeImage(i) {
	$(".image").hide();
	$("#image-" + i).show();
}