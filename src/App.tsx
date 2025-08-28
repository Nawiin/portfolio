import React from "react";
import {
  Database, Users, Projector, Shield, Download, Link as LinkIcon,
  CheckCircle2, BookOpen, Code2
} from "lucide-react";

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${className}`}>{children}</span>
);
const Chip = ({ children }) => (
  <span className="inline-block rounded-full bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">{children}</span>
);
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow ${className}`}>{children}</div>
);
const Section = ({ id, title, icon: Icon }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mb-5 flex items-center gap-2">
      {Icon ? <Icon className="h-5 w-5" /> : null}
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
  </section>
);

const COMP_COLORS = {
  C4: "bg-emerald-100/60 text-emerald-700 border-emerald-300",
  C5: "bg-blue-100/60 text-blue-700 border-blue-300",
  C6: "bg-violet-100/60 text-violet-700 border-violet-300",
};
const COMPETENCES = [
  {
    code: "C4",
    title: "Gérer des données de l’information",
    color: COMP_COLORS.C4,
    icon: Database,
    points: [
      "Conception/adm. BD relationnelles & décisionnelles",
      "Optimisation SQL, sécurité & qualité des données",
      "ETL/OLAP (cubes, MDX), dataviz pour la décision",
      "Données hétérogènes & volumineuses",
    ],
    apprentissagesCritiques: [
      "Modèles 3FN / étoile",
      "Plans d’exécution & index",
      "Intégrité & confidentialité",
      "Préparation/Extraction/Visualisation",
    ],
    matieres: ["R5.C.04","R5.C.05","R5.C.06","R5.C.07","R5.C.08","R5.C.09","R5.C.11","SAE5.C.01","S6.DBAdmin","S6.OPT"],
  },
  {
    code: "C5",
    title: "Conduire un projet",
    color: COMP_COLORS.C5,
    icon: Projector,
    points: [
      "Expression de besoin (MOA/MOE)",
      "Pilotage classique & agile",
      "Qualité/coûts/risques/planning",
      "Impacts éco./sociaux/technologiques",
    ],
    apprentissagesCritiques: [
      "Cahier des charges / stories",
      "Planification & indicateurs",
      "Gestion des risques",
      "Urbanisation SI",
    ],
    matieres: ["R5.C.11","SAE5.C.01","S6.DBAdmin","S6.OPT"],
  },
  {
    code: "C6",
    title: "Collaborer au sein d’une équipe informatique",
    color: COMP_COLORS.C6,
    icon: Users,
    points: [
      "Travail en équipe pluridisciplinaire",
      "Rôles & communication",
      "Conduite du changement, veille",
      "Restitutions orales & docs",
    ],
    apprentissagesCritiques: ["Git/GitLab, PR","Pitch & soutenance","Coordination & rétro","PPP & posture pro"],
    matieres: ["R5.C.02","R5.C.12","R5.C.13","S6.ENT","R6.02","S6.COM","PPP S6"],
  },
];

const CompetenceBadge = ({ code }) => {
  const mapIcon = { C4: Database, C5: Projector, C6: Users };
  const Icon = mapIcon[code] || CheckCircle2;
  return (
    <Badge className={`${COMP_COLORS[code] || ""} border`}>
      <Icon className="h-3.5 w-3.5" /> {code}
    </Badge>
  );
};

