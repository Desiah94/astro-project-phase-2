// import React from 'react';

// const NavigationBar = () => {
//   const zodiacSigns = [
//     'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
//     'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
//   ];

//   return (
//     <nav>
//       <ul>
//         {zodiacSigns.map(sign => (
//           <li key={sign}>
//             <a href={`https://www.britannica.com/place/${sign}`} target="_blank" rel="noopener noreferrer">
//               {sign}
//             </a>
//           </li>
//         ))}
//         <li><a href="https://www.britannica.com/place/" target="_blank" rel="noopener noreferrer">Britannica</a></li>
//         <li><a href="/comments">Comments</a></li>
//         <li><a href="/subscription">Subscription</a></li>
//         <li><a href="/account">Account</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default NavigationBar;



import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/zodiac/aries">Aries</Link></li>
        <li><a href="https://www.britannica.com/place/Aries" target="_blank" rel="noopener noreferrer">Aries (Britannica)</a></li>
        <li><a href="https://www.britannica.com/place/Taurus" target="_blank" rel="noopener noreferrer">Taurus</a></li>
        <li><a href="https://www.britannica.com/place/Gemini-constellation-and-astrological-sign" target="_blank" rel="noopener noreferrer">Gemini</a></li>
        <li><a href="https://www.britannica.com/place/Cancer-constellation" target="_blank" rel="noopener noreferrer">Cancer</a></li>
        <li><a href="https://www.britannica.com/place/Leo-constellation" target="_blank" rel="noopener noreferrer">Leo</a></li>
        <li><a href="https://www.britannica.com/place/Virgo" target="_blank" rel="noopener noreferrer">Virgo</a></li>
        <li><a href="https://www.britannica.com/place/Libra-constellation" target="_blank" rel="noopener noreferrer">Libra</a></li>
        <li><a href="https://www.britannica.com/place/Scorpius" target="_blank" rel="noopener noreferrer">Scorpio</a></li>
        <li><a href="https://www.britannica.com/place/Sagittarius-constellation" target="_blank" rel="noopener noreferrer">Sagittarius</a></li>
        <li><a href="https://www.britannica.com/place/Capricorn" target="_blank" rel="noopener noreferrer">Capricorn</a></li>
        <li><a href="https://www.britannica.com/place/Aquarius-astronomy" target="_blank" rel="noopener noreferrer">Aquarius</a></li>
        <li><a href="https://www.britannica.com/place/Pisces" target="_blank" rel="noopener noreferrer">Pisces</a></li>
        {/* Add links for other zodiac signs */}
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/account">Account</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
