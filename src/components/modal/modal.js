import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ modalItem, tags, onClose }) => {
  const { largeImageURL } = modalItem;

  useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  const handleEscClose = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleModalCloseOnClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleModalCloseOnClick}>
      <div className={s.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;

// class Modal extends Component {
//   static propTypes = {
// largeImageURL: PropTypes.string,
// tags: PropTypes.string,
// onClose: PropTypes.func,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleEscClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleEscClose);
//   }

// handleEscClose = e => {
//   if (e.code === 'Escape') {
//     this.props.onClose();
//   }
// };

// handleModalCloseOnClick = e => {
//   if (e.target === e.currentTarget) {
//     this.props.onClose();
//   }
// };

//   render() {
//     const { largeImageURL, tags } = this.props.modalItem;

// return createPortal(
//   <div className={s.overlay} onClick={this.handleModalCloseOnClick}>
//     <div className={s.modal}>
//       <img src={largeImageURL} alt={tags} />
//     </div>
//   </div>,
//   modalRoot,
// );
//   }
// }

// export default Modal;
