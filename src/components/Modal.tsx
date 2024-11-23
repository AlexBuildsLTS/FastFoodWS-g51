interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg dark:bg-navy-800">
        <button
          onClick={onClose}
          className="float-right text-gray-500 dark:text-gray-300"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
