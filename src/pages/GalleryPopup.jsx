export default function GalleryPopup({ pic, onClose }) {
  return (
    <div className="fixed bg-slate-800 opacity-50">
      <img
        src={url}
        alt={`image-${index}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
