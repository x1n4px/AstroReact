// components/MapaMalaga.js
import { useState } from 'react';
import MapChart from './chart/MapChart';


const MapaMalaga = () => {
  // Array de posiciones GPS
  const activePopUp = true;
  const data =
    [
      {
        id: 1,
        lat: 36.7213,
        lon: -4.4216,
        title: 'Punto 1 (Málaga)',
        date: 'Tue Jan 21 2025 01:24:00 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 2,
        lat: 36.7741,
        lon: -4.428,
        title: 'Punto 2 (Málaga)',
        date: 'Thu Dec 26 2024 09:21:02 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 3,
        lat: 36.7185,
        lon: -4.4204,
        title: 'Punto 3 (Málaga)',
        date: 'Thu Feb 13 2025 05:06:55 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 4,
        lat: 36.4479,
        lon: -4.9282,
        title: 'Punto 4 (Rincón de la Victoria)',
        date: 'Wed Dec 18 2024 22:32:47 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 5,
        lat: 36.695,
        lon: -4.4782,
        title: 'Punto 5 (Teatinos)',
        date: 'Fri Dec 27 2024 22:46:00 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 6,
        lat: 36.7272,
        lon: -4.424,
        title: 'Punto 6 (Málaga)',
        date: 'Fri Jan 17 2025 21:21:35 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 7,
        lat: 36.8996,
        lon: -4.4946,
        title: 'Punto 7 (Antequera)',
        date: 'Mon Jan 13 2025 22:42:08 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 8,
        lat: 36.9882,
        lon: -4.5313,
        title: 'Punto 8 (Archidona)',
        date: 'Sat Oct 26 2024 06:42:27 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 9,
        lat: 36.6724,
        lon: -4.5232,
        title: 'Punto 9 (Cártama)',
        date: 'Fri Jan 31 2025 17:05:55 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 10,
        lat: 36.8974,
        lon: -4.7312,
        title: 'Punto 10 (Villanueva de la Concepción)',
        date: 'Mon Feb 03 2025 06:38:58 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 11,
        lat: 36.591,
        lon: -4.4604,
        title: 'Punto 11 (Alhaurín el Grande)',
        date: 'Mon Jan 06 2025 12:21:17 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 12,
        lat: 36.5275,
        lon: -4.6547,
        title: 'Punto 12 (Alhaurín de la Torre)',
        date: 'Wed Oct 02 2024 20:39:23 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 13,
        lat: 36.5333,
        lon: -4.76,
        title: 'Punto 13 (Coín)',
        date: 'Wed Nov 06 2024 00:05:11 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 14,
        lat: 36.5892,
        lon: -4.7572,
        title: 'Punto 14 (Mijas)',
        date: 'Sat Oct 12 2024 21:02:08 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 15,
        lat: 36.8085,
        lon: -4.7047,
        title: 'Punto 15 (Benalmádena)',
        date: 'Sat Oct 12 2024 03:28:45 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 16,
        lat: 36.6672,
        lon: -4.7701,
        title: 'Punto 16 (Torrox)',
        date: 'Wed Oct 02 2024 08:14:32 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 17,
        lat: 36.6039,
        lon: -4.7479,
        title: 'Punto 17 (Fuengirola)',
        date: 'Thu Jan 23 2025 09:17:15 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 18,
        lat: 36.5223,
        lon: -4.941,
        title: 'Punto 18 (Ronda)',
        date: 'Tue Oct 22 2024 00:08:18 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 19,
        lat: 36.7319,
        lon: -4.5247,
        title: 'Punto 19 (La Cala del Moral)',
        date: 'Sat Oct 05 2024 07:38:26 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 20,
        lat: 36.7509,
        lon: -4.4287,
        title: 'Punto 20 (Málaga)',
        date: 'Sat Jan 04 2025 17:03:03 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 21,
        lat: 36.7945,
        lon: -4.4313,
        title: 'Punto 21 (Málaga)',
        date: 'Mon Oct 07 2024 14:59:39 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 22,
        lat: 36.5642,
        lon: -4.5912,
        title: 'Punto 22 (Cártama)',
        date: 'Thu Oct 24 2024 12:07:38 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 23,
        lat: 36.8247,
        lon: -4.5299,
        title: 'Punto 23 (Alhaurín de la Torre)',
        date: 'Wed Sep 18 2024 01:53:10 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 24,
        lat: 36.6025,
        lon: -4.5502,
        title: 'Punto 24 (Mijas Pueblo)',
        date: 'Tue Dec 17 2024 06:14:07 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 25,
        lat: 36.5615,
        lon: -4.5106,
        title: 'Punto 25 (Alhaurín el Grande)',
        date: 'Mon Feb 03 2025 20:26:21 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 26,
        lat: 36.6972,
        lon: -4.4084,
        title: 'Punto 26 (Málaga)',
        date: 'Tue Jan 28 2025 17:43:29 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 27,
        lat: 36.6575,
        lon: -4.4929,
        title: 'Punto 27 (Alora)',
        date: 'Sat Feb 01 2025 12:08:38 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 28,
        lat: 36.6351,
        lon: -4.7085,
        title: 'Punto 28 (Fuengirola)',
        date: 'Wed Jan 29 2025 13:51:00 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 29,
        lat: 36.8569,
        lon: -4.3878,
        title: 'Punto 29 (Antequera)',
        date: 'Sat Oct 12 2024 09:22:09 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 30,
        lat: 36.7318,
        lon: -4.6864,
        title: 'Punto 30 (Benalmádena)',
        date: 'Sun Nov 24 2024 03:56:42 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 31,
        lat: 36.8833,
        lon: -4.788,
        title: 'Punto 31 (Archidona)',
        date: 'Sun Sep 08 2024 04:24:17 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 32,
        lat: 36.7021,
        lon: -4.5632,
        title: 'Punto 32 (Cártama)',
        date: 'Fri Mar 07 2025 05:26:16 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 33,
        lat: 36.7424,
        lon: -4.6973,
        title: 'Punto 33 (Marbella)',
        date: 'Sat Jan 25 2025 00:57:38 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 34,
        lat: 36.6162,
        lon: -4.6075,
        title: 'Punto 34 (Málaga)',
        date: 'Fri Oct 25 2024 14:10:13 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 35,
        lat: 36.5462,
        lon: -4.6976,
        title: 'Punto 35 (Vélez-Málaga)',
        date: 'Sat Sep 21 2024 02:25:10 GMT+0200 (Central European Summer Time)'
      },
      {
        id: 36,
        lat: 36.6948,
        lon: -4.5222,
        title: 'Punto 36 (Málaga)',
        date: 'Wed Feb 12 2025 16:58:23 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 37,
        lat: 36.7619,
        lon: -4.4354,
        title: 'Punto 37 (Málaga)',
        date: 'Wed Nov 27 2024 21:33:59 GMT+0100 (Central European Standard Time)'
      },
      {
        id: 38,
        lat: 36.5535,
        lon: -4.7305,
        title: 'Punto 38 (Alhaurín de la Torre)',
        date: 'Sat Feb 22 2025 19:33:28 GMT+0100 (Central European Standard Time)'
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
        date: 'Tue Jan 07 2025 23:34:39 GMT+0100 (Central European Standard Time)'
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
        lat: 36.6973,
        lon: -4.7048,
        title: 'Punto 50 (Marbella)',
        date: 'Sun Jan 26 2025 22:25:47 GMT+0100 (Central European Standard Time)'
      }
    ];



  return (
    <MapChart data={data} activePopUp={activePopUp} />
  );
};

export default MapaMalaga;
