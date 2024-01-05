import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Display = ({ word }) => {
  const [searchWord, setSearchWord] = useState(word);
  const { data: dictionary, isLoading, isError: error } = useQuery({
    queryKey: ['words', searchWord],
    queryFn: async () => {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
      return response.data;
    },
    enabled: Boolean(searchWord),
  });

  useEffect(() => {
    setSearchWord(word);
  }, [word]);

  if (error) {
    return <div>Something went wrong {error.message}</div>;
  }
 

  return (
    <div className='mt-10 flex flex-col justify-start'>
    

{dictionary?.map((item) => (
  <div key={item.word}>
    {/* Section 1 */}
    <div className="ml-4 text-left">
      <h1 className="md:text-6xl text-xl font-bold font-body   text-gray-900">{item.word}</h1>
      {item.phonetics.length > 1 && (
        <p className="text-[#A544E9] font-body">/{item.phonetics[1].text}/</p>
      )}
    </div>
    {/* Section 2 */}
    <div className="min-h-screen max-w-md mx-auto pt-10">
      {item.meanings.map((meaning, meaningIndex) => (
        <div key={meaningIndex}>
          <div className="flex flex-row mt-4">
            <div className="ml-2">
              <p className="text-gray-600 font-body">{meaning.partOfSpeech}</p>
            </div>
            <div className="bg-gray-500 ml-2 mt-[12px] w-[448px] mx-auto h-[1px]"></div>
          </div>
          <div className="p-3">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <div className="p-4">
                  <div className="mt-6">
                  <ul className="list-none font-body list-inside">
  {meaning.definitions.map((definition, definitionIndex) => (
    <li key={definitionIndex} className="relative">
      <span className="absolute inline-block mt-2 h-2 w-2 bg-[#A641F2] rounded-full left-[-1.5rem]"></span>
      {definition.definition}
    </li>
  ))}
</ul>


                  </div>
                  <div className="mt-6 flex flex-row">
  {meaning.synonyms.length > 0 && (
    <>
      <p className="text-gray-600 font-bodymr-2">Synonyms:</p>
      <p className="text-[#A641F2] font-body">{meaning.synonyms.join(', ')}</p>
    </>
  )}
</div>


                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
))}



     
      
    </div>
  );
};

export default Display;
