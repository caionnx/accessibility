function resizeText(multiplier) {
	if( ( parseFloat(document.body.style.fontSize) <= 1.8 && multiplier < 0 ) || ( parseFloat(document.body.style.fontSize) >= 3 && multiplier > 0 ) )
		return false
	document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
	//$(".btn").css('font-size', parseFloat(document.body.style.fontSize) + (-1.4) + "em");
  //$("p").css('font-size', parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em");
}

$("#max-font").click( function(e) {
	resizeText(2);
});
$("#min-font").click( function(e) {
	resizeText(-2);
});

$("#contrast-1").click( function(e) {
	$("html").removeClass();
	$("html").addClass('negative');
	$("#remove-contrast").text("Remover contraste");
});

$("#contrast-2").click( function(e) {
	$("html").removeClass();
	$("html").addClass('negative-alternative');
	$("#remove-contrast").text("Remover contraste");
});

$("#remove-contrast").click( function(e) {
	$("html").removeClass();
	$("#remove-contrast").text("");
});

$("#clear").click( function(e) {
	$(':input','#fr')
	 .not(':button, :submit, :reset, :hidden')
	 .val('')
	 .removeAttr('checked')
	 .removeAttr('selected');
});