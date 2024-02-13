import React from 'react';

const ZodiacSign = ({ zodiacSigns, searchTerm, setSearchTerm }) => {
  const filteredSigns = zodiacSigns.filter(zodiac =>
    zodiac.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search zodiac signs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredSigns.map(zodiac => (
        <div key={zodiac.id}>
          <h2>{zodiac.name}</h2>
          <img src={zodiac.imageURL} alt={zodiac.name} />
          <p>{zodiac.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ZodiacSign;
