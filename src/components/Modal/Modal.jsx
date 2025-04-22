import React from 'react';

const Modal = () => {
    return (
        <div className="p-6 space-y-4">
            {/* Trigger button */}
            <a href="#my_modal_8" className="btn">
                Open Modal
            </a>

            {/* DaisyUI anchor‑link modal */}
            <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">This modal works with anchor links in React.</p>

                    <div className="modal-action">
                        {/* Close by linking back to the top (or use “modal-close” btn) */}
                        <a href="#" className="btn">
                            Close
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;