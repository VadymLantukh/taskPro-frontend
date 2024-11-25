import { toast } from 'react-toastify';

export const showToast = (message, type = 'success') => {
  const config = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === 'success') {
    toast.success(message, config);
  } else if (type === 'error') {
    toast.error(message, config);
  } else {
    toast.info(message, config);
  }
};
