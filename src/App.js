import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import HomePage from './components/HomePage';
import NovaProvaPage from './components/NovaProvaPage';
import ProvasPorProfessor from './components/provasPorProfessorPage';
import ProvasPorDisciplina from './components/provasPorDisciplina';

function App() {
  const storedUser = JSON.parse(localStorage.getItem('storedUser'));
  const [user, setUser] = useState(storedUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/inserirprova" exact>
            <NovaProvaPage />
          </Route>
          <Route path="/provasporprofessor" exact>
            <ProvasPorProfessor />
          </Route>
          <Route path="/ProvasPorDisciplina" exact>
            <ProvasPorDisciplina />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
