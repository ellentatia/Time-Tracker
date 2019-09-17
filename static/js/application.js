var login = "";
var token = "";
var userid = "";
var username = "Você";



//Inicializacao do Menu
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


function hideAllPages() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("formPage").style.display = "none";
  document.getElementById("mapPage").style.display = "none";
  document.getElementById("introductionPage").style.display = "none";
  document.getElementById("instructionsPage").style.display = "none";
  document.getElementById("startPage").style.display = "none";
}

function showLoginPage() {
  hideAllPages();
  document.getElementById("loginPage").style.display = "block";
}
function showFormPage() {
  hideAllPages();
  document.getElementById("formPage").style.display = "block";
}
function showMapPage() {
  hideAllPages();
  document.getElementById("mapPage").style.display = "block";
  listForm();
}
function showinstructionsPage() {
  hideAllPages();
  document.getElementById("instructionsPage").style.display = "block";
}
function showStartPage() {
  hideAllPages();
  document.getElementById("startPage").style.display = "block";
}

function saveNewUser(login, userid, username, useremail) {
	addMarker(latitude, longitude, username);
	document.getElementById("userfield").innerHTML = "Usuário:<b> " + username + "</b>";
	var url = "/saveNewUser?"
				+ "login=" + login
				+ "&userid=" + userid
        + "&latitude=" + latitude
        + "&longitude=" + longitude
				+ "&username=" + username
				+ "&useremail=" + useremail;

  fetch(url, {method: 'POST'})
    .then(function(response) {
      console.log('Successful login: ' + response);
    });
}

function roundToTwo(num)
{
    return +(Math.round(num + "e+2")  + "e-2");
 }

function checkboxes()
    {
     var modalContent = document.getElementById('modalContentContainer');
     var inputElems = document.getElementsByTagName("input"),
      count = 0;

      for (var i=0; i<inputElems.length; i++) {
        if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
            count++
            total= roundToTwo(count*4.2);
        }
      }
     modalContent.innerHTML = total+"%";
 }

document.addEventListener("DOMContentLoaded", function()
{
       const box = document.querySelectorAll(".modal");
       M.Modal.init(box, {
           opacity:0.6,
           inDuration:250,
           outDuration:250,
           dismissible: true,

       });
 });