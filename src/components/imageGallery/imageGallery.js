import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { handleFetchApi } from '../../services/pixabayApi';
import ImageGalleryItem from '../imageGalleryItem';
import Button from '../button';
import Modal from '../modal';

import Loader from 'react-loader-spinner';
import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const ImageGallery = ({ onSearch }) => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [button, setButton] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const handleIncrementPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  useEffect(() => {
    handleClearPage();
  }, []);

  useEffect(() => {
    setSearch(onSearch);
    if (onSearch === '') {
      return;
    }

    const prevSearch = search;
    const nextSearch = onSearch;

    if (prevSearch !== nextSearch) {
      handleClearPage();
      setStatus(Status.PENDING);
    }

    handleFetchApi(nextSearch, page, handleIncrementPage)
      .then(({ hits }) => {
        if (hits.length === 12) {
          setButton(true);
        }

        setPhotos(hits);
        setStatus(Status.RESOLVED);

        if (hits.length === 0) {
          return Promise.reject(
            new Error(`At your request  ${nextSearch}   nothing found`),
          );
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [onSearch, search]);

  const handleClearPage = () => {
    setPage(1);
  };

  const handleLoadMore = () => {
    const nextSearch = onSearch;

    handleFetchApi(nextSearch, page, handleIncrementPage)
      .then(({ hits }) => {
        setButton(true);

        if (hits.length < 12) {
          setButton(false);
        }
        setPhotos([...photos, ...hits]);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleOpenModal = e => {
    if (e.target === e.currentTarget) {
      return;
    }

    const tags = e.target.attributes.src.value;

    const currentPhoto = photos.find(photo =>
      photo.webformatURL.includes(tags),
    );

    setModalItem(currentPhoto);
    toggleModal();
  };

  if (modal) {
    return <Modal onClose={toggleModal} modalItem={modalItem} />;
  }

  if (status === 'idle') {
    return null;
  }

  if (status === 'pending') {
    return (
      <Loader
        type="Audio"
        color="#00BFFF"
        height={80}
        width={200}
        timeout={5000}
      />
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className={s.imageGallery} onClick={handleOpenModal}>
          {photos.map(ImageGalleryItem)}
        </ul>
        {button && <Button onClick={handleLoadMore} />}
      </>
    );
  }

  if (status === 'rejected') {
    return <div className={s.error}>{error.message}</div>;
  }
};

ImageGallery.propTypes = {
  onSearch: PropTypes.string,
};

export default ImageGallery;

// class ImageGallery extends Component {
//   static propTypes = {
//     onSearch: PropTypes.string,
//   };

//   state = {
//     photos: [],
//     search: '',
//     page: 1,
//     status: Status.IDLE,
//     error: null,
//     button: false,
//     modal: false,
//     modalItem: null,
//   };

//   componentDidMount() {
//     this.handleClearPage();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevSearch = prevProps.onSearch;
//     const nextSearch = this.props.onSearch;
//     const { page } = this.state;

//     if (prevSearch !== nextSearch) {
//       this.handleClearPage();
//       this.setState({
//         status: Status.PENDING,
//       });

//       handleFetchApi(nextSearch, page, this.handleIncrementPage)
//         .then(({ hits }) => {
//           if (hits.length === 12) {
//             this.setState({ button: true });
//           }

//           this.setState({ photos: hits, status: Status.RESOLVED });
//           if (hits.length === 0) {
//             return Promise.reject(
//               new Error(`At your request  ${nextSearch}   nothing found`),
//             );
//           }
//         })
//         .catch(error => this.setState({ error, status: Status.REJECTED }));
//     }
//   }

//   handleIncrementPage = () => {
//     this.setState({
//       page: this.state.page + 1,
//     });
//   };

//   handleClearPage = () => {
//     this.setState({
//       page: 1,
//     });
//   };

//   handleLoadMore = () => {
//     const nextSearch = this.props.onSearch;
//     const { page, photos } = this.state;

//     handleFetchApi(nextSearch, page, this.handleIncrementPage)
//       .then(({ hits }) => {
//         this.setState({ button: true });

//         if (hits.length < 12) {
//           this.setState({ button: false });
//         }
//         this.setState({ photos: [...photos, ...hits] });

//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       })
//       .catch(error => this.setState({ error, status: Status.REJECTED }));
//   };

//   toggleModal = () => {
//     const { modal } = this.state;
//     this.setState({ modal: !modal });
//   };

//   handleOpenModal = e => {
//     if (e.target === e.currentTarget) {
//       return;
//     }

//     const { photos } = this.state;
//     const tags = e.target.attributes.src.value;

//     const currentPhoto = photos.find(photo =>
//       photo.webformatURL.includes(tags),
//     );

//     this.setState({ modalItem: currentPhoto });
//     this.toggleModal();
//   };

//   render() {
//     const { photos, status, error, button, modal, modalItem } = this.state;

//     if (modal) {
//       return <Modal onClose={this.toggleModal} modalItem={modalItem} />;
//     }

//     if (status === 'idle') {
//       return null;
//     }

//     if (status === 'pending') {
//       return (
//         <Loader
//           type="Audio"
//           color="#00BFFF"
//           height={80}
//           width={200}
//           timeout={5000}
//         />
//       );
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ul className={s.imageGallery} onClick={this.handleOpenModal}>
//             {photos.map(ImageGalleryItem)}
//           </ul>
//           {button && <Button onClick={this.handleLoadMore} />}
//         </>
//       );
//     }

//     if (status === 'rejected') {
//       return <div className={s.error}>{error.message}</div>;
//     }
//   }
// }

// export default ImageGallery;
