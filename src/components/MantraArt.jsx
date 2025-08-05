const MantraArt = () => {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2d1810" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a0f0a" stopOpacity="1" />
        </radialGradient>

        <linearGradient id="copperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b35" stopOpacity="1" />
          <stop offset="50%" stopColor="#f7931e" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0.8" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <g id="musicNote">
          <ellipse cx="0" cy="8" rx="6" ry="4" fill="url(#accentGradient)" opacity="0.7" />
          <rect x="5" y="-10" width="2" height="18" fill="url(#accentGradient)" opacity="0.7" />
          <path
            d="M7,-10 Q12,-8 12,-5 Q12,-2 7,0"
            fill="none"
            stroke="url(#accentGradient)"
            strokeWidth="2"
            opacity="0.7"
          />
        </g>

        <g id="malgachePattern">
          <path d="M0,0 L8,0 L6,6 L2,6 Z" fill="rgba(255,107,53,0.4)" />
          <path d="M0,0 L0,8 L6,6 L6,2 Z" fill="rgba(247,147,30,0.4)" />
        </g>
      </defs>

      <rect width="800" height="600" fill="url(#backgroundGradient)" />

      <circle cx="400" cy="300" r="290" fill="none" stroke="rgba(255,107,53,0.2)" strokeWidth="3" opacity="0.6" />
      <circle cx="400" cy="300" r="260" fill="none" stroke="rgba(247,147,30,0.15)" strokeWidth="2" opacity="0.8" />
      <circle cx="400" cy="300" r="230" fill="none" stroke="rgba(255,215,0,0.1)" strokeWidth="1" opacity="0.9" />

      <use href="#malgachePattern" transform="translate(100,100) scale(2)" opacity="0.6" />
      <use href="#malgachePattern" transform="translate(680,100) scale(2) rotate(90)" opacity="0.6" />
      <use href="#malgachePattern" transform="translate(100,480) scale(2) rotate(-90)" opacity="0.6" />
      <use href="#malgachePattern" transform="translate(680,480) scale(2) rotate(180)" opacity="0.6" />

      <use href="#musicNote" transform="translate(150,200) scale(0.8)" opacity="0.5" />
      <use href="#musicNote" transform="translate(650,220) scale(1.2)" opacity="0.4" />
      <use href="#musicNote" transform="translate(120,380) scale(1)" opacity="0.6" />
      <use href="#musicNote" transform="translate(680,400) scale(0.9)" opacity="0.5" />

      {/* Titre principal */}
      <g transform="translate(400,120)">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, serif"
          fontSize="36"
          fontWeight="bold"
          textAnchor="middle"
          fill="url(#copperGradient)"
          filter="url(#glow)"
        >
          CHŒUR ARTISTIQUE
        </text>
      </g>

      <g transform="translate(400,165)">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, serif"
          fontSize="36"
          fontWeight="bold"
          textAnchor="middle"
          fill="url(#copperGradient)"
          filter="url(#glow)"
        >
          & SPIRITUEL DE TANÀ
        </text>
      </g>

      {/* Mantras */}
      {[
        "Nos voix s'élèvent ensemble,",
        "portées par l'esprit et l'art,",
        "unies dans l'harmonie sacrée",
        "de notre terre malgache."
      ].map((line, index) => (
        <g key={index} transform={`translate(400,${240 + index * 40})`}>
          <text
            x="0"
            y="0"
            fontFamily="Georgia, serif"
            fontSize="28"
            fontWeight="300"
            textAnchor="middle"
            fill="url(#copperGradient)"
            filter="url(#glow)"
          >
            {line}
          </text>
        </g>
      ))}

      {/* Ligne décorative du haut */}
      <line x1="200" y1="190" x2="600" y2="190" stroke="url(#accentGradient)" strokeWidth="3" opacity="0.7" />

      {/* Ligne décorative du bas */}
      <line x1="250" y1="400" x2="550" y2="400" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.6" />
      <circle cx="240" cy="400" r="4" fill="rgba(255,107,53,0.7)" />
      <circle cx="560" cy="400" r="4" fill="rgba(255,215,0,0.7)" />

      {/* Message spirituel */}
      <g transform="translate(400,440)">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, serif"
          fontSize="20"
          fontStyle="italic"
          textAnchor="middle"
          fill="rgba(247,147,30,0.9)"
        >
          Que notre chant soit prière,
        </text>
      </g>

      <g transform="translate(400,470)">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, serif"
          fontSize="20"
          fontStyle="italic"
          textAnchor="middle"
          fill="rgba(247,147,30,0.9)"
        >
          que notre art soit lumière
        </text>
      </g>

      {/* Devise finale */}
      <g transform="translate(400,520)">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, serif"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
          fill="rgba(255,215,0,0.8)"
        >
          ~ FIARA-MIVENTY HO AN'NY FANAHY ~
        </text>
      </g>

      <g transform="translate(400,545)">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, serif"
          fontSize="14"
          textAnchor="middle"
          fill="rgba(255,107,53,0.7)"
        >
          (Unis pour l'âme)
        </text>
      </g>
    </svg>
  );
};

export default MantraArt;