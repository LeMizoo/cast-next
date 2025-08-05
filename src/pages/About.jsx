import About from "./pages/About";
<Route path="/about" element={<About />} />
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>Histoire du C.A.S.T.</h1>
      <p>
        Depuis sa création, le C.A.S.T. incarne une mission de service et de spiritualité, œuvrant à faire entendre la voix de l’âme malgache dans un dialogue entre tradition et modernité. Chaque étape de son cheminement est marquée par la foi, la rigueur, et la quête de beauté.
      </p>
      <h2>Les fondateurs et la direction</h2>
      <ul>
        <li>Son Excellence Liva ANDRIAMANALINARIVO (Président fondateur)</li>
        <li>Éric RASAMIMANANA (Directeur artistique)</li>
        <li>Jules R. et Tovoniaina R. (Assistants et chefs de pupitre)</li>
      </ul>
      <h2>Vision du projet</h2>
      <p>
        Le C.A.S.T. aspire à devenir une cathédrale vivante, où chaque voix, chaque note, chaque silence participe à la révélation du divin dans l’art vocal, tout en affirmant l’identité culturelle malgache.
      </p>
      <h2>Hommage à Lucien Emmanuel RANDRIANARIVELO (†)</h2>
      <p>
        Son héritage est immatériel, mais palpable à chaque instant, dans chaque vibration du chœur. Il a permis aux choristes de chanter avec clarté et profondeur, en transcrivant et en traduisant la musique sacrée en langue malgache.
      </p>
    </div>
  );
};

export default About;


