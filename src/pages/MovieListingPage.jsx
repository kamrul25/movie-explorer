import React, { useState } from 'react'

const MovieListingPage = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [loding, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div>MovieListingPage</div>
  )
}

export default MovieListingPage