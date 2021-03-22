import React, { useState } from 'react';

import Searchbar from './components/searchbar';
import ImageGallery from './components/imageGallery';

import './App.css';

const App = () => {
  const [search, setSearch] = useState('');

  const handleTakeDataFromForm = data => {
    setSearch(data);
  };

  return (
    <>
      <Searchbar onSubmit={handleTakeDataFromForm} />,
      <ImageGallery onSearch={search} />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     search: '',
//   };

// handleTakeDataFromForm = data => {
//   this.setState({
//     search: data,
//   });
// };

//   render() {
//     const { search } = this.state;

// return (
//   <>
//     <Searchbar onSubmit={this.handleTakeDataFromForm} />,
//     <ImageGallery onSearch={search} />
//   </>
// );
//   }
// }

// export default App;
