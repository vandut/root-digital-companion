

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainMenu } from './screens/MainMenu';
import { LawLibrary } from './screens/LawLibrary';
import { NewGameSetup } from './screens/NewGameSetup';
import { TurnDashboard } from './screens/TurnDashboard';
import { SettingsScreen } from './screens/SettingsScreen';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/library" element={<LawLibrary />} />
        <Route path="/library/factions/:factionId" element={<LawLibrary />} />
        <Route path="/library/:categoryId" element={<LawLibrary />} />
        <Route path="/setup" element={<NewGameSetup />} />
        <Route path="/game" element={<TurnDashboard />} />
        <Route path="/settings" element={<SettingsScreen />} />
      </Routes>
    </main>
  );
}

export default App;