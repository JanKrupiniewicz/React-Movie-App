import { useRef, useEffect } from "react";
import { createPortal } from 'react-dom';

function Modal({children, open, onClose}) {
    const dialog = useRef();

    useEffect(() => {
        if(open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog className="rounded-xl md:w-1/3" ref={dialog} onClose={onClose}>
            {open ? children : null}
        </dialog>,
        document.getElementById('modal-root')
    );
};

export default Modal;