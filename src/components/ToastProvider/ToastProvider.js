import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    setToasts([...toasts, {id: crypto.randomUUID(), message, variant}]);
  }

  function dismissToast(id) {
    setToasts(toasts.filter(toast => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{toasts, createToast, dismissToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
