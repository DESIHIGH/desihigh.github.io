---
name: Teachers
lang: fr
---

Bienvenue dans le **Guide des enseignants** de DESI High ! Cette page est là pour vous aider à prendre en main les outils et ressources disponibles via DESI High.
Que vous souhaitiez en savoir plus sur le programme DESI High, que vous ayez besoin d'aide pour démarrer avec les notebooks, ou que vous cherchiez un soutien supplémentaire, nous sommes là pour vous aider.

<div class="notification is-danger is-dark">
    <button class="delete"></button>
    <div class="is-size-5 has-text-weight-bold">
        <span class="icon">
            <i class="fa-solid fa-hat-wizard"></i>
        </span>
        Vous ne passerez pas !
    </div>
    Étudiants, attention, cette page est destinée aux enseignants et éducateurs. Si vous êtes étudiant, veuillez vous référer à la <a href="intro.html">page d'introduction</a> ou à du <a href="curriculum.html">curriculum</a> à la place. 
</div>


### Curriculums et notebooks
Nos [curriculums](curriculum.html) sont conçus comme une suite de notebooks, chacun se concentrant sur des sujets ou des compétences spécifiques. Vous pouvez en choisir un et suivre les notebooks à l'intérieur, ou vous pouvez choisir le ou les notebook(s) qui vous intéressent pour adapter l'expérience d'apprentissage aux besoins de vos élèves.

Chaque notebook est autonome, permettant une exploration indépendante ou une intégration dans une série plus large. Avec des exercices interactifs et des applications pratiques, les étudiants peuvent s'investir à fond dans les exercices.

<span class="icon has-text-info">
  <i class="fas fa-info-circle"></i>
</span>
*Les solutions des exercices sont fournies en bas de chaque notebook dans une section repliée.*

Chaque notebook comprend une section d'introduction qui décrit les objectifs d'apprentissage et les prérequis pour compléter les activités.
**Nous vous encourageons à tester les exercices** (avec ou sans les solutions) avant de les assigner à vos élèves, pour vous assurer qu'ils sont adaptés au niveau de vos élèves et au temps dont vous disposez.

A côté de chaque notebook sur la page des curriculum, vous trouverez une étiquette indiquant le **niveau de difficulté** estimé :
- <span class="tag is-success">Facile</span> Niveau estimé **Lycée** : Convient aux débutants avec peu ou pas d'expérience préalable. 
- <span class="tag is-warning">Moyen</span> Niveau estimé **Licence** : Nécessite quelques connaissances ou expériences préalables.
- <span class="tag is-danger">Difficile</span> Niveau estimé **Master** : Conçu pour ceux qui ont une solide formation dans le sujet.

<span class="icon has-text-info">
  <i class="fas fa-info-circle"></i>
</span>
*Les données utilisées dans la plupart des notebooks proviennent de la collaboration DESI. Certains notebooks peuvent utiliser des données simulées ou des données d'autres enquêtes pour des exercices spécifiques.*


### Limitations et support
Nous utilisons [Binder](https://mybinder.org/) pour fournir un environnement cloud pour l'exécution des notebooks Jupyter. Bien que Binder soit un outil puissant, il présente certaines limitations, notamment :

- **Limitations de ressources** : Binder dispose d'une quantité limitée de ressources (CPU, mémoire) disponibles pour chaque utilisateur. Si votre notebook nécessite plus de ressources que ce que Binder peut fournir, vous pouvez rencontrer des performances lentes ou des délais d'attente.
- **Timeouts d'inactivité** : Si une session Binder est inactive pendant une certaine période, elle peut être automatiquement terminée.
- **Limites d'utilisateurs** : Binder peut prendre en charge jusqu'à 100 utilisateurs simultanément sur un dépôt donné. Si vous avez une classe plus grande (Masterclass, conférence, etc.), envisagez de diviser les étudiants en groupes pour travailler sur les mêmes ordinateurs.

<span class="icon has-text-primary">
  <i class="fas fa-bookmark"></i>
</span>
*Vous pouvez consulter les politiques d'utilisation de Binder [ici](https://mybinder.readthedocs.io/en/latest/about/user-guidelines.html).*


### Package et environnements
Si vous souhaitez exécuter les notebooks localement ou sur votre propre serveur, les notebooks desihigh sont conçus pour fonctionner dans un environnement Python 3.11 très standard. Toutes les dépendances sont gérées par l'installation du package `desihigh`, via la commande suivante :

`pip install git+https://github.com/DESIHIGH/desihigh/@minimal` (ou `pip install .` si vous avez cloné le dépôt)

Les notebooks, les données et le package sont disponibles sur [GitHub](https://github.com/DESIHIGH/desihigh).

<span class="icon-text has-text-warning">
    <span class="icon has-text-warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
    </span>
    Attention :
</span>
*Les notebooks ont des chemins de fichiers relatifs entre eux, vers les fichiers de données et les images. Pour les exécuter localement, vous devez cloner le dépôt et conserver la même structure de dossiers.*


### Vous n'êtes pas seul !
Si vous avez besoin d'une assistance supplémentaire, notre équipe est là pour vous aider. Que vous soyez intéressé par une intervention en personne, une session à distance, ou une formation par un membre de l'équipe DESI High, nous vous encourageons à nous contacter.

Nous sommes ouverts aux retours et aux contributions pour améliorer les ressources et le matériel pédagogique. N'hésitez pas à partager vos idées ou suggestions avec nous. Vous pouvez nous contacter via notre [page de contact](contact.html) ou le [forum]({{ site.links.forum }}).

Enfin, nous proposons des ressources additionnelles, telles que des images, des slides, et d'autres supports pour vous aider dans vos présentations. Explorez les pour approfondir votre compréhension et enrichir votre expérience de classe.

<span class="icon has-text-primary">
    <i class="fa-solid fa-screwdriver-wrench"></i>
</span>
*Les ressources pour les présentations sont disponibles dans la [page des ressources](resources.html).*

------

**Merci de faire partie de la communauté DESI High !**. Ensemble, nous pouvons inspirer la prochaine génération d'élèves et de chercheurs !

<br/>
<div class="notification is-primary">
    <button class="delete"></button>
    <span class="icon">
        <i class="fa-solid fa-circle-question"></i>
    </span> 
    Avons-nous oublié quelque chose ? Consultez notre <a href="faq.html">FAQ</a>, la réponse s'y trouve peut-être. Sinon, n'hésitez pas à <a href="contact.html">nous contacter</a> !
</div>