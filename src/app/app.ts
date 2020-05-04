var containerImg= $('#img-container');
const api= 'https://swapi.co/api/';
const people= 'people/?page=';
const apipol= api+people;
const planet = 'planets/';
const apiplanet = api+planet;
const starship = 'starships/';
const apistarship = api+starship;

$('#character').click(function(){
  containerImg.empty();
  console.log(api+people);
  for (var i = 1; i < 10; i++){
    var link = 'https://swapi.co/api/people/?page='+(i);
    console.log(link);
    $.getJSON(link, function(data){
      console.log(data);
      for(i in data.results){
        console.log(data.results[i]);
        containerImg.append(`<div class="col-xs-6 col-sm-6 center-block boxname"><a href="" data-toggle="modal" data-target=".bs-example-modal-sm">${data.results[i].name}</a></div>`);
      $('.modal-content').append(`<div class="row"><div class="col-xs-12 col-sm-12" style="color: #000;">${data.results[i].name}</div></div>`);
      }
    })
  }
})

$('#starship').click(function(){
  containerImg.empty();
  console.log(api+starship);
  $.getJSON(apistarship, function(data){
    for(i in data.results){
      console.log(data.results[i]);
      containerImg.append(`<div class="col-xs-6 col-sm-6 center-block boxname"><a href="" data-toggle="modal" data-target=".bs-example-modal-sm">${data.results[i].name}</a></div>`);;
      $(".modal-content").empty();
      $('.modal-content').append(`<div class="row"><div class="col-xs-12 col-sm-12" style="color: #000;">${data.results[i].name}</div></div>`);
    }
  })
})

$('#planet').click(function(){
  containerImg.empty();
  console.log(api+planet);
  $.getJSON(apiplanet, function(data){
    for(i in data.results){
      console.log(data.results[i]);
      containerImg.append(`<div class="col-xs-6 col-sm-6 center-block boxname"><a href="" data-toggle="modal" data-target=".bs-example-modal-sm">${data.results[i].name}</a></div>`);;
      $('.modal-content').append(`<div class="row"><div class="col-xs-12 col-sm-12" style="color: #000;">${data.results[i].name}</div></div>`);
    }
  })
})
