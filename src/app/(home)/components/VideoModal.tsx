// components/VideoModal.tsx

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  if (!isOpen || !videoId) {
    return null;
  }

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
  <div className="relative w-full max-w-4xl max-h-full transform transition-all duration-300 scale-100 hover:scale-[1.01]">
    
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute -top-11 right-0 bg-white/20 text-white text-3xl 
                 font-semi-bold rounded-full w-10 h-10 flex items-center justify-center 
                 shadow-lg backdrop-blur-md hover:bg-white/40 transition-all"
    >
      &times;
    </button>

    {/* Video Container */}
    <div className="relative pt-[56.25%] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

  );
};

export default VideoModal;