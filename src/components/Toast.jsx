import { useEffect } from "react";

export default function Toast({ message, show, onClose, variant = "success" }) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className={`toast show app-toast toast-${variant}`} role="alert">
        <div className="toast-body d-flex align-items-center justify-content-between">
          <span>{message}</span>
          <button
            type="button"
            className="btn-close btn-close-white ms-2"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}
