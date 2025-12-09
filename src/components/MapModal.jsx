import { X } from 'lucide-react';

export default function MapModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <div className="relative z-10 bg-[#2c1810] rounded-lg border-4 border-[#1a110d] shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-20 bg-[#8b0000] hover:bg-[#a00000] text-white rounded-full p-1.5 transition-colors shadow-lg"
          title="Zavřít mapu"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div className="bg-[#e6d5aa] border-b-2 border-[#2c1810] px-4 py-2">
          <h3 className="font-cinzel font-bold text-[#2c1810] text-lg tracking-wide">
            Mapa Silvarionu
          </h3>
        </div>

        {/* Map wrapper */}
        <div className="relative" style={{ width: '930px', height: '608px', maxWidth: '90vw', maxHeight: '80vh' }}>
          <div className="w-full h-full">
            <iframe
              src="https://k2ata2.github.io/mapa-silvarion/"
              scrolling="no"
              className="w-full h-full border-0"
              title="Mapa Silvarionu"
              style={{ 
                width: '930px', 
                height: '608px',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

