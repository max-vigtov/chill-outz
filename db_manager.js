import { openDB } from 'idb';

// Inicializa la base de datos
const initDB = async () => {
  const db = await openDB('videoDB', 1, {
    upgrade(db) {
      // Crea una "store" para los videos si no existe
      if (!db.objectStoreNames.contains('videos')) {
        db.createObjectStore('videos', { keyPath: 'id' });
      }
    },
  });
  return db;
};

const saveVideoToDB = async (videoId, videoBlob) => {
  const db = await initDB();
  await db.put('videos', { id: videoId, blob: videoBlob });
  console.log(`Video ${videoId} almacenado exitosamente.`);
};

// Ejemplo de cómo guardar un video
const saveVideos = async () => {
  // Lista de tus videos (asegúrate de que los paths sean correctos)
  const videoFiles = ['assets/video1.mp4', 'assets/video2.mp4'];

  for (const [index, videoPath] of videoFiles.entries()) {
    const response = await fetch(videoPath);
    const blob = await response.blob(); // Convierte el video en un Blob
    await saveVideoToDB(`video${index + 1}`, blob); // Guarda en IndexedDB
  }
};

saveVideos();


const getVideoFromDB = async (videoId) => {
  const db = await initDB();
  const video = await db.get('videos', videoId);
  if (video) {
    const url = URL.createObjectURL(video.blob); // Crea una URL para el Blob
    return url; // Esta URL se puede usar como source del video player
  } else {
    console.error(`Video ${videoId} no encontrado en IndexedDB.`);
    return null;
  }
};

// Ejemplo de cómo usarlo
const playVideo = async (videoId) => {
  const videoUrl = await getVideoFromDB(videoId);
  if (videoUrl) {
    const videoElement = document.getElementById('videoPlayer'); // Tu elemento <video>
    videoElement.src = videoUrl;
    videoElement.play();
  }
};