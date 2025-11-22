import Head from "next/head";

const sections = [
  {
    id: "vision",
    title: "1. Vision et objectifs du service",
    content: [
      "Le service de veille médiatique audiovisuelle vise à fournir une compréhension complète, rapide et actionnable de la couverture médiatique audiovisuelle qui concerne l’organisation. Il doit permettre d’anticiper les risques réputationnels, d’identifier les opportunités de prise de parole et de mesurer l’impact des campagnes sur les antennes radio, TV et les plateformes numériques.",
      "Objectifs principaux :",
      [
        "Détecter précocement les signaux faibles et tendances émergentes dans l’actualité audiovisuelle.",
        "Documenter la visibilité de l’organisation, de ses dirigeants et de ses thématiques clés.",
        "Produire des rapports clairs et opérationnels pour les décideurs internes.",
        "Assurer une traçabilité rigoureuse des sources et une conservation sécurisée des archives."
      ]
    ]
  },
  {
    id: "missions",
    title: "2. Missions clés",
    content: [
      "Le service s’articule autour de six missions complémentaires :",
      [
        "Collecte quotidienne des contenus : émissions radio, journaux télévisés, magazines, podcasts, replays et contenus sociaux vidéo.",
        "Analyse éditoriale : qualification du ton, du cadrage, des intervenants et des messages diffusés.",
        "Alertes rapides : notification des événements critiques dans les minutes suivant leur diffusion.",
        "Rapports périodiques : synthèses hebdomadaires, mensuelles et thématiques à destination des parties prenantes.",
        "Accompagnement stratégique : recommandations d’actions de communication et de gestion de crise.",
        "Capitalisation documentaire : indexation, archivage et mise à disposition des extraits audiovisuels."
      ]
    ]
  },
  {
    id: "organisation",
    title: "3. Organisation de l’équipe",
    content: [
      "Une équipe équilibrée combine expertise éditoriale, data et communication :",
      [
        "Responsable de la veille : définit la stratégie, valide les livrables et coordonne les relations internes.",
        "Analystes médias : assurent la revue qualitative, rédigent les synthèses et préparent les alertes.",
        "Chargé·e·s d’exploitation : collectent les contenus, assurent l’indexation et la gestion des métadonnées.",
        "Spécialiste data et automation : maintien des flux de collecte, tableaux de bord et outils d’IA.",
        "Support juridique : veille au respect des droits voisins, licences de rediffusion et clauses contractuelles."
      ],
      "Fonctionnement :",
      [
        "Réunion de calage quotidienne (15 minutes) pour répartir les tâches et remonter les signaux critiques.",
        "Comité éditorial hebdomadaire avec les départements communication et affaires publiques.",
        "Suivi trimestriel des indicateurs de performance et des axes d’amélioration."
      ]
    ]
  },
  {
    id: "processus",
    title: "4. Processus opérationnels",
    content: [
      "4.1 Collecte et ingestion des flux",
      [
        "Sources : agrégateurs spécialisés (Kantar, Argus, Cision), enregistrements propriétaires, plateformes de podcasts et de replay.",
        "Automatisation : scripts de capture (ffmpeg, yt-dlp) planifiés, connecteurs API des agrégateurs, monitoring de disponibilité.",
        "Contrôle qualité : vérification quotidienne de l’intégrité des fichiers, métadonnées complètes (chaîne, émission, horaire, durée)."
      ],
      "4.2 Traitement et indexation",
      [
        "Transcription automatique via moteurs ASR (Whisper, Google Speech, régions francophones).",
        "Alignement texte/temps pour extractions ciblées.",
        "Tagging thématique et tonalité à l’aide d’outils NLP supervisés.",
        "Validation humaine des segments clés et correction des entités nommées."
      ],
      "4.3 Analyse et qualification",
      [
        "Grille d’analyse normalisée : sujet principal, sous-thématiques, tonalité (positive/neutre/négative), angle, personnalité citée.",
        "Notation de l’impact médiatique (audience, part de voix, durée).",
        "Détection d’écarts par rapport aux messages cibles et repérage des fake news."
      ],
      "4.4 Production des livrables",
      [
        "Alertes flash : message court (<150 mots), lien vers l’extrait vidéo/audio, enjeux et recommandations immédiates.",
        "Synthèse quotidienne : top 10 des sujets, tendances par canal, veille concurrentielle rapide.",
        "Rapport hebdomadaire : analyses approfondies, graphiques d’évolution, focus par thématique.",
        "Dossiers de crise : chronologie détaillée, cartographie des intervenants, scénarios de réponse."
      ],
      "4.5 Revue et capitalisation",
      [
        "Archivage sur un DAM sécurisé avec classification normalisée.",
        "Indexation full-text et par facette pour rechercher par date, canal, sujet, intervenant.",
        "Politique de purge : conservation 36 mois (radio, TV), 60 mois pour les crises majeures.",
        "Retour d’expérience systématique après chaque crise ou campagne."
      ]
    ]
  },
  {
    id: "technologies",
    title: "5. Architecture et outils",
    content: [
      "Pile technologique recommandée :",
      [
        "Acquisition : services d’agrégation + scripts d’enregistrement (Python, ffmpeg) orchestrés par Airflow ou Temporal.",
        "Stockage : Cloud object storage (S3 compatible) pour les médias, base documentaire (PostgreSQL + ElasticSearch) pour les métadonnées.",
        "Traitement : pipeline data (dbt ou Dagster) pour la normalisation, API d’IA pour transcription et classification.",
        "Diffusion : tableau de bord interactif (Metabase, Superset) et portail interne (Next.js) avec moteur de recherche.",
        "Collaboration : suites bureautiques cloud, plateforme de ticketing pour demandes internes (Jira, Linear)."
      ],
      "Sécurité et conformité :",
      [
        "Gestion des accès via SSO et MFA.",
        "Chiffrement des médias au repos et en transit.",
        "Journalisation des accès et audits réguliers.",
        "Respect des obligations légales (SACEM, droits voisins, RGPD)."
      ]
    ]
  },
  {
    id: "indicateurs",
    title: "6. Indicateurs de performance",
    content: [
      "KPIs quantitatifs :",
      [
        "Taux de couverture des antennes prioritaires (% des programmes suivis).",
        "Temps moyen d’alerte (minutes) entre diffusion et notification.",
        "Volume d’extraits archivés et consultés par les équipes.",
        "Taux d’utilisation des livrables (ouverture des emails, clics sur liens, retours qualitatifs)."
      ],
      "KPIs qualitatifs :",
      [
        "Pertinence perçue des analyses par les parties prenantes.",
        "Qualité de la détection de signaux faibles (cas concrets).",
        "Contribution aux décisions stratégiques ou aux plans de communication."
      ],
      "Mécanismes de suivi : tableaux de bord dynamiques, revues mensuelles, enquêtes internes semestrielles."
    ]
  },
  {
    id: "procedures",
    title: "7. Gestion des situations sensibles",
    content: [
      "Protocole d’alerte :",
      [
        "Classification des incidents (faible, modérée, critique) selon l’exposition et l’impact potentiel.",
        "Canaux d’escalade : messagerie instantanée dédiée, SMS pour les alertes critiques, hotline 24/7.",
        "Dossier de contexte : résumé, verbatim, capture d’écran ou extrait audio/vidéo, proposition de réponse."
      ],
      "Coordination de crise :",
      [
        "Activation d’une cellule transversale (communication, juridique, direction).",
        "Mise à jour continue du dossier partagé avec horodatage.",
        "Suivi de la propagation : monitoring des rediffusions, reprises et réseaux sociaux.",
        "Debriefing post-crise pour actualiser les grilles d’analyse et les scripts de réponse."
      ]
    ]
  },
  {
    id: "qualite",
    title: "8. Assurance qualité et amélioration continue",
    content: [
      "Dispositif de QA :",
      [
        "Double relecture des rapports stratégiques.",
        "Échantillonnage hebdomadaire d’analyses pour contrôle de cohérence.",
        "Audit semestriel des sources et des droits de diffusion."
      ],
      "Formation continue :",
      [
        "Veille sur les nouveaux formats audiovisuels et innovations technologiques.",
        "Partages d’expérience internes (retours sur dossiers, démos d’outils).",
        "Plan de montée en compétence sur les méthodologies data et IA générative."
      ],
      "Boucles de feedback : formulaires courts après chaque livraison majeure, interviews annuelles des équipes dirigeantes."
    ]
  },
  {
    id: "annexes",
    title: "9. Annexes pratiques",
    content: [
      "Modèles de livrables :",
      [
        "Template d’alerte urgente (format mail et message instantané).",
        "Structure de rapport hebdomadaire avec rubriques obligatoires.",
        "Fiche de suivi de crise et grille de débriefing."
      ],
      "Répertoires utiles :",
      [
        "Contacts clés dans les médias audiovisuels.",
        "Catalogue des émissions prioritaires et de leurs audiences.",
        "Calendrier éditorial des grands événements (politique, économie, culture, sport)."
      ],
      "Checklist de démarrage d’un nouveau client : cadrage stratégique, périmètre des sources, contractualisation, paramétrage des alertes."
    ]
  }
];

