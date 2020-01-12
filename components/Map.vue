<template>
  <div>
    <form @submit="calcRoute" class="calc-route-form">
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input v-model="routeLocation" type="text" placeholder="Ihre Adresse" class="input" />
        </p>
        <p class="control">
          <button type="submit" class="button is-link">Route berechnen</button>
        </p>
      </div>
    </form>
    <div class="notification is-danger" v-if="errorMsg" v-html="errorMsg"></div>
    <div class="notification" v-if="distance" >
        <strong>Entfernung: </strong> {{distance}}
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
const vitalogikum = {
  lat: 48.02282,
  lng: 14.363629
};

export default {
  methods: {
    calcRoute: function(e) {
      e.preventDefault();
      const directionsService = new this.$google.maps.DirectionsService();
      const start = this.routeLocation;
      const end = vitalogikum;
      var request = {
        origin: start,
        destination: end,
        travelMode: "DRIVING"
      };

      directionsService.route(request, (result, status) => {
        console.log(">>", status, result);
        console.log(result)
        if (status == "OK") {
            this.errorMsg = null;
            this.routeLocation = result.routes[0].legs[0].start_address
            this.distance = result.routes[0].legs[0].distance.text
            this.duration = result.routes[0].legs[0].duration.text
          this.directionsRenderer.setDirections(result);
        } else {
          this.errorMsg = "<strong>Fehler:</strong> Die Adresse konnte nicht gefunden werden! Geben Sie Straße, Hausnummer und Postleitzahl oder Ort ein.";
          this.distance = null
          this.duration = null
        }
      });
    }
  },
  data: () => {
    return {
      map: null,
      directionsRenderer: null,
      routeLocation: "",
      errorMsg: null,
      distance: null,
      duration: null,
    };
  },
  mounted: function() {
    const initMap = () => {
      this.directionsRenderer = new this.$google.maps.DirectionsRenderer();
      const mapStyle = [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#444444"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2f2f2"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#e9e9e9"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#deebd8"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: 45
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#c4e5f3"
            },
            {
              visibility: "on"
            }
          ]
        }
      ];
      // The map, centered at vitalogikum
      this.map = new this.$google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        zoomControl: true,
        scaleControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
        mapTypeControlOptions: { mapTypeIds: [] },
        streetViewControl: false,
        center: vitalogikum,
        styles: mapStyle
      });
      // The marker, positioned at vitalogikum
      const marker = new this.$google.maps.Marker({
        position: vitalogikum,
        label: "VitaLogikum",
        map: this.map
      });

      this.directionsRenderer.setMap(this.map);
    };

    if (this.$google) {
      initMap();
    } else {
      const callback = () => {
        initMap();
        window.removeEventListener("maps-module:loaded", callback);
      };
      window.addEventListener("maps-module:loaded", callback);
    }
  }
};
</script>

<style scoped>
#map {
  height: 550px;
}
.calc-route-form {
  padding-bottom: 5px;
}
</style>