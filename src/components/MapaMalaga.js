// components/MapaMalaga.js
import { useState } from 'react';
import MapChart from './chart/MapChart';


const MapaMalaga = () => {
  // Array de posiciones GPS
  const activePopUp = true;
  const data = [
    {
      "id": 1,
      "lat": 40.4168,
      "lon": -3.7038,
      "title": "Punto 1 (Madrid)",
      "date": "Tue Oct 27 2020 10:15:23 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 2,
      "lat": 41.3851,
      "lon": 2.1734,
      "title": "Punto 2 (Barcelona)",
      "date": "Wed Mar 15 2017 14:28:57 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 3,
      "lat": 39.4624,
      "lon": -0.3760,
      "title": "Punto 3 (Valencia)",
      "date": "Thu Dec 05 2019 08:42:12 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 4,
      "lat": 37.3891,
      "lon": -5.9845,
      "title": "Punto 4 (Sevilla)",
      "date": "Fri Aug 21 2015 17:56:48 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 5,
      "lat": 43.3603,
      "lon": -5.8448,
      "title": "Punto 5 (Oviedo)",
      "date": "Sat Jun 08 2024 12:30:05 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 6,
      "lat": 36.7202,
      "lon": -4.4203,
      "title": "Punto 6 (Málaga)",
      "date": "Sun Apr 18 2021 21:10:32 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 7,
      "lat": 38.3452,
      "lon": -0.4815,
      "title": "Punto 7 (Alicante)",
      "date": "Mon Feb 29 2016 09:55:19 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 8,
      "lat": 42.8783,
      "lon": -1.6463,
      "title": "Punto 8 (Pamplona)",
      "date": "Tue Sep 10 2018 16:03:41 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 9,
      "lat": 43.2630,
      "lon": -2.9350,
      "title": "Punto 9 (Bilbao)",
      "date": "Wed Jul 01 2020 11:22:08 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 10,
      "lat": 37.1772,
      "lon": -3.5986,
      "title": "Punto 10 (Granada)",
      "date": "Thu Nov 26 2015 19:47:35 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 11,
      "lat": 43.5321,
      "lon": -5.6618,
      "title": "Punto 11 (Gijón)",
      "date": "Fri May 12 2023 13:18:50 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 12,
      "lat": 39.8629,
      "lon": -4.0240,
      "title": "Punto 12 (Toledo)",
      "date": "Sat Jan 02 2016 07:33:27 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 13,
      "lat": 39.0992,
      "lon": -6.8048,
      "title": "Punto 13 (Cáceres)",
      "date": "Sun Aug 09 2020 20:01:14 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 14,
      "lat": 41.6561,
      "lon": -4.7245,
      "title": "Punto 14 (Valladolid)",
      "date": "Mon Mar 22 2021 15:45:59 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 15,
      "lat": 42.4668,
      "lon": -2.4458,
      "title": "Punto 15 (Logroño)",
      "date": "Tue Dec 15 2017 11:09:22 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 16,
      "lat": 38.9047,
      "lon": -7.0090,
      "title": "Punto 16 (Badajoz)",
      "date": "Wed Jul 24 2019 18:27:03 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 17,
      "lat": 42.2351,
      "lon": -8.7111,
      "title": "Punto 17 (Vigo)",
      "date": "Thu Jun 04 2020 09:14:46 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 18,
      "lat": 36.5298,
      "lon": -6.2929,
      "title": "Punto 18 (Cádiz)",
      "date": "Fri Apr 09 2021 16:39:18 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    {
      "id": 19,
      "lat": 43.0039,
      "lon": -7.5501,
      "title": "Punto 19 (Lugo)",
      "date": "Sat Feb 13 2016 12:06:53 GMT+0100 (Central European Standard Time)",
      "video": ""
    },
    {
      "id": 20,
      "lat": 40.7548,
      "lon": -6.6022,
      "title": "Punto 20 (Salamanca)",
      "date": "Sun Sep 27 2020 20:50:37 GMT+0200 (Central European Summer Time)",
      "video": ""
    },
    // 10 puntos distribuidos por el resto del mundo (fuera de la Península Ibérica)
    {
      id: 21,
      lat: 51.5074,
      lon: -0.1278,
      title: 'Punto 21 (Londres, UK)',
      date: 'Tue Jan 13 2025 12:00:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 22,
      lat: 40.7128,
      lon: -74.0060,
      title: 'Punto 22 (Nueva York, USA)',
      date: 'Thu Feb 20 2025 09:30:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 23,
      lat: -33.8688,
      lon: 151.2093,
      title: 'Punto 23 (Sídney, Australia)',
      date: 'Wed Mar 12 2025 14:10:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 24,
      lat: 48.8566,
      lon: 2.3522,
      title: 'Punto 24 (París, Francia)',
      date: 'Fri Apr 10 2025 10:00:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 25,
      lat: 35.6762,
      lon: 139.6503,
      title: 'Punto 25 (Tokio, Japón)',
      date: 'Thu Feb 27 2025 06:30:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 26,
      lat: -22.9068,
      lon: -43.1729,
      title: 'Punto 26 (Río de Janeiro, Brasil)',
      date: 'Mon Apr 06 2025 18:20:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 27,
      lat: 39.9042,
      lon: 116.4074,
      title: 'Punto 27 (Pekín, China)',
      date: 'Tue Mar 03 2025 13:40:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 28,
      lat: -34.6037,
      lon: -58.3816,
      title: 'Punto 28 (Buenos Aires, Argentina)',
      date: 'Sat Feb 15 2025 09:00:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 29,
      lat: 55.7558,
      lon: 37.6173,
      title: 'Punto 29 (Moscú, Rusia)',
      date: 'Fri Jan 24 2025 22:30:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 30,
      lat: -34.9285,
      lon: 138.6007,
      title: 'Punto 30 (Adelaida, Australia)',
      date: 'Tue Feb 17 2025 15:00:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 31,
      lat: 40.7306,
      lon: -73.9352,
      title: 'Punto 31 (Brooklyn, USA)',
      date: 'Mon Mar 09 2025 08:00:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 32,
      lat: 34.0522,
      lon: -118.2437,
      title: 'Punto 32 (Los Ángeles, USA)',
      date: 'Thu Feb 06 2025 12:45:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 33,
      lat: 51.1657,
      lon: 10.4515,
      title: 'Punto 33 (Alemania)',
      date: 'Tue Feb 04 2025 14:20:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 34,
      lat: 37.9838,
      lon: 23.7275,
      title: 'Punto 34 (Atenas, Grecia)',
      date: 'Fri Jan 31 2025 18:00:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 35,
      lat: 40.7488,
      lon: -73.9857,
      title: 'Punto 35 (Empire State, Nueva York, USA)',
      date: 'Sat Mar 14 2025 16:20:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 36,
      lat: -33.4489,
      lon: -70.6693,
      title: 'Punto 36 (Santiago, Chile)',
      date: 'Thu Mar 19 2025 11:00:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 37,
      lat: 55.9533,
      lon: -3.1883,
      title: 'Punto 37 (Edimburgo, Escocia)',
      date: 'Tue Feb 11 2025 17:50:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 38,
      lat: 40.7484,
      lon: -73.9857,
      title: 'Punto 38 (Times Square, Nueva York, USA)',
      date: 'Mon Jan 27 2025 22:15:00 GMT+0100 (Central European Standard Time)',
      video: ''
    },
    {
      id: 39,
      lat: 36.7909,
      lon: -4.5599,
      title: 'Punto 39 (Cártama)',
      date: 'Sun Jan 05 2025 14:52:19 GMT+0100 (Central European Standard Time)'
    },
    {
      id: 40,
      lat: 36.6257,
      lon: -4.4452,
      title: 'Punto 40 (Málaga)',
      date: 'Fri Mar 07 2025 06:24:02 GMT+0100 (Central European Standard Time)'
    },
    {
      id: 41,
      lat: 36.7324,
      lon: -4.7205,
      title: 'Punto 41 (Mijas)',
      date: 'Sun Nov 17 2024 14:41:10 GMT+0100 (Central European Standard Time)'
    },
    {
      id: 42,
      lat: 36.7932,
      lon: -4.6821,
      title: 'Punto 42 (Benalmádena)',
      date: 'Tue Jan 07 2025 23:34:39 GMT+0100 (Central European Standard Time)',
      video:''
    },
    {
      id: 43,
      lat: 36.5533,
      lon: -4.5759,
      title: 'Punto 43 (Coín)',
      date: 'Wed Sep 18 2024 03:36:42 GMT+0200 (Central European Summer Time)'
    },
    {
      id: 44,
      lat: 36.6294,
      lon: -4.6482,
      title: 'Punto 44 (Marbella)',
      date: 'Wed Feb 26 2025 11:56:08 GMT+0100 (Central European Standard Time)'
    },
    {
      id: 45,
      lat: 36.6679,
      lon: -4.7072,
      title: 'Punto 45 (Torremolinos)',
      date: 'Tue Oct 15 2024 12:57:03 GMT+0200 (Central European Summer Time)'
    },
    {
      id: 46,
      lat: 36.6499,
      lon: -4.5063,
      title: 'Punto 46 (Ronda)',
      date: 'Tue Dec 03 2024 12:14:36 GMT+0100 (Central European Standard Time)'
    },
    {
      id: 47,
      lat: 36.7736,
      lon: -4.4365,
      title: 'Punto 47 (Málaga)',
      date: 'Sun Feb 09 2025 05:59:42 GMT+0100 (Central European Standard Time)'
    },
    {
      id: 48,
      lat: 36.7484,
      lon: -4.4832,
      title: 'Punto 48 (Málaga)',
      date: 'Sun Sep 15 2024 04:41:55 GMT+0200 (Central European Summer Time)'
    },
    {
      id: 49,
      lat: 36.7632,
      lon: -4.5679,
      title: 'Punto 49 (Fuengirola)',
      date: 'Mon Sep 09 2024 00:23:54 GMT+0200 (Central European Summer Time)'
    },
    {
      id: 50,
      lat: 41.577591, lon: 2.443787,
      title: 'Punto 50 (Mataró)',
      date: 'Sun Jan 26 2025 22:25:47 GMT+0100 (Central European Standard Time)'
    }
  ];



  return (
    <MapChart data={data} activePopUp={activePopUp} zoom={6}/>
  );
};

export default MapaMalaga;
