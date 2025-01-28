import { openDB } from 'https://cdn.jsdelivr.net/npm/idb@7/build/esm/index.js';

// Inicializa la base de datos
const initDB = async () => {
  const db = await openDB('videoDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('videos')) {
        db.createObjectStore('videos', { keyPath: 'id' });
      }
    },
  });
  return db;
};

// Guarda un video en IndexedDB
const saveVideoToDB = async (videoId, videoBlob) => {
  const db = await initDB();
  await db.put('videos', { id: videoId, blob: videoBlob });
  console.log(`Video ${videoId} almacenado exitosamente.`);
};

// Obtiene un video de IndexedDB
const getVideoFromDB = async (videoId) => {
  const db = await initDB();
  const video = await db.get('videos', videoId);
  if (video) {
    const url = URL.createObjectURL(video.blob);
    return url;
  } else {
    console.error(`Video ${videoId} no encontrado.`);
    return null;
  }
};

// Función para guardar todos los videos en IndexedDB
const saveVideos = async () => {
  const videoFiles = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4',
    'assets/videos/video3.mp4',
		'assets/videos/video4.mp4',
		'assets/videos/video5.mp4',
  ];

  for (const [index, videoPath] of videoFiles.entries()) {
    const response = await fetch(videoPath);
    const blob = await response.blob();
    await saveVideoToDB(`video${index + 1}`, blob);
  }

  console.log('Todos los videos fueron almacenados en IndexedDB.');
};

// Exponer las funciones para que Flutter pueda llamarlas
window.saveVideos = saveVideos;
window.getVideoFromDB = getVideoFromDB;