const COURSES = [
  { sem: "S5", code: "R5.C.02", title: "Projet personnel et professionnel 5", comps: ["C6"], description: "Préparer son projet professionnel, analyser ses compétences et formaliser un plan de carrière.", problem: "Comment aligner son identité professionnelle avec les attentes du marché et les évolutions du secteur informatique ?", proof: { linkLabel: "Portfolio PPP (PDF)", href: "#" } },
  { sem: "S5", code: "R5.C.04", title: "Programmation au format Web des informations décisionnelles", comps: ["C4","C5"], description: "Création d’applications web pour restituer des informations décisionnelles (dashboards, KPI).", problem: "Comment rendre accessibles et compréhensibles des données complexes via une interface web efficace ?", proof: { linkLabel: "Captures (PNG)", href: "#" } },
  { sem: "S5", code: "R5.C.05", title: "Nouveaux paradigmes de base de données", comps: ["C4"], description: "Découverte des modèles NoSQL (document, clé‑valeur, colonne, graphe).", problem: "Comment choisir et exploiter un modèle de données alternatif adapté à des besoins spécifiques (scalabilité, flexibilité) ?", proof: { linkLabel: "Notebook / Script", href: "#" } },
  { sem: "S5", code: "R5.C.06", title: "Exploitation de la base de données", comps: ["C4"], description: "Utilisation avancée des bases relationnelles (requêtes complexes, index, transactions).", problem: "Comment optimiser l’exploitation d’une base pour améliorer les performances et garantir l’intégrité des données ?", proof: { linkLabel: "Rapport (PDF)", href: "#" } },
  { sem: "S5", code: "R5.C.07", title: "Données massives", comps: ["C4"], description: "Introduction aux techniques Big Data (traitement distribué, stockage massif).", problem: "Comment traiter efficacement des volumes massifs de données tout en assurant rapidité et fiabilité ?", proof: { linkLabel: "Script + résultats", href: "#" } },
  { sem: "S5", code: "R5.C.08", title: "Techniques d’intelligence artificielle", comps: ["C4"], description: "Découverte des méthodes d’apprentissage automatique et d’IA appliquées aux données.", problem: "Comment construire un modèle prédictif pertinent et évaluer sa robustesse sur des données réelles ?", proof: { linkLabel: "Notebook (IPYNB)", href: "#" } },
  { sem: "S5", code: "R5.C.09", title: "Statistique inférentielle", comps: ["C4"], description: "Méthodes statistiques pour tirer des conclusions à partir d’échantillons.", problem: "Comment valider ou rejeter une hypothèse en fonction d’un test statistique et d’un seuil de confiance ?", proof: { linkLabel: "Rapport (PDF)", href: "#" } },
  { sem: "S5", code: "R5.C.11", title: "Optimisation des données et des systèmes décisionnels", comps: ["C4","C5"], description: "Optimisation des systèmes décisionnels (entrepôts, OLAP, sécurité).", problem: "Comment concevoir un entrepôt performant et sécurisé pour accélérer la prise de décision ?", proof: { linkLabel: "Schémas + métriques", href: "#" } },
  { sem: "S5", code: "R5.C.12", title: "Anglais", comps: ["C6"], description: "Communication technique et professionnelle en anglais.", problem: "Comment vulgariser et présenter un projet technique en anglais de manière claire et concise ?", proof: { linkLabel: "Tech brief (PDF)", href: "#" } },
  { sem: "S5", code: "R5.C.13", title: "Transition écologique et développement soutenable", comps: ["C6"], description: "Impacts environnementaux et sociétaux des SI ; éco‑conception.", problem: "Comment intégrer l’éco‑conception et la durabilité dans les projets informatiques ?", proof: { linkLabel: "Checklist + mesures", href: "#" } },
  { sem: "S5", code: "SAE5.C.01", title: "Proposer une solution optimisée à partir de données internes et externes", comps: ["C4","C5","C6"], description: "Chaîne complète d’analyse et de restitution décisionnelle (ETL → DW → BI).", problem: "Comment concevoir une chaîne de traitement de données répondant à un besoin métier réel ?", proof: { linkLabel: "Repo + Archi", href: "#" } },

  { sem: "S6", code: "S6.ENT", title: "Initiation à l’entrepreneuriat", comps: ["C6"], description: "Synthèse éco/droit/gestion appliquée à la création d’entreprise ; étapes, business plan, financement, statut juridique.", problem: "Comment transformer une idée innovante en projet entrepreneurial viable ?", proof: { linkLabel: "Projet Business Plan", href: "#" } },
  { sem: "S6", code: "R6.02", title: "Droit du numérique et de la propriété intellectuelle", comps: ["C6"], description: "Éthique juridique, responsabilités en ligne, e‑commerce, preuve, protections PI (industrielle, littéraire & artistique).", problem: "Comment concilier innovation numérique et respect du cadre légal et éthique ?", proof: { linkLabel: "Dossier juridique", href: "#" } },
  { sem: "S6", code: "S6.COM", title: "Communication : organisation & diffusion de l’information", comps: ["C6"], description: "Formation des utilisateurs, conduite du changement, analyse des modes de communication en équipe.", problem: "Comment optimiser la circulation de l’information et réduire la résistance au changement ?", proof: { linkLabel: "Supports de formation", href: "#" } },
  { sem: "S6", code: "PPP S6", title: "Projet personnel et professionnel (S6)", comps: ["C6"], description: "Insertion professionnelle : CV/LM, identités pro, simulations d’entretien, stratégie de carrière.", problem: "Comment valoriser ses compétences et son profil pour réussir son recrutement en sortie de BUT ?", proof: { linkLabel: "Portfolio S6 (PDF)", href: "#" } },
  { sem: "S6", code: "S6.DBAdmin", title: "Administration des bases de données", comps: ["C4","C5"], description: "Admin SGBD : gestion espaces/utilisateurs, réplication, sauvegarde/restauration, fédération OLAP.", problem: "Comment garantir cohérence, qualité et sécurité des données dans un SI distribué ?", proof: { linkLabel: "Rapport DBA", href: "#" } },
  { sem: "S6", code: "S6.OPT", title: "Méthodes d’optimisation pour l’aide à la décision", comps: ["C4","C5"], description: "RO : modélisation (PL, simplexe) et heuristiques pour problèmes types (sac à dos, TSP, etc.).", problem: "Comment modéliser et résoudre efficacement un problème complexe pour éclairer la décision stratégique ?", proof: { linkLabel: "TP Optimisation", href: "#" } },
];

