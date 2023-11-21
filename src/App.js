import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider } from './context/DarkModeContext';

const queryClient = new QueryClient();

function App() {
  return(
    <DarkModeProvider>
      <Navbar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </DarkModeProvider>
  )
}

export default App;