function renderContent(content) {
  return content.map((block, index) => {
    if (Array.isArray(block)) {
      return (
        <ul key={`list-${index}`}>
          {block.map((item, itemIndex) => (
            <li key={`item-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p key={`paragraph-${index}`}>{block}</p>;
  });
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Manuel de gestion - Veille médiatique audiovisuelle</title>
        <meta
          name="description"
          content="Guide opérationnel pour structurer et exploiter un service de veille médiatique audiovisuelle."
        />
      </Head>
      <main id="top" className="container">
        <header className="hero">
          <div className="hero-content">
            <span className="badge">Manuel opérationnel</span>
            <h1>Gestion d’un service de veille médiatique audiovisuelle</h1>
            <p className="lead">
              Un guide complet pour organiser la collecte, l’analyse et la diffusion d’informations issues des médias audiovisuels, afin de soutenir la stratégie de communication et les décisions sensibles.
            </p>
            <a className="cta" href="#vision">
              Consulter le manuel
            </a>
          </div>
          <div className="hero-card">
            <h2>Périmètre du manuel</h2>
            <ul>
              <li>Structure organisationnelle et missions clés</li>
              <li>Processus quotidiens et outils technologiques</li>
              <li>Indicateurs de performance et gestion de crise</li>
              <li>Bonnes pratiques d’assurance qualité</li>
            </ul>
          </div>
        </header>

        <section className="toc">
          <h2>Plan du manuel</h2>
          <div className="toc-grid">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="toc-card">
                <span className="toc-index">{section.title.split(".")[0]}</span>
                <div>
                  <h3>{section.title}</h3>
                  <p>Consulter le chapitre</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="chapter">
            <h2>{section.title}</h2>
            {renderContent(section.content)}
            <a href="#top" className="back-to-top">
              Retour au plan ↑
            </a>
          </section>
        ))}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h4>Maintien du service</h4>
            <p>
              Mettre à jour ce manuel au moins deux fois par an pour intégrer les évolutions réglementaires, technologiques et organisationnelles.
            </p>
          </div>
          <div>
            <h4>Contact référent</h4>
            <p>Direction de la communication – Pôle veille et influence</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 80px 24px 120px;
        }

        .hero {
          display: grid;
          gap: 32px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          align-items: stretch;
          margin-bottom: 64px;
        }

        .hero-content {
          padding: 32px;
          background: linear-gradient(135deg, #252b63 0%, #3d85f5 100%);
          border-radius: 24px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          overflow: hidden;
        }

        .hero-content::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.2), transparent 60%);
          pointer-events: none;
        }

        .badge {
          align-self: flex-start;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        h1 {
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.2;
        }

        .lead {
          font-size: 18px;
          line-height: 1.6;
          opacity: 0.92;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          background: #ffffff;
          color: #1b1e3c;
          border-radius: 12px;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-top: 8px;
          width: fit-content;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(18, 40, 83, 0.25);
        }

        .hero-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 24px 60px rgba(18, 40, 83, 0.1);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .hero-card h2 {
          font-size: 22px;
          color: #1b1e3c;
        }

        .hero-card ul {
          padding-left: 20px;
          display: grid;
          gap: 8px;
          color: #3e4462;
        }

        .toc {
          margin-bottom: 64px;
        }

        .toc h2 {
          margin-bottom: 24px;
          font-size: 24px;
        }

        .toc-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .toc-card {
          display: flex;
          gap: 16px;
          align-items: center;
          padding: 20px;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 16px 40px rgba(27, 30, 60, 0.08);
          color: #1b1e3c;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .toc-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 48px rgba(27, 30, 60, 0.12);
        }

        .toc-index {
          font-weight: 700;
          font-size: 18px;
          color: #3d85f5;
          min-width: 32px;
        }

        .chapter {
          background: #ffffff;
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 48px;
          box-shadow: 0 18px 48px rgba(18, 40, 83, 0.08);
        }

        .chapter h2 {
          font-size: 22px;
          margin-bottom: 16px;
        }

        .chapter p {
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .chapter ul {
          padding-left: 22px;
          margin-bottom: 16px;
          line-height: 1.6;
          color: #3e4462;
        }

        .back-to-top {
          display: inline-block;
          margin-top: 12px;
          font-weight: 600;
          color: #3d85f5;
        }

        .footer {
          background: #252b63;
          color: #ffffff;
          padding: 40px 24px;
        }

        .footer-content {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .footer h4 {
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .container {
            padding-top: 48px;
          }

          .hero {
            margin-bottom: 48px;
          }

          .chapter {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}
