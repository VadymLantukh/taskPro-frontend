import { useCallback, useState } from "react";

export const useToggle = (initialValue = false) => {
  const [open, setOpen] = useState(initialValue);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleToggle = useCallback(() => setOpen(!open), [open]);

  return {
    open,
    handleClose,
    handleOpen,
    handleToggle,
  };
};
