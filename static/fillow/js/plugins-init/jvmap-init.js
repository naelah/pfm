$(function(){
    $.getJSON('/data/france-elections.json', function(data){
      new jvm.Map({
        map: 'fr_regions_merc',
        container: $('#map2007'),
        series: {
          regions: [{
            scale: {
              '1': '#4169E1',
              '2': '#FF69B4'
            },
            attribute: 'fill',
            values: data['year2007'].results
          }]
        }
      });
  
      new jvm.Map({
        map: 'fr_regions_merc',
        container: $('#map2012'),
        series: {
          regions: [{
            scale: {
              '1': '#FF69B4',
              '2': '#4169E1'
            },
            attribute: 'fill',
            values: data['year2012'].results
          }]
        }
      });
    });
  });
  