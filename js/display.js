function resumeToggle(){
	$("#resumeIFrame").toggle("slow");
}

$(document).ready(function(){
    $("#resumeButton").click(resumeToggle);
	$("#resumeLink").click(resumeToggle);
	
});
