# Sync con NTP server

Un ejemplo de sincronización con servidor NTP de la Armada Española (hora.roa.es:123) usando Expresss

Este ejemplo implementa:
* Un endpoint desde el que obtener la hora (definido en [hora.js](/routes/hora.js) y disponible en `/hora`)
* Un script donde se muestra cómo sacarla y mantenerla actualizada [en el front](/public/javascripts/getServerTime.js)

He deployado [una demo en Heroku](https://protected-peak-71108.herokuapp.com)

## Instalación
Clonar el repo:

```
npm install
```

## Autor
Miguel Martín  - Universidad de Zaragoza

## Agradecimientos
Gracias a Clément y Callan por desarrollar este [ntp-client](https://www.npmjs.com/package/ntp-client)

## Licencia
[EUPL-1.2](/LICENCE.txt)