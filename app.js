var canvas=["gamejam.svg","gamejam2.svg","gamejam6.svg","gamejam3.svg","gamejam4.svg","gamejam5.svg"];
var i=0
$('#canvass').attr('src','assets/'+canvas[i])
$('#canvas').click(function(){
	$('#canvass').fadeOut('medium');
	i++;
	$('#canvass').fadeIn('medium');
	setTimeout(affiche,400)
})
function affiche(){
	$('#canvass').attr('src','assets/'+canvas[i]);
}
