var streets = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
    }
  );
  
  var satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    }
  );
  var basemaps = {
    "Streets": streets,
    "Satellite": satellite
  };
  
  var map = L.map("map", {
    layers: [streets]
  }).setView([54.5, -4], 6);
  
  var layerControl = L.control.layers(basemaps).addTo(map);

  $(document).ready(function() {
    $('#timezoneForm').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url: 'your_php_script.php', // Replace with the path to your PHP script
            type: 'GET',
            data: {
                lat: $('#lat').val(),
                lng: $('#lng').val()
            },
            success: function(response) {
                $('#result').html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                $('#result').html("Error: " + error);
            }
        });
    });
});
  
  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);
  
  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);

  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);

  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);

  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);