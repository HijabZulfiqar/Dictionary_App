import './App.css';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';
import Display from './Display';
import NavBar from './NavBar';
import { useState } from 'react';
import { Theme } from '@radix-ui/themes';

function App() {
  const [searchedWord, setSearchedWord] = useState('');

  const onSubmitDataHandler = (word) => {
    // Set the searched word directly in the state
    setSearchedWord(word);
    console.log('Searched Word:', word);
  };

  return (
  <Theme>
      <div className='class="bg-white min-h-screen'>
      <div className="md:max-w-xl sm:max-w-sm mx-auto pt-10">
        <NavBar />
      </div>
      <Card>
        <SearchBar onSubmitData={onSubmitDataHandler} />
        <Display word={searchedWord} />
      </Card>
    </div>
  </Theme>
  );
}

export default App;
