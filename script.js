// --- LOGIQUE DE NAVIGATION ---
// Analogie C : C'est comme un switch/case géant pour afficher le bon écran
function naviguerVers(idSection) {
    // 1. On cache toutes les sections
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
    });

    // 2. On affiche la section demandée
    const sectionVisee = document.getElementById(idSection);
    if (sectionVisee) {
        sectionVisee.classList.add('active');
    }

    // Sauvegarder la section courante dans localStorage
    localStorage.setItem('sectionCourante', idSection);

    // On ferme le menu mobile si ouvert (Bonus UX)
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
        new bootstrap.Collapse(navbar).toggle();
    }

    // Remonter en haut de page
    window.scrollTo(0, 0);
}

// --- Restaurer la section après rafraîchissement ---
window.addEventListener('DOMContentLoaded', function () {
    const sectionSauvegardee = localStorage.getItem('sectionCourante');
    if (sectionSauvegardee) {
        naviguerVers(sectionSauvegardee);
        // Si c'était le CV, recharger aussi la langue
        if (sectionSauvegardee === 'cv') {
            const langueSauvegardee = localStorage.getItem('langueCV') || 'fr';
            afficherCV(langueSauvegardee);
        }
    }
});

// --- LOGIQUE DU CV ---
function afficherCV(langue) {
    const conteneur = document.getElementById('contenu-cv');

    // Sauvegarder la langue choisie
    localStorage.setItem('langueCV', langue);

    // On utilise innerHTML pour injecter la structure (DOM Manipulation)
    if (langue === 'fr') {
        conteneur.innerHTML = `
            <div class="row">
                <div class="col-md-8">
                    <h3 class="text-primary border-bottom pb-2">Formation</h3>
                    <div class="mb-3">
                        <h5>Diplôme d'Ingénieur en Informatique et Statistique</h5>
                        <span class="text-muted">Polytech Lille, Lille, France | 2025 - 2028</span>
                    </div>
                    <div class="mb-3">
                        <h5>Licence de Mathématiques</h5>
                        <span class="text-muted">Université de Lille, Lille, France | 2023 - 2025</span>
                    </div>
                    <div class="mb-3">
                        <h5>Baccalauréat Libanais</h5>
                        <span class="text-muted">Lycée Rafic Hariri - Saida, Liban | 2022</span>
                        <p>Spé Sciences de la Vie. Mention : Très Bien</p>
                    </div>

                    <h3 class="text-primary border-bottom pb-2 mt-4">Projets</h3>
                    <div class="mb-3">
                        <h5>Graphes et Ordonnancements</h5>
                        <span class="text-muted">Projet académique | 2026</span>
                        <ul>
                            <li>Implémentation en C d'un algorithme d'ordonnancement (tri topologique + Bellman) pour calculer les dates au plus tôt et au plus tard sur un graphe de tâches.</li>
                            <li>Identification automatique du chemin critique et des marges à partir d'une structure modulaire (listes chaînées, fichier <code>.h</code>).</li>
                            <li>Génération d'un rapport de résultats avec durée minimale du projet et classification des tâches critiques.</li>
                        </ul>
                    </div>

                    <div class="mb-3">
                        <h5>Projet algorithmique C : Hasami Shogi</h5>
                        <span class="text-muted">Projet académique | 2026</span>
                        <ul>
                            <li>Développement d'un jeu console en C en appliquant des règles métier complexes : déplacements, captures et conditions de victoire.</li>
                            <li>Mise en place de tests automatisés par redirection de flux pour vérifier la robustesse du programme.</li>
                        </ul>
                    </div>

                    <div class="mb-3">
                        <h5>Dashboard Power BI &amp; Data Viz</h5>
                        <span class="text-muted">Projet data | 2025</span>
                        <ul>
                            <li>Nettoyage, dédoublonnage et structuration de données brutes avec Power Query afin d'améliorer la qualité des analyses.</li>
                            <li>Création de tableaux de bord interactifs sous Power BI avec indicateurs clés pour faciliter le suivi et la prise de décision.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Système d'information aérien</h5>
                        <span class="text-muted">Projet académique | 2025</span>
                        <ul>
                            <li>Conception d'une base de données relationnelle sous PostgreSQL à partir d'un modèle MCD/MLD.</li>
                            <li>Développement d'une application web intégrant des requêtes SQL pour gérer les vols, billets, équipages et utilisateurs.</li>
                        </ul>
                    </div>
                    
                    <h3 class="text-primary border-bottom pb-2 mt-4">Expériences Professionnelles</h3>
                    <div class="mb-3">
                        <h5>Stagiaire Initiation à la Recherche – Estimation de paramètres et optimisation</h5>
                        <span class="text-muted">CRIStAL, équipe CFHP – Université de Lille | 06/2026 – Présent</span>
                        <ul>
                            <li>Étude de méthodes d'estimation de paramètres à partir de systèmes dynamiques et d'équations intégrales.</li>
                            <li>Développement d'expérimentations en Python pour comparer la performance et la stabilité de différentes approches.</li>
                            <li>Participation à l'amélioration d'un package existant dans un contexte de calcul scientifique et d'optimisation.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Professeur de mathématiques</h5>
                        <span class="text-muted">Cours particuliers | 2024 – Présent</span>
                        <ul>
                            <li>Accompagnement d'élèves du secondaire dans la compréhension et la résolution de problèmes mathématiques.</li>
                            <li>Vulgarisation de notions abstraites en méthodes de résolution claires et structurées.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Assistant recrutement</h5>
                        <span class="text-muted">AlWassim Career Leaders – Saïda, Liban | 06/2022 – 08/2022</span>
                        <ul>
                            <li>Gestion et mise à jour d'une base de données candidats.</li>
                            <li>Analyse et filtrage de candidatures selon les exigences techniques des postes.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4 border-start">
                    <h4 class="text-success">Compétences</h4>
                    <h5 class="text-primary">Data</h5>
                    <p>PostgreSQL, Power BI, DAX, Power Query, R, Pandas, NumPy</p>

                    <h5 class="text-primary">Programmation</h5>
                    <p>Python, C, Java, Git</p>

                    <h5 class="text-primary">Outils</h5>
                    <p>Microsoft Office, VSCode, Antigravity</p>

                    <h4 class="text-info">Langues</h4>
                    <p>Arabe (natif)<br>Français (B2)<br>Anglais (C1 – TOEIC 920)<br>Allemand (A2)</p>

                    <h4 class="text-warning">Certifications</h4>
                    <p>PIX Niveau Avancé (2025)<br>Teens Who Code (2018)</p>

                    <h4 class="text-danger">Centres d'intérêt</h4>
                    <p>Apprentissage autonome sur UDEMY<br>Football<br>Lecture de mangas<br>Séries / Films</p>
                </div>
            </div>
        `;
    } else if (langue === 'en') {
        conteneur.innerHTML = `
            <div class="row">
                <div class="col-md-8">
                    <h3 class="text-primary border-bottom pb-2">Education</h3>
                    <div class="mb-3">
                        <h5>Engineering Degree in Computer Science and Statistics</h5>
                        <span class="text-muted">Polytech Lille, Lille, France | 2025 - 2028</span>
                    </div>
                    <div class="mb-3">
                        <h5>Bachelor's Degree in Mathematics</h5>
                        <span class="text-muted">University of Lille, Lille, France | 2023 - 2025</span>
                    </div>
                    <div class="mb-3">
                        <h5>Lebanese Baccalaureate</h5>
                        <span class="text-muted">Rafic Hariri High School - Saida, Lebanon | 2022</span>
                        <p>Life Sciences Major. Honors: Highest Distinction</p>
                    </div>

                    <h3 class="text-primary border-bottom pb-2 mt-4">Projects</h3>
                    <div class="mb-3">
                        <h5>Graphs and Scheduling</h5>
                        <span class="text-muted">Academic Project | 2026</span>
                        <ul>
                            <li>Implemented a C scheduling algorithm (topological sort + Bellman) to compute earliest and latest dates on a task graph.</li>
                            <li>Automatic identification of the critical path and margins using a modular architecture (linked lists, <code>.h</code> file).</li>
                            <li>Generated a results report with minimum project duration and classification of critical tasks.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Algorithmic C Project: Hasami Shogi</h5>
                        <span class="text-muted">Academic Project | 2026</span>
                        <ul>
                            <li>Developed a console game in C applying complex business rules: moves, captures and victory conditions.</li>
                            <li>Implemented automated tests via stream redirection to verify program robustness.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Power BI Dashboard &amp; Data Viz</h5>
                        <span class="text-muted">Data Project | 2025</span>
                        <ul>
                            <li>Cleaned, deduplicated and structured raw data with Power Query to improve analysis quality.</li>
                            <li>Created interactive Power BI dashboards with key indicators to facilitate monitoring and decision-making.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Airline Information System</h5>
                        <span class="text-muted">Academic Project | 2025</span>
                        <ul>
                            <li>Designed a relational database under PostgreSQL from a CDM/LDM model.</li>
                            <li>Developed a web application integrating SQL queries to manage flights, tickets, crews and users.</li>
                        </ul>
                    </div>
                    
                    <h3 class="text-primary border-bottom pb-2 mt-4">Professional Experience</h3>
                    <div class="mb-3">
                        <h5>Research Internship – Parameter Estimation and Optimization</h5>
                        <span class="text-muted">CRIStAL, CFHP team – University of Lille | 06/2026 – Present</span>
                        <ul>
                            <li>Study of parameter estimation methods from dynamical systems and integral equations.</li>
                            <li>Development of Python experiments to compare the performance and stability of different approaches.</li>
                            <li>Contribution to the improvement of an existing package in a scientific computing and optimization context.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Mathematics Tutor</h5>
                        <span class="text-muted">Private lessons | 2024 – Present</span>
                        <ul>
                            <li>Supporting secondary school students in understanding and solving mathematical problems.</li>
                            <li>Breaking down abstract concepts into clear and structured problem-solving methods.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Recruitment Assistant</h5>
                        <span class="text-muted">AlWassim Career Leaders – Saida, Lebanon | 06/2022 – 08/2022</span>
                        <ul>
                            <li>Managing and updating a candidate database.</li>
                            <li>Analyzing and filtering applications against technical job requirements.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4 border-start">
                    <h4 class="text-success">Skills</h4>
                    <h5 class="text-primary">Data</h5>
                    <p>PostgreSQL, Power BI, DAX, Power Query, R, Pandas, NumPy</p>

                    <h5 class="text-primary">Programming</h5>
                    <p>Python, C, Java, Git</p>

                    <h5 class="text-primary">Tools</h5>
                    <p>Microsoft Office, VSCode, Antigravity</p>

                    <h4 class="text-info">Languages</h4>
                    <p>Arabic (Native)<br>French (B2)<br>English (C1 – TOEIC 920)<br>German (A2)</p>

                    <h4 class="text-warning">Certifications</h4>
                    <p>PIX Advanced Level (2025)<br>Teens Who Code (2018)</p>

                    <h4 class="text-danger">Interests</h4>
                    <p>Self-learning on UDEMY<br>Football<br>Manga reading<br>Series / Movies</p>
                </div>
            </div>
        `;
    }
}

// --- TOGGLE MLD ACCORDION ---
function toggleMLD() {
    const content = document.getElementById('mld-accordion');
    const btn = document.querySelector('.btn-mld-toggle');
    content.classList.toggle('show');
    btn.classList.toggle('active');
}

// --- LIGHTBOX ---
function openLightbox(src) {
    const overlay = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('lightbox');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
});

// Attach click to all project images
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project-img').forEach(function (img) {
        img.addEventListener('click', function () {
            openLightbox(this.src);
        });
    });
});

// --- BOUTON RETOUR EN HAUT (Scroll event) ---
window.onscroll = function () {
    const btn = document.getElementById("btn-back-to-top");
    if (btn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
};
