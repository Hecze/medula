"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      setImageError(false); // Reiniciar el estado de error al actualizar la imagen
    }, 10000); // Actualiza la imagen cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section w-screen flex flex-center justify-center mb-24 mt-12">
      <div>
        <h1 className='px-auto py-24 px-4'>
          Escanea este qr desde whatsapp para activar el chatbot en tu número
        </h1>
        {imageError ? (
          <p className="text-red-500">Chatbot caído, por favor comunicarse con los desarrolladores.</p>
        ) : (
          <Image
            src={`http://3.128.94.171:3000/?t=${timestamp}`}
            alt="Imagen en tiempo real"
            width={500} // Ajusta el ancho según tus necesidades
            height={500} // Ajusta la altura según tus necesidades
            onError={() => setImageError(true)}
          />
        )}
      </div>
    </div>
  );
}
