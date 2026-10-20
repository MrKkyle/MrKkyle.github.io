/**
 * photo-albums.js — file-backed photo archive data layer
 * Loads content from `data/photo-albums.json` and falls back to built-in defaults.
 */

const PHOTO_ALBUMS_DATA_URL = '../data/photo-albums.json';

const DEFAULT_PHOTO_ALBUMS = [
  {
    title: "Mother's Day 2026",
    category: 'celebrations',
    categoryLabel: 'Celebrations',
    date: '2026-05-10',
    description: 'Photos from our Mother’s Day service and the tea that followed, honouring the mothers of our church family. Viewing is open to church members only.',
    albumUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-FOLDER-ID',
  },
  {
    title: "Mother's Day 2025",
    category: 'celebrations',
    categoryLabel: 'Celebrations',
    date: '2025-05-11',
    description: 'A look back at our Mother’s Day celebration in 2025, with the ladies of the church and their families. Viewing is open to church members only.',
    albumUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-FOLDER-ID',
  },
  {
    title: 'Games Evening',
    category: 'fellowship',
    categoryLabel: 'Fellowship',
    date: '2025-09-20',
    description: 'An evening of board games, snacks, and plenty of laughter in the fellowship hall. Viewing is open to church members only.',
    albumUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-FOLDER-ID',
  },
  {
    title: 'Church Camp 2025',
    category: 'camps',
    categoryLabel: 'Camps & Outings',
    date: '2025-07-04',
    description: 'Pictures from our annual church camp — teaching sessions, meals together, and time outdoors. Viewing is open to church members only.',
    albumUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-FOLDER-ID',
  },
  {
    title: 'Youth Hike',
    category: 'youth',
    categoryLabel: 'Youth',
    date: '2025-06-14',
    description: 'Our young people on the trail — a morning hike followed by devotions at the summit. Viewing is open to church members only.',
    albumUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-FOLDER-ID',
  },
  {
    title: 'Youth Breaking-up',
    category: 'youth',
    categoryLabel: 'Youth',
    date: '2025-12-06',
    description: 'The youth end-of-year breaking-up function, closing off a year of fellowship and growth. Viewing is open to church members only.',
    albumUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-FOLDER-ID',
  },
];

async function getPhotoAlbums() {
  try {
    const response = await fetch(PHOTO_ALBUMS_DATA_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Unable to load photo album data (${response.status})`);
    }

    const data = await response.json();
    const albums = Array.isArray(data) ? data : Array.isArray(data.albums) ? data.albums : [];
    if (!albums.length) {
      return DEFAULT_PHOTO_ALBUMS.map(normalizePhotoAlbum);
    }
    return albums.map(normalizePhotoAlbum);
  } catch (error) {
    return DEFAULT_PHOTO_ALBUMS.map(normalizePhotoAlbum);
  }
}

/**
 * An album link counts as "not ready yet" while it is blank or still holds the
 * REPLACE-WITH-FOLDER-ID placeholder, so the site never serves a broken link.
 */
function isAlbumLinkReady(url) {
  return Boolean(url) && url !== '#' && !url.includes('REPLACE-WITH-FOLDER-ID');
}

function normalizePhotoAlbum(album) {
  const category = album.category || 'other';
  return {
    title: album.title || '',
    category,
    categoryLabel: album.categoryLabel || category,
    date: album.date || '',
    description: album.description || '',
    albumUrl: album.albumUrl || '',
  };
}
