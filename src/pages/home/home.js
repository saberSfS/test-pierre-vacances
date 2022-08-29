//=require ./partials/_exemple.js
console.log('Script home.js chargé !');

console.log('test pour voir si jQuery est bien présent');
console.log($('p'));

$(document).ready(function(){
  $('.button-one').attr('data-count-css', "data-count-css");
});
var stars = [
  {
    name: 'Morgan Freeman',
    chauve: false,
    cool: true,
  },
  {
    name: 'Bruce Willis',
    chauve: true,
    cool: true
  },
  {
    name: 'Cyril Hanouna',
    chauve: false,
    cool: false
  },
  {
    name: 'Pascal Obispo',
    chauve: true,
    cool: false
  }
];
console.log("stars", stars)
