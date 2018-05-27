var canvas=["gamejam.svg","gamejam2.svg","gamejam6.svg","gamejam3.svg","gamejam4.svg","gamejam5.svg"];
var i=0
$('#canvass').attr('src','assets/'+canvas[i])
$('#canvas').click(function(){
	$('#canvass').fadeOut('medium');
	i++;
	$('#canvass').fadeIn('medium');
	setTimeout(affiche,400)

	choice()

	//changement de text / fadeOut  FadeIn Text 
})
function affiche(){
	$('#canvass').attr('src','assets/'+canvas[i]);
}
var scene = ["<span class='nom'>Père</span> : C'est pas possible. Tu prends tes affaires et tu te tires !<br /> <span class='nom'>Mère</span> : Tu ne remets plus jamais les pieds ici ! Tu ne t'approches pas de nous. Tu ne cherches pas à nous revoir. Tu ne nous appelles pas. Tu ne parles pas de nous."];
var scene2 = ["<p>Bonjour</p>"];
function choice() {
		switch(i){
			case 0:
			document.getElementById("text").innerHTML = scene;
			break;
			case 1:
			document.getElementById("text").innerHTML = scene2;
		}





}

choice();