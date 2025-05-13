// Questo file serve per calcolare la distanza di ogni luogo dal luogo dove si trova l'utente in modo da poter ordinare i luoghi turistici disponibili in ordine di distanza (dal più vicino al più lontano)


// Converte i gradi in radianti, necessari per i calcoli trigonometrici.
function radianti(value) {
  return (value * Math.PI) / 180;
}


//Calcola la distanza in chilometri tra due coordinate geografiche (latitudine e longitudine) utilizzando la formula dell'Haversine.
function calcolaDistanza(lat1, lng1, lat2, lng2) {
  const R = 6371; // Raggio medio della Terra in chilometri
  const dLat = radianti(lat2 - lat1);
  const dLon = radianti(lng2 - lng1);
  const l1 = radianti(lat1);
  const l2 = radianti(lat2);

  // Formula di Haversine per calcolare la distanza su una sfera
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distanza finale in chilometri
  return d;
}


// Ordina l'array di luoghi in base alla distanza da un punto di riferimento (lat, lon) dato.
// Ritorna un nuovo array ordinato dal più vicino al più lontano.

export function ordinaLuoghiperDistanza(places, lat, lon) {
  const luoghiOrdinati = [...places]; // Copia per non modificare l'array originale
  luoghiOrdinati.sort((a, b) => {
    const distanzaA = calcolaDistanza(lat, lon, a.lat, a.lon);
    const distanzaB = calcolaDistanza(lat, lon, b.lat, b.lon);
    return distanzaA - distanzaB;
  });
  return luoghiOrdinati;
}