function CompetenceBadgeComp({ code }) {
  return <CompetenceBadge code={code} />;
}

const CardCourse = ({ c }) => (
  <Card>
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="text-sm text-muted-foreground">{c.code}</div>
        <div className="font-medium">{c.title}</div>
        {c.description && <p className="mt-2 text-sm">{c.description}</p>}
        {c.problem && <p className="mt-1 text-xs italic text-muted-foreground">Problématique : {c.problem}</p>}
        {c.proof && (
          <a href={c.proof.href} className="mt-2 inline-flex items-center gap-1 rounded-xl border px-2.5 py-1.5 text-xs font-medium hover:bg-muted">
            <LinkIcon className="h-3.5 w-3.5" /> {c.proof.linkLabel}
          </a>
        )}
      </div>
      <div className="flex shrink-0 flex-wrap gap-1.5">
        {c.comps.map((cc) => <CompetenceBadgeComp key={cc} code={cc} />)}
      </div>
    </div>
  </Card>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Portfolio — BUT Informatique (Parcours C)</div>
              <h1 className="text-base font-semibold">S5 & S6 — Admin, gestion & exploitation des données</h1>
            </div>
          </div>
          <button onClick={() => window.print()} className="hidden rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-muted sm:block" title="Imprimer / Exporter en PDF">
            <Download className="mr-1 inline h-4 w-4" /> Exporter
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-8">
        <section id="competences" className="space-y-4">
          <Section id="competences" title="Compétences terminales (Parcours C)" icon={BookOpen} />
          <div className="grid gap-4 md:grid-cols-3">
            {COMPETENCES.map((c) => (
              <Card key={c.code}>
                <div className="flex items-start gap-3">
                  {c.icon ? <c.icon className="mt-1 h-5 w-5" /> : null}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{c.title}</h3>
                      <Badge className={`${c.color} border`}>{c.code}</Badge>
                    </div>
                    <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm text-muted-foreground">
                      {c.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.apprentissagesCritiques.map((a) => (
                        <Badge key={a} className="border bg-muted/40 text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5" /> {a}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-3 text-sm">
                      <div className="mb-1 font-medium">Matières associées</div>
                      <div className="flex flex-wrap gap-1.5">
                        {c.matieres.map((m) => <Chip key={m}>{m}</Chip>)}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="s5" className="mt-10 space-y-4">
          <Section id="s5" title="Matières S5 — descriptions, problématiques & preuves" icon={Shield} />
          <div className="grid gap-4 md:grid-cols-2">
            {COURSES.filter((x) => x.sem === "S5").map((c) => <CardCourse key={c.code} c={c} />)}
          </div>
        </section>

        <section id="s6" className="mt-10 space-y-4">
          <Section id="s6" title="Matières S6 — descriptions, problématiques & preuves" icon={Shield} />
          <div className="grid gap-4 md:grid-cols-2">
            {COURSES.filter((x) => x.sem === "S6").map((c) => <CardCourse key={c.code} c={c} />)}
          </div>
        </section>

        <footer className="my-12 border-t pt-6 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-medium text-slate-700">Contact</div>
              <div className="mt-1">Email / LinkedIn / GitHub (à compléter)</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-xl border px-3 py-1.5 hover:bg-muted">Haut de page</button>
              <button onClick={() => window.print()} className="rounded-xl border px-3 py-1.5 hover:bg-muted"><Download className="mr-1 inline h-4 w-4" /> Exporter en PDF</button>
            </div>
          </div>
          <div className="mt-3 text-xs">Portfolio Fusion — BUT Informatique, Parcours C.</div>
        </footer>
      </div>
    </div>
  );
}
