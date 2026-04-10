import React from 'react'
import testPages from "./services/testPages"
import ExploreNFT from './ExploreNFT';


const ExploreNFTMap = () => {
  return (
    <section className='relative flex justify-center w-full bg-blue-600 xl:pt-30 lg:pt-20 pt-15 pb-20 overflow-hidden'>
      {
        testPages.exploreART.map(items =>(
             <ExploreNFT key={items.index} data={items}/>
        ))
      }
    </section>
  );
}

export default ExploreNFTMap;
