import React from "react";

const Join = () => {
  return (
    <div className="join-page">
      <h1>Rejoindre la communauté</h1>
      <p>Partage ta lumière, ton art, ta voix.</p>

      <form className="join-form">
        <label>
          Nom :
          <input type="text" name="name" placeholder="Ton nom complet" />
        </label>

        <label>
          Email :
          <input type="email" name="email" placeholder="Ton adresse email" />
        </label>

        <label>
          Message :
          <textarea name="message" placeholder="Pourquoi veux-tu nous rejoindre ?" />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Join;