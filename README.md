# Framework

## Prérequis

* NPM
* Gulp
* Sass

## Installation

Ce repo contient uniquement les fichiers sources, ces derniers seront compilés afin de générer les fichiers définitifs. Il sera nécessaire d'installer un gestionnaire de tâches pour faciliter le travail de compilation.

GULP est le gestionnaire de tâches proposés, [vous pouvez télécharger les fichiers](https://github.com/Drupalito/gulp_tasks). Vous devrez configurer le fichier `config.xml` pour le faire fonctionner.

## Prise en main

[TODO]

## Architecture

### Fonts/

Dossier spécifique dédié aux fonts.

### Images/

Dossier spécifique dédié aux images.

### Js/

Dossier didié aux scripts Javascript.

### Libraries/

Dossier où placer les scripts externes. Afin de ne pas les mélanger avec les autres fichiers. Seront installés uniquement les librairies qui ne sont pas écrites par vous même.

### Dossier `scss/`

#### Base

Le dossier de base contient le contenu standard. Il contient les styles que chaque page de votre site devrait recevoir. On trouve un reset, la déclaration des classes dites helpers, la réinitialisation des formulaires...

#### Components

Le dossier `components/`. Il contient des éléments autonome pouvant être surchargés dans un module.

#### Helpers

Le dossier `helpers/` rassemble toutes les mixins et fonctions utilisés dans le projet. **Ce dossier contient également tous les fichiers de configuration, préfixé `_config.FILENAME.scss`.** Toutes les variables globales du projet s'y trouvent (tailles typographies, schémas de couleurs, grille et formulaire).

#### Modules

Il s'agit de fonctionnalités spécifiques. Les modules contiennent des styles de micro-layouts.

#### Themes

Regroupe les styles dédiés au thème du site. Ils sont spécifique au projet, s'assurer qu'ils sont bien bien nécessaire uniquement au thème.
