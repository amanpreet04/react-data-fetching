import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlace, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText="Fetching places"
      places={availablePlace}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
