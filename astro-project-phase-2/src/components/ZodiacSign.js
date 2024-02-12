import React from 'react';


const ZodiacSign = ({ sign }) => {
  const handleClick = () => {
    // Display a message or perform an action based on the clicked zodiac sign
    alert(`You clicked on ${sign}.`);
  };

  const zodiacData = {
    aries: {
      traits: "Confident, courageous, enthusiastic",
      rulingPlanet: "Mars",
      element: "Fire",
      symbol: "Ram",
      compatibility: "Leo, Sagittarius"
    },
    taurus: {
      traits: "Patient, reliable, affectionate",
      rulingPlanet: "Venus",
      element: "Earth",
      symbol: "Bull",
      compatibility: "Virgo, Capricorn"
    },
    gemini: {
      traits: "Adaptable, outgoing, intelligent",
      rulingPlanet: "Mercury",
      element: "Air",
      symbol: "Twins",
      compatibility: "Libra, Aquarius"
    },
    cancer: {
      traits: "Emotional, intuitive, loyal",
      rulingPlanet: "Moon",
      element: "Water",
      symbol: "Crab",
      compatibility: "Scorpio, Pisces"
    },
    leo: {
      traits: "Generous, warm-hearted, creative",
      rulingPlanet: "Sun",
      element: "Fire",
      symbol: "Lion",
      compatibility: "Aries, Sagittarius"
    },
    virgo: {
      traits: "Practical, hardworking, analytical",
      rulingPlanet: "Mercury",
      element: "Earth",
      symbol: "Maiden",
      compatibility: "Taurus, Capricorn"
    },
    libra: {
      traits: "Diplomatic, social, cooperative",
      rulingPlanet: "Venus",
      element: "Air",
      symbol: "Scales",
      compatibility: "Gemini, Aquarius"
    },
    scorpio: {
      traits: "Resourceful, brave, passionate",
      rulingPlanet: "Pluto",
      element: "Water",
      symbol: "Scorpion",
      compatibility: "Cancer, Pisces"
    },
    sagittarius: {
      traits: "Adventurous, optimistic, philosophical",
      rulingPlanet: "Jupiter",
      element: "Fire",
      symbol: "Archer",
      compatibility: "Aries, Leo"
    },
    capricorn: {
      traits: "Responsible, disciplined, ambitious",
      rulingPlanet: "Saturn",
      element: "Earth",
      symbol: "Goat",
      compatibility: "Taurus, Virgo"
    },
    aquarius: {
      traits: "Independent, progressive, humanitarian",
      rulingPlanet: "Uranus",
      element: "Air",
      symbol: "Water Bearer",
      compatibility: "Gemini, Libra"
    },
    pisces: {
      traits: "Compassionate, artistic, gentle",
      rulingPlanet: "Neptune",
      element: "Water",
      symbol: "Fish",
      compatibility: "Cancer, Scorpio"
    }
  };

  const { traits, rulingPlanet, element, symbol, compatibility } = zodiacData[sign.toLowerCase()];

  return (
    <div>
      <h2 onClick={handleClick}>{sign}</h2>
      <p><strong>Traits:</strong> {traits}</p>
      <p><strong>Ruling Planet:</strong> {rulingPlanet}</p>
      <p><strong>Element:</strong> {element}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <p><strong>Compatibility:</strong> {compatibility}</p>
    </div>
  );
}

export default ZodiacSign;
