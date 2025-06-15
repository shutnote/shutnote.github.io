function OpenInfo(ProjectName){
	parent.document.getElementById("ProjectDisplay").src = ProjectName;
	
	var r = document.querySelector(':root');
	var BackgroundColour = 'Gray';
	var BorderColour = '#606060';
	
	if(ProjectName=="Cryture/Cryture.html"){
		BackgroundColour = 'Gray'//#808080
		BorderColour = '#606060'
	}
	if(ProjectName=="Monk/SOD.html"){
		BackgroundColour = 'Crimson'//#DC143c
		BorderColour = '#BA021A'
	}
	if(ProjectName=='Mobile/Mobile.html'){
		BackgroundColour = 'OliveDrab'
		BorderColour = '#496C01'
	}
	if(ProjectName=='UnityPlatformer.html'){
		BackgroundColour = 'OrangeRed'//#FF4500
		BorderColour = '#DD2300'
	}
	if(ProjectName=='Console/PartyStation.html'){
		BackgroundColour = 'Pink'//#FFC0CB
		BorderColour = '#DD9EA9'
	}
	if(ProjectName=='CombatChaos/CombatChaos.html'){
		BackgroundColour = 'SandyBrown'//#F4A460
		BorderColour = '#D2823e'
	}
	if(ProjectName=='HorrorUnreal.html'){
		BackgroundColour = 'DimGray'//#696969
		BorderColour = '#474747'
	}
	if(ProjectName=='SNgine/SNgine.html'){
		BackgroundColour = 'Aquamarine'//#7FFFD4
		BorderColour = '#5DDDB2'
	}
	if(ProjectName=='Misc/Misc.html'){
		BackgroundColour = 'Gray'//#7FFFD4
		BorderColour = '#606060'
	}
    r.style.setProperty('--BackgroundColour', BackgroundColour);
    r.style.setProperty('--BorderColour', BorderColour);


}

function OpenProject(Event, ProjectName) {
  var i, STabStyle, tablinks;
  STabStyle = document.getElementsByClassName("STabStyle");
  for (i = 0; i < STabStyle.length; i++) {
    STabStyle[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(ProjectName).style.display = "block";
  Event.currentTarget.className += " active";
  
  
}
//this.OpenInfo("About.html");


function Init(){
	var r = document.getElementsById("SMainProjects");
	r.style.width = "0px";
}

var Prev = 'Electro';
function Toggle(Thing){
var x = document.getElementById(Thing);
var PrevItem = document.getElementById(Prev);
if(x.style.display === "none"){
	x.style.display = "block";
	if(Prev!=Thing){
		PrevItem.style.display = "none";
		Prev = Thing;
	}
	
}else{
	x.style.display = "none";
}
}

function EnlargeImage(Image){
//var x = document.getElementById(Image);
var y = document.getElementById("PreviewImage");
var x = document.getElementById("PreviewImageClose");
//var y = document.getElementById("PreviewImage");
var z = document.getElementById("TheRest");
if(y.style.display==="none"){
	y.style.display = "block";
	x.style.display = "inline";
	y.src = Image;
	//y.src = x.src;
	//y.src = Image;
	z.style.display = "none";
}else{
	y.style.display = "none";
	z.style.display = "block";
	x.style.display = "none";
}
}