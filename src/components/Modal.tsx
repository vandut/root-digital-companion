
import React, { ReactNode } from 'react';
import { Card } from './Card';
import { StyledButton } from './StyledButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  hasBackdrop?: boolean;
  type?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, hasBackdrop = true, type = 'default' }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const backdropClasses = hasBackdrop ? "bg-stone-100/70 backdrop-blur-sm" : "";
  const sizeClass = type === 'factionDetail' ? 'md:max-w-4xl' : 'max-w-lg';


  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out ${backdropClasses}`}
      onClick={handleBackdropClick}
    >
      <Card className={`w-full ${sizeClass} max-h-[90vh] overflow-y-auto bg-amber-50 border-2 border-stone-500 shadow-2xl`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-stone-900">{title}</h2>
          <StyledButton onClick={onClose} variant="secondary" className="!py-1 !px-3">Close</StyledButton>
        </div>
        {children}
      </Card>
    </div>
  );
};