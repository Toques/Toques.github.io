function resumeToggle(){
	$("#resumeIFrame").toggle("slow");
}
$(document).ready(function(){
	$(".resumePreview").click(resumeToggle);
});
