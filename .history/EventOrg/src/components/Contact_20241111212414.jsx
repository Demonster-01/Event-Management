export default function Contact() {
  return (
    <>
    <div>
      <h1>Contact us</h1>
      <span>
        Mobile:<kbd>+977-980xxxxxxx</kbd>
      </span>
      <span>
        Email:<kbd>Event@gmail.com</kbd>
      </span>
      <span>
        Location:<Kbd>Ktm-Kathmandu</Kbd>
      </span>
    </div>
    <div id="googleMap" style="width:100%;height:400px;"></div>

<script>
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>

    </>
  );
}
