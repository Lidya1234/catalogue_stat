import React from 'react';

import catalogueList from './catalogueList'
import catalogueFilter from './catalogueFilter'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
   <div>

     <catalogueList />
     <catalogueFilter />
    </div>
  );
}

export default App;
