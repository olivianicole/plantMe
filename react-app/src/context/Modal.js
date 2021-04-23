import React, { useEffect, useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [ value, setValue ] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
};

export function Modal ({ onClose, children, setShowModal }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content" >
                {children}
            </div>
        </div>,
        modalNode
    );
};

export function ShoppingCartModal ({ onClose, children, setShowModal }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="cart-modal">
            <div id="cart-modal-background" onClick={onClose} />
            <div id="cart-modal-content" >
                {children}
            </div>
        </div>,
        modalNode
    );
};

export function NewListingModal ({ onClose, children, setShowModal }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="listing-modal">
            <div id="listing-modal-background" onClick={onClose} />
            <div id="listing-modal-content" >
                {children}
            </div>
        </div>,
        modalNode
    );
};

export function SearchBarModal ({ onClose, children, setShowModal }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="search-modal">
            <div id="search-modal-background" onClick={onClose} />
            <div id="search-modal-content" >
                {children}
            </div>
        </div>,
        modalNode
    );
};