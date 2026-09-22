import { useEffect } from 'react';
import { useAudioStore } from '@/store';

export const useBackgroundAudio = () => {
  const { initializeAudio, cleanup } = useAudioStore();

  useEffect(() => {
    initializeAudio(); // create and prepare the audio element on mount
    return () => cleanup(); // cleanup on unmount
  }, [initializeAudio, cleanup]);
};
