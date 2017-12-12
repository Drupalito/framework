# Framework

## Prérequis

## Installation

## Prise en main

## Architecture

### Libraries/

Dossier où placer les scripts externes. Afin de ne pas les mélanger avec les autres fichiers. Seront installés uniquement les librairies qui ne sont pas écrites par vous même.

### Dossier `scss/`

#### Base

Le dossier de base contient le contenu standard. Il contient les styles que chaque page de votre site devrait recevoir. On trouve un reset, la déclaration des classes dites helpers, la réinitialisation des formulaires...

#### Components

Le dossier `components/`. Il contient des éléments autonome pouvant être surchargés dans un module.

#### Helpers

Le dossier `helpers/` rassemble toutes mixins et functions utilisés dans le projet. Ce dossier contient également tous les fichiers de configuration, préfixé `_config.FILENAME.scss`. Toutes les variables globales du projet s'y trouvent (tailles typographie, schémas de couleurs, grille et formulaire).

#### Modules

Il s'agit de fonctionnalités spécifiques. Les modules contiennent des styles de micro-layouts.

#### Themes

Regroupe les styles dédiés au thème du site. Ils sont spécifique au projet, s'assurer qu'ils sont bien bien nécessaire uniquement au thème.
