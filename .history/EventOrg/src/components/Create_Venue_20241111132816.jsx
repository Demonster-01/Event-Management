import { useState } from "react";

export default function Create_Venue() {
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [No_of_Halls, setNo_of_Halls] = useState("");
  const [Area, setArea] = useState("");
  const [Parking, setParking] = useState("");
  const [Booking_price, setBooking_price] = useState("");
  const [Poster, setPoster] = useState(Null);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
  return (
    <div>
      <h1>Create Venue</h1>
    </div>
  );
}
