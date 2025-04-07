const home = '/';

const CommonRoutes = {
    home,
};

const login = '/login';

const AuthRoutes = {
    login,
};

const artist = '/artist/:id';

const ArtistRoutes = {
    artist,
};

const favorites = '/favorites';

const FavoritesRoutes = {
    favorites,
};

const search = '/search'

const searchRoutes = {
    search,
}

const notFound = '/404';

const NotFoundRoutes = {
    notFound,
}

export const PageRoutes = {
    CommonRoutes,
    AuthRoutes,
    ArtistRoutes,
    FavoritesRoutes,
    NotFoundRoutes,
    searchRoutes,
}