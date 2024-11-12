import { useState } from "react";

export default function Create_Venue() {
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [No_of_Halls, setNo_of_Halls] = useState("");
  const [Area, setArea] = useState("");
  const [Parking, setParking] = useState(false);
  const [Booking_price, setBooking_price] = useState("");
  const [Poster, setPoster] = useState(Null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
     // Form data to send to the API
    const formData = new FormData();
    formData.append('Name', Name);
    formData.append('Location', Location);
    formData.append('Capacity', Capacity);
    formData.append('No_of_Halls', No_of_Halls);
    formData.append('Area', Area);
    formData.append('Parking', Parking);
    formData.append('Booking_price', Booking_price);
    if (Poster) {
        formData.append('Poster', Poster);
    }



  return (
    <div>
      <h1>Create Venue</h1>
    </div>
  );
}
