# Créer un fichier d'import

Dans ce challenge, nous allons créer un script JS pour importer les données présentes dans le fichier `part.json`.

Pour se faire nous allons utiliser le module "pg" et utiliser un ou des requêtes INSERT.

Le but ici est de comprendre comment insérer des données provenant d'une source .json en BDD via le langage Javascript.

Cela consiste à réaliser trois étapes :

- parcourir le fichier .json
- se connecter à la base de données
- effectuer le ou les INSERT

## Pourquoi le ou les INSERT ?

On peut faire un INSERT dans lequel on met l'ensemble de nos valeurs. Par exemple pour la table "name", on peut ajouter avec un seul INSERT l'ensemble des noms.

Il y a quatres tables, il faudra faire au minimum 4 INSERT.

On peut en faire plus si on souhaite insérer enregistrement par enregistrement.

Par exemple :

1. je récupère un nom
2. j'insère celui-ci en BDD

## AIDE

<details>
<summary>Besoin d'aide ?</summary>
Vous n'avez pas besoin d'utiliser un datamapper ou autre, tout est codé dans le fichier à commencer par le require de "pg".

Dans le même fichier, vous allez effectuer des ```js await client.query('INSERT ...',[value]);```

On commence par parcourir le fichier parts.json par clef.

Ces clefs vont nous donner la table dans laquelle enregistrer les valeurs.

Quand on est sur la clef "names" par exemple, on va parcourir les valeurs en utilisant le format :

data[key] où le key va correspondre à "names"

Les valeurs sont donc :

```js
[
    "un cheval",
    "la mairie de Neuilly-sur-Seine",
    "une huître",
    "Julie Andrieu",
    "Jacky et sa Subaru Impreza",
    "la gendarmerie hollandaise",
    "un chauve",
    "Simon",
    "2 chatons"
]
```

On parcourt maintenant ce tableau et à chaque "name" on enregistre dans la table "name".

</details>
