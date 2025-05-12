import auroraBoreale from "./assets/aurora-boreale.jpg";
import barrieraCorallina from "./assets/barriera-corallina.jpg";
import caraibi from "./assets/caribbean-beach.jpg";
import cascateVictoria from "./assets/cascate-victoria.jpg"
import colosseo from "./assets/colosseo.png";
import desertoSahara from "./assets/dune-deserto.jpg";
import fuji from "./assets/fuji.jpg";
import grandCanyon from "./assets/grand-canyon.jpg";
import himalaya from "./assets/himalaya.jpg"
import machuPicchu from "./assets/machu-picchu.jpg";
import rioAmazzoni from "./assets/rio-amazzoni.jpg";
import rovineGreche from "./assets/rovine-greche.jpg";
import savana from "./assets/savana-africana.jpg";
import statuaLiberta from "./assets/statua-libertà.png";
import stradeParigine from "./assets/strade-parigine.jpg";
import tajMahal from "./assets/taj-mahal.jpg";
import templiGiapponesi from "./assets/templi-giapponesi.jpg"
import tourEiffel from "./assets/tour-eiffel.png";
import venezia from "./assets/venezia.jpg";

export const LUOGHI_DISPONIBILI = [
    {
        id: 'p1',
        titolo: 'Aurora Boreale',
        image: {
            src: auroraBoreale,
            alt: "Fenomeno naturale di luci colorate nel cielo notturno."
        },
        lat: 64.9631,
        lon: -19.0208,
    },
    {
        id: 'p2',
        titolo: 'Barriera Corallina',
        image: {
            src: barrieraCorallina,
            alt: "Barriera Corallina subacquea."
        },
        lat: -18.2871,
        lon: 147.6992,
    },
    {
        id: 'p3',
        titolo: 'Caraibi',
        image: {
            src: caraibi,
            alt: "Spiaggia dei caraibi"
        },
        lat: 18.2208,
        lon: -66.5901,
    },
    {
        id: 'p4',
        titolo: 'Cascate Victoria',
        image: {
            src: cascateVictoria,
            alt: "Vista mozzafiato delle cascate Victoria"
        },
        lat: -17.9243,
        lon: 25.8572,
    },
    {
        id: 'p5',
        titolo: 'Colosseo',
        image: {
            src: colosseo,
            alt: "Colosseo"
        },
        lat: 41.8902,
        lon: -12.4922,
    },
    {
        id: 'p6',
        titolo: 'Deserto del Sahara',
        image: {
            src: desertoSahara,
            alt: "Dune di sabbia del deserto Sahariano."
        },
        lat: 25.0,
        lon: 0.0,
    },
    {
        id: 'p7',
        titolo: 'Monte Fuji',
        image: {
            src: fuji,
            alt: "Vista del monte Fuji durante l'Hanami."
        },
        lat: 35.3606,
        lon: 138.7274,
    },
    {
        id: 'p8',
        titolo: 'Grand Canyon',
        image: {
            src: grandCanyon,
            alt: "Vista della profondità dei canali del Grand Canyon."
        },
        lat: 36.1069,
        lon: -112.1129,
    },
    {
        id: 'p9',
        titolo: 'Himalaya',
        image: {
            src: himalaya,
            alt: 'Himalaya.',
        },
        lat: 27.9881,
        lon: 86.925,
    },
    {
        id: 'p10',
        titolo: 'Machu Picchu',
        image: {
            src: machuPicchu,
            alt: "Storica cittadella Inca di Machu Picchu illuminata dal sole mattutino."
        },
        lat: -13.1631,
        lon: -72.545,
    },
    {
        id: 'p11',
        titolo: 'Rio delle Amazzoni',
        image: {
            src: rioAmazzoni,
            alt: "Rio delle Amazzoni circondata da una densa foresta."
        },
        lat: -3.4653,
        lon: -58.38,
    },
    {
        id: 'p12',
        titolo: 'Rovine Greche',
        image: {
            src: rovineGreche,
            alt: "Templi dell'antica Grecia."
        },
        lat: 37.9715,
        lon: 23.7257,
    },
    {
        id: 'p13',
        titolo: 'Savana Africana',
        image: {
            src: savana,
            alt: "Animali selvaggi liberi nella savana."
        },
        lat: -2.153,
        lon: 34.6857,
    },
    {
        id: 'p14',
        titolo: 'Statua della Libertà',
        image: {
            src: statuaLiberta,
            alt: "Statua della libertà."
        },
        lat: 40.6892,
        lon: -74.0445,
    },
    {
        id: 'p15',
        titolo: 'Strade parigine',
        image: {
            src: stradeParigine,
            alt: "Strade tipiche di Parigi con edifici storici e bar."
        },
        lat: 48.8566,
        lon: 2.3522,
    },
    {
        id: 'p16',
        titolo: 'Taj Mahal',
        image: {
            src: tajMahal,
            alt: "Iconico Taj Mahal riflesso nell'acqua circostante durante l'alba."
        },
        lat: 27.1751,
        lon: 78.0421,
    },
    {
        id: 'p17',
        titolo: 'Templi Giapponesi',
        image: {
            src: templiGiapponesi,
            alt: "Antico tempio giapponese circondato dal fogliame autunnale."
        },
        lat: 34.9949,
        lon: 135.785,
    },
    {
        id: 'p18',
        titolo: 'Tour Eiffel',
        image: {
            src: tourEiffel,
            alt: "Tour Eiffel vista dai viali alberati."
        },
        lat: 48.8584,
        lon: 2.2945,
    },
    {
        id: 'p19',
        titolo: 'Canali di Venezia',
        image: {
            src: venezia,
            alt: 'Acque scintillanti dei canali veneziani mentre le gondole scorrono al tramonto.'
        },
        lat: 45.4408,
        lon: 12.3155,
    }
]