const getKey = (userId) => `favoritesArtists_${userId}`;

export const getFavorites = (userId) => {
  const stored = localStorage.getItem(getKey(userId));
  return stored ? JSON.parse(stored) : [];
};

export const toggleFavorite = (userId,artistId) => {
  const current = getFavorites(userId);
  const exists = current.includes(artistId);

  const updated = exists
    ? current.filter((id) => id !== artistId)
    : [...current, artistId];

  localStorage.setItem(getKey(userId), JSON.stringify(updated));
  return !exists; 
};

export const isFavorite = (userId,artistId) => {
  const current = getFavorites(userId);
  return current.includes(artistId);
};
