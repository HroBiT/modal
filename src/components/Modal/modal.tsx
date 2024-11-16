import React from "react";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

interface ModalComponent extends React.FC<ModalProps> {
  Content: typeof Content;
  Footer: typeof Footer;
  Header: typeof Header;
}

const Modal: ModalComponent = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg shadow-lg flex flex-col">
        <div className="absolute inset-0" onClick={onClose}></div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

Modal.Content = Content;
Modal.Footer = Footer;
Modal.Header = Header;

export default Modal;