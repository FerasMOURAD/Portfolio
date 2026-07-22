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
                        <h5>Licence Informatique – Parcours Data</h5>
                        <span class="text-muted">Université de Lille, Lille, France</span>
                    </div>
                    <div class="mb-3">
                        <h5>Baccalauréat Libanais – Sciences de la Vie</h5>
                        <span class="text-muted">Lycée Rafic Hariri – Saïda, Liban</span>
                        <p>Mention : Très Bien</p>
                    </div>

                    <h3 class="text-primary border-bottom pb-2 mt-4">Projets</h3>
                    <div class="mb-3">
                        <h5>Graphes &amp; Ordonnancement</h5>
                        <span class="text-muted">Projet académique | 2026</span>
                        <ul>
                            <li>Calcul du chemin critique sur des graphes de 300 000 tâches exécuté en &lt; 1 s via tri topologique + algorithme de Bellman; rapport auto-généré (marges, tâches critiques).</li>
                        </ul>
                    </div>

                    <div class="mb-3">
                        <h5>Hasami Shogi - Moteur de jeu console</h5>
                        <span class="text-muted">Projet académique | 2026</span>
                        <ul>
                            <li>Fuite mémoire certifiée Valgrind; règles métier complexes (captures, victoire) validées par suite de tests automatisés sans régression.</li>
                        </ul>
                    </div>

                    <div class="mb-3">
                        <h5>Dashboard Power BI &amp; Data Viz</h5>
                        <span class="text-muted">Projet personnel | 2025</span>
                        <ul>
                            <li>Réduction de 30% du temps de préparation; 5-10 KPI interactifs livrés pour le suivi et la prise de décision.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Système d'Information Aérien</h5>
                        <span class="text-muted">Projet académique | 2025</span>
                        <ul>
                            <li>BDD relationnelle avec 10+ entités et contraintes d'intégrité strictes sous PostgreSQL; app web avec vues dynamiques, jointures complexes et interfaces CRUD.</li>
                        </ul>
                    </div>
                    
                    <h3 class="text-primary border-bottom pb-2 mt-4">Expériences Professionnelles</h3>
                    <div class="mb-3">
                        <h5>Stagiaire Initiation à la Recherche</h5>
                        <span class="text-muted">CRIStAL, équipe CFHP – Université de Lille | 06/2026 – Présent</span>
                        <ul>
                            <li>Compare 4 méthodes d'estimation de paramètres sur systèmes dynamiques, garantissant la stabilité numérique via expérimentations Python reproductibles.</li>
                            <li>Optimise un package open source (refactoring, tests unitaires), améliorant la maintenabilité et la vitesse de traitement des algorithmes.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Stagiaire Data Analyst</h5>
                        <span class="text-muted">Spinneys – Saïda, Liban | 06/2023 – 08/2023</span>
                        <ul>
                            <li>Réduit de 30% le temps de préparation sur plusieurs milliers de lignes via nettoyage et déduplication Power Query.</li>
                            <li>Conçu 5-10 KPI interactifs sous Power BI (ventes, rotation stocks, ruptures) pour le pilotage opérationnel en temps réel.</li>
                            <li>Collaboré avec les équipes pour recueillir les besoins et aligner les rapports aux processus métier.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Assistant Recrutement</h5>
                        <span class="text-muted">AlWassim Career Leaders – Saïda, Liban | 06/2022 – 08/2022</span>
                        <ul>
                            <li>Traité et normalisé une base de 50+ candidatures, réduisant le temps de traitement de 20% par centralisation rigoureuse.</li>
                            <li>Alignement des profils candidats et exigences métiers dans un environnement international.</li>
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
                    <p>Power BI (UDEMY)<br>PIX Niveau Avancé (2025)<br>Teens Who Code (2018)</p>

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
                        <h5>Bachelor's Degree in Computer Science – Data Track</h5>
                        <span class="text-muted">University of Lille, Lille, France</span>
                    </div>
                    <div class="mb-3">
                        <h5>Lebanese Baccalaureate – Life Sciences</h5>
                        <span class="text-muted">Rafic Hariri High School – Saida, Lebanon</span>
                        <p>Honors: Highest Distinction</p>
                    </div>

                    <h3 class="text-primary border-bottom pb-2 mt-4">Projects</h3>
                    <div class="mb-3">
                        <h5>Graphs &amp; Scheduling</h5>
                        <span class="text-muted">Academic Project | 2026</span>
                        <ul>
                            <li>Critical path calculation on 300,000-task graphs executed in &lt; 1 s via topological sort + Bellman algorithm; auto-generated report (margins, critical tasks).</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Hasami Shogi - Console Game Engine</h5>
                        <span class="text-muted">Academic Project | 2026</span>
                        <ul>
                            <li>Valgrind certified zero memory leaks; complex business rules (captures, victory) validated through regression-free automated test suite.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Power BI Dashboard &amp; Data Viz</h5>
                        <span class="text-muted">Personal Project | 2025</span>
                        <ul>
                            <li>30% reduction in preparation time; 5-10 interactive KPIs delivered for tracking and decision making.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Airline Information System</h5>
                        <span class="text-muted">Academic Project | 2025</span>
                        <ul>
                            <li>Relational database with 10+ entities and strict integrity constraints under PostgreSQL; web app with dynamic views, complex joins and CRUD interfaces.</li>
                        </ul>
                    </div>
                    
                    <h3 class="text-primary border-bottom pb-2 mt-4">Professional Experience</h3>
                    <div class="mb-3">
                        <h5>Research Initiation Intern</h5>
                        <span class="text-muted">CRIStAL, CFHP team – University of Lille | 06/2026 – Present</span>
                        <ul>
                            <li>Compared 4 parameter estimation methods on dynamical systems, ensuring numerical stability through reproducible Python experiments.</li>
                            <li>Optimized an open-source package (refactoring, unit tests), improving maintainability and algorithm processing speed.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Data Analyst Intern</h5>
                        <span class="text-muted">Spinneys – Saida, Lebanon | 06/2023 – 08/2023</span>
                        <ul>
                            <li>Reduced preparation time by 30% across several thousand rows using Power Query cleaning and deduplication.</li>
                            <li>Designed 5-10 interactive Power BI KPIs (sales, inventory rotation, stockouts) for real-time operational management.</li>
                            <li>Collaborated with teams to gather requirements and align reports with business processes.</li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5>Recruitment Assistant</h5>
                        <span class="text-muted">AlWassim Career Leaders – Saida, Lebanon | 06/2022 – 08/2022</span>
                        <ul>
                            <li>Processed and normalized a database of 50+ applications, reducing processing time by 20% through rigorous centralization.</li>
                            <li>Aligned candidate profiles with job requirements in an international environment.</li>
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
                    <p>Power BI (UDEMY)<br>PIX Advanced Level (2025)<br>Teens Who Code (2018)</p>

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
