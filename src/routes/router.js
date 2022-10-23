import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Root from '../layout/Root';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h2> This route is not found!</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]

    }
])
