const FAVORITES_KEY = 'favoriteArtists';

export const getFavorites = () => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const toggleFavorite = (artistId) => {
  const current = getFavorites();
  const exists = current.includes(artistId);

  const updated = exists
    ? current.filter((id) => id !== artistId)
    : [...current, artistId];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return !exists; 
};

export const isFavorite = (artistId) => {
  const current = getFavorites();
  return current.includes(artistId);
};
