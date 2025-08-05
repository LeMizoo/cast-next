import React from "react";

const MemberSpace = () => {
  return (
    <div className="member-space">
      <h1>Espace Membre</h1>
      <p>Bienvenue dans ton sanctuaire créatif.</p>

      <section className="member-actions">
        <ul>
          <li><a href="/profile">Voir mon profil</a></li>
          <li><a href="/gallery">Accéder à la galerie</a></li>
          <li><a href="/join">Inviter un ami</a></li>
        </ul>
      </section>

      <section className="member-content">
        <h2>Contenu réservé</h2>
        <p>Tu peux ici consulter les ressources, les événements à venir, ou les discussions communautaires.</p>
      </section>
    </div>
  );
};

export default MemberSpace;