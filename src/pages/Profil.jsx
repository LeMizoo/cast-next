import React, { useState } from "react";
import avatar from "../assets/avatar.svg"; // Remplace par ton image si tu en as une

const Profil = () => {
  const [user, setUser] = useState({
    nom: "Tovoniaina RAHENDRISON",
    email: "positifaid@live.fr",
    role: "Admin du Site du groupe Chœur Artistique & Spirituel"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    alert("Déconnexion en cours…");
    // Tu peux ajouter ici une vraie fonction de déconnexion
  };

  return (
    <section className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-lg border border-indigo-100">
      <div className="flex items-center space-x-4 mb-6">
        <img src={avatar} alt="Avatar utilisateur" className="h-16 w-16 rounded-full border border-indigo-300" />
        <h1 className="text-2xl font-bold text-indigo-800">Profil de {user.nom.split(" ")[0]}</h1>
      </div>

      {isEditing ? (
        <div className="space-y-4 text-gray-700">
          <div>
            <label className="block mb-1">Nom :</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Rôle :</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Enregistrer</button>
            <button onClick={handleCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition">Annuler</button>
          </div>
        </div>
      ) : (
        <div className="bg-indigo-50 p-6 rounded-md mb-6 border border-indigo-200 space-y-2 text-gray-700">
          <p><strong>Nom :</strong> {user.nom}</p>
          <p><strong>Email :</strong> {user.email}</p>
          <p><strong>Rôle :</strong> {user.role}</p>
        </div>
      )}

      {/* Boutons d'action */}
      {!isEditing && (
        <div className="flex gap-4">
          <button onClick={handleEdit} className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">Modifier le profil</button>
          <button onClick={handleLogout} className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition">Se déconnecter</button>
        </div>
      )}
    </section>
  );
};

export default Profil;