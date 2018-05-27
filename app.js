var canvas=["gamejam.svg","gamejam2.svg","gamejam3.svg","gamejam4.svg","gamejam5.svg"];
var i=0
$('#canvass').attr('src','assets/'+canvas[i])
$('#canvas').click(function(){
	i++	
	$('#canvass').attr('src','assets/'+canvas[i])
	
})
