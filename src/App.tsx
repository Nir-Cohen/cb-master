import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/login';
import Leaderboard from './components/leaderboard';
import Game from './components/game';
import Home from './components/main';


const App = () => (
  <ThemeProvider theme={theme}>
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="game" element={<Game/>}/>
        <Route path="home" element = { <Home/>}/>
      </Routes>
  </BrowserRouter>
  </ThemeProvider>
);

export default App;