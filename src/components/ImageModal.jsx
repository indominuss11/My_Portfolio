import { useEffect } from 'react';

export default function ImageModal({ image, alt, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="image-modal active" onClick={onClose}>
      <button className="modal-close" type="button" onClick={onClose}>
        ×
      </button>
      <img
        className="modal-img"
        src={image}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
