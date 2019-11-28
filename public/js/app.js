// var lbLegal_jour =

// var date = new date(FullYear, Month, Date);
// console.log(date);

// var annee = getFullYear();
// var mois = getMonth() + 1;
var maintenant=new Date();
var jour=maintenant.getDate();
var mois=maintenant.getMonth();
var annee=maintenant.getFullYear()*365;
var total = jour+mois+annee;
var lbLegal_warning = document.getElementById('lbLegal_warning');
var close = document.getElementById('openModal');

document.getElementById("valide").addEventListener("click", function(){
  var jourc=parseInt(document.getElementById('lbLegal_jour').value);
  var moisc=parseInt(document.getElementById('lbLegal_mois').value);
  var anneec=parseInt(document.getElementById('lbLegal_annee').value)*365;
  var totalc = jourc+moisc+anneec;

  if (total - totalc < 6569){
    lbLegal_warning.style.visibility = 'visible';
  } else {
  window.location.href = '#close';
}
});
