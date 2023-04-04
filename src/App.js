import './App.css';
import Home from './pages/home';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupForm from './components/signup';
import Profile from './components/profile';

function App() {

  const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/login",
    element:
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
  },
  {
    path: "/signup",
    element:
      <QueryClientProvider client={queryClient}>
        <SignupForm />
      </QueryClientProvider>,
  },  {
    path: "/profile",
    element:
      <QueryClientProvider client={queryClient}>
        <Profile />
      </QueryClientProvider>,
  },
])

  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
