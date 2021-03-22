import React, { useState } from 'react';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChangeForm = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.buttonForm}>
          <span className={s.labelForm}>Search</span>
        </button>

        <input
          onChange={handleChangeForm}
          value={search}
          className={s.inputForm}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;

// class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

//   state = {
//     search: '',
//   };

// handleChangeForm = e => {
//   const { value } = e.target;
//   this.setState({ search: value });
// };

// handleSubmit = e => {
//   e.preventDefault();
//   const { search } = this.state;
//   this.props.onSubmit(search);
//   this.setState({
//     search: '',
//   });
// };

//   render() {
//     const { search } = this.state;

// return (
//   <header className={s.Searchbar}>
//     <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//       <button type="submit" className={s.buttonForm}>
//         <span className={s.labelForm}>Search</span>
//       </button>

//       <input
//         onChange={this.handleChangeForm}
//         value={search}
//         className={s.inputForm}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//       />
//     </form>
//   </header>
// );
//   }
// }

// export default Searchbar;
