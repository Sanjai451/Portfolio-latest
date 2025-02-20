import React from "react";

interface CertificatesCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string; // Image URL for the certificate
}

const CertificationCard: React.FC<CertificatesCardProps> = ({ title, date, description, imageUrl }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Certificate Image with Fade Effect */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Date:</strong> {date}
        </p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
