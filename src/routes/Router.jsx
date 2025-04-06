import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PageLayout from '../layout/PageLayout'
import { PageRoutes } from './PageRoutes'
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import Artist from '../pages/Artist/Artist'
import NotFound from '../pages/NotFound/NotFound'
import Favorites from '../pages/Favorites/Favorites'

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <PageLayout />,
        children:[
            {
                path: PageRoutes.CommonRoutes.home,
                element: <Home/>,
            },
            {
                path:PageRoutes.ArtistRoutes.artist,
                element:<Artist/>,
            },
            {
                path: PageRoutes.AuthRoutes.login,
                element: <Auth/>,
            },
            {
                path: PageRoutes.NotFoundRoutes.notFound,
                element: <NotFound/>,
            },
            {
                path: PageRoutes.FavoritesRoutes.favorites,
                element:<Favorites/>,
            }
        ]
    }
]) 

export default Router