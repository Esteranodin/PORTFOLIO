---
title: Fightnoob
publishDate: février 2025
img: /assets/work/fightnoob.jpg
img_alt: Vue du site
link: https://marion-fightnoob.pro4.garage404.com/public/choiceHero.php
description: |
  Application web d'un petit jeu de combat 
tags:
  - Dev
  - POO
  - Vanilla
---

### Premier TP solo en POO

Le projet **FightNoob** est un TP qui a permis d'utiliser les concepts fondamentaux de la programmation orientée objet.  
Petit jeu de combat interactif avec une interface simple qui permet aux joueurs de choisir un héros, puis de l'envoyer combattre des monstres.  
Combats au tour par tour où chaque personnage (héros ou monstre) inflige des dégâts aléatoires, déterminés par des dés.

> Gestion des Combats

Les dégâts infligés sont déterminés par des dés, et chaque tour de combat met à jour les points de vie du héros et du monstre.
Lors de chaque combat, un fichier php est responsable de déterminer les résultats des dés pour le héros et le monstre. Les dégâts sont ensuite calculés en fonction des résultats des dés.

>Structure et Architecture

Le projet utilise une architecture modulaire avec des fichiers pour gérer l’autoloading des classes, la gestion des héros et des monstres via des repositories, et un gestionnaire de combats pour organiser la logique du jeu. Il est également prévu pour évoluer avec des ajouts de fonctionnalités comme des pouvoirs spéciaux, des statistiques pour les héros, et des animations.


*Technologies utilisées*  
* HTML : Structure de la page web.  
* CSS : Mise en forme de l'interface utilisateur.  
* JavaScript : Gérer les événements de combat, et mettre à jour dynamiquement les points de vie des héros et des monstres sans recharger la page.
* PHP :  Gèrent les opérations principales du jeu, comme la gestion des héros, des monstres, des combats et la communication avec la base de données.

##### Ce projet permet de manière amusante et interactive de simuler un pad de batterie directement dans le navigateur.