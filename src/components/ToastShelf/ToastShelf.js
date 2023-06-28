import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToasts}) {
  const [closeToast, setCloseToast] = React.useState(false);

  React.useEffect(() => {
    if (typeof(closeToast) !== 'number') {
      return;
    }
    const tempToasts = [...toasts];
    tempToasts.splice(closeToast, 1);
    setToasts([...tempToasts]);
    setCloseToast(false);
  }, [closeToast, setToasts, toasts]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => {
        return (
          <li key={Math.random()} className={styles.toastWrapper}>
            <Toast key={Math.random()} index={index} variant={toast.variant} closeToast={setCloseToast}>{toast.message}</Toast>
          </li>
        );
      })}

    </ol>
  );
}

const PureToastShelf = React.memo(ToastShelf);

export default PureToastShelf;
