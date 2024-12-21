function OpenInfo(ProjectName){
	document.getElementById("ProjectDisplay").src = ProjectName;
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
this.OpenInfo("About.html");

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
//var y = document.getElementById("PreviewImage");
var z = document.getElementById("TheRest");
if(y.style.display==="none"){
	y.style.display = "block";
	y.src = Image;
	//y.src = x.src;
	//y.src = Image;
	z.style.display = "none";
}else{
	y.style.display = "none";
	z.style.display = "block";
}
}