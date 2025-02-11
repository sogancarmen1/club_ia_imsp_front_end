import { useState } from "react";
import { X } from "lucide-react"; // Icône de croix

interface ImageGalleryProps {
  files: any;
  onDelete: (fileName: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ files, onDelete }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      {/* Grille des images */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {files?.map((img: any, index: any) => (
          <div key={index} className="group relative">
            {/* Image */}
            <img
              src={`http://localhost:4000/test-image/${img.files_names}`}
              alt={img.original_name}
              className="h-32 w-full cursor-pointer rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(img.files_names)}
            />

            {/* Bouton de suppression */}
            <button
              className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => onDelete(img.id)}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
