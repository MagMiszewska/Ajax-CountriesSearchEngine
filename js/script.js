var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if (!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function (item) {
    $('<li>')
      .append($('<h3>').text(item.name))
      .append($('<div>').append($('<img>').attr('src', item.flag).attr('alt', item.capital)))
      .append($('<p>').text('Capital city: ' + item.capital))
      .append($('<p>').text('Region: ' + item.region))
      .append($('<p>').text('Subregion: ' + item.subregion))
      .append($('<p>').text('Area: ' + item.area))
      .append($('<p>').text('Population: ' + item.population))      
      .appendTo(countriesList);
  });
}