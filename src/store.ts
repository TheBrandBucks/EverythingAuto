import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AudioState {
  audio: HTMLAudioElement | null;
  isPlaying: boolean;
  initializeAudio: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
  cleanup: () => void;
  isOtherAudioPlaying: boolean;
}

export interface TokenStore {
  token: string;
  setToken: (data: string) => void;
}

export const useTokenStore = create<TokenStore>()(
    devtools(
        persist(
            (set) => ({
                token: '',
                setToken: (data: string) => set(() => ({ token: data })),
            }),
            { name: 'token-store' }
        )
    )
);

export const useAudioStore = create<AudioState>((set, get) => ({
  audio: null,
  isPlaying: false,
  isOtherAudioPlaying: false,
  
  initializeAudio: () => {
    const audio = new Audio('/audio.wav');
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';
    
    set({ audio });
    
    // Auto-play when ready
    audio.addEventListener('canplaythrough', () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => set({ isPlaying: true }))
          .catch(() => {
            // Autoplay blocked, will play on user interaction
            console.log('Autoplay blocked - will play on user interaction');
          });
      }
    });
  },
  
  playAudio: () => {
    const { audio } = get();
    if (audio && !get().isPlaying) {
      // Try multiple play strategies
      const tryPlayStrategy = async (strategyIndex: number) => {
        const strategies = [
          () => audio.play(),
          () => new Promise((resolve) => {
            audio.currentTime = 0;
            resolve(audio.play());
          }),
          () => new Promise((resolve) => {
            audio.load();
            resolve(audio.play());
          })
        ];
        
        if (strategyIndex >= strategies.length) return;
        
        try {
          const playPromise = strategies[strategyIndex]();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                set({ isPlaying: true });
                console.log('Audio started playing via strategy', strategyIndex);
                return;
              })
              .catch(() => {
                // Try next strategy
                tryPlayStrategy(strategyIndex + 1);
              });
          }
        } catch (error) {
          console.log('Strategy failed, trying next:', error);
          tryPlayStrategy(strategyIndex + 1);
        }
      };
      
      tryPlayStrategy(0);
    }
  },
  
  pauseAudio: () => {
    const { audio } = get();
    if (audio && get().isPlaying) {
      audio.pause();
      set({ isPlaying: false });
    }
  },
  
  cleanup: () => {
    const { audio } = get();
    if (audio) {
      audio.pause();
      audio.src = '';
      set({ audio: null, isPlaying: false });
    }
  }
}));