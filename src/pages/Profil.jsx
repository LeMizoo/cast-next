import React from "react";

const Profile = () => {
  return (
    <div className="profile-page">
      <h1>Mon Profil</h1>
      <p>Bienvenue sur votre espace personnel.</p>

      <section className="profile-details">
        <h2>Informations</h2>
        <ul>
          <li>Nom : Tovoniaina</li>
          <li>Email : exemple@cast-next.com</li>
          <li>Rôle : Membre</li>
        </ul>
      </section>

      <section className="profile-actions">
        <button>Modifier le profil</button>
        <button>Se déconnecter</button>
      </section>
    </div>
  );
};

export default Profile;