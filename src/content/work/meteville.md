---
title: Météville
publishDate: février 2025
img: /assets/work/meteville.jpg
img_alt: Vue du site
link: https://meteville.vercel.app/
description: |
  Application météo avec géolocalisation et prévisions sur quelques jours
tags:
  - React
  - API météo
  - Front
---

### Premier TP React 

**MétéVille** est une application web développée avec React qui permet aux utilisateurs de consulter les prévisions météorologiques actuelles et sur plusieurs jours pour n'importe quelle ville. L'application offre également une fonctionnalité de géolocalisation pour obtenir la météo à l'emplacement actuel de l'utilisateur.

>Structure et Architecture

Application frontend React organisée en composants **modulaires** et réutilisables

Architecture basée sur les hooks React et le Context API pour la **gestion d'état**

Utilisation de **hooks personnalisés** (useWeather) pour isoler la logique d'accès aux données

Séparation claire des préoccupations avec une **structure** de dossiers **organisée** (components, contexts, hooks, styles, utils)

Mise en cache des données météo avec expiration pour optimiser les performances


*Technologies utilisées*  
* React 19 : création de l'interface utilisateur avec hooks et context API.  
* Vite : bundler et serveur de développement.
* WeatherAPI : API externe pour récupérer les données météorologiques.
* API Geolocation : Pour la fonctionnalité de géolocalisation.




