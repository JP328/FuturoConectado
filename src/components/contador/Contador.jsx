import React, { useState, useEffect } from 'react';
const dias = 2

export default function Contador() {

  const [tempoRestante, setTempoRestante] = useState(dias * 24 * 60 * 60); 

  const [formatoContagemRegressiva, setFormatoContagemRegressiva] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRestante((prevTempo) => prevTempo - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (tempoRestante <= 24 * 60 * 60 && formatoContagemRegressiva) {
      // Mudar para o contador de 24 horas
      setFormatoContagemRegressiva(false);
      setTempoRestante(24 * 60 * 60);
    }
  }, [tempoRestante, formatoContagemRegressiva]);

  const calcularTempo = (tempo) => {
    if (formatoContagemRegressiva) {
      // Mostrar somente os dias
      const dias = Math.floor(tempo / (24 * 60 * 60));

      return `${dias} dia${dias !== 1 ? 's' : ''}`;
    } else {
      // Mostrar horas, minutos e segundos
      const horas = Math.floor(tempo / 3600);
      const minutos = Math.floor((tempo % 3600) / 60);
      const segundos = tempo % 60;
      return `${horas < 10 ? '0' : ''}${horas}h : ${minutos < 10 ? '0' : ''}${minutos}m : ${segundos < 10 ? '0' : ''}${segundos}s`;
    }
  };

  return (
    <>
      <p>{calcularTempo(tempoRestante)} restantes...</p>
    </>
  );
}
