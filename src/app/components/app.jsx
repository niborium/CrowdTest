import React, { useState } from 'react';
import AdBoard from './adboard.jsx';
import { AdForm } from './adform.jsx';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [userRole, setUserRole] = useState('');
  const [update, setUpdate] = useState(false);
  const [list, setList] = useState([]);
  
  const companyName = 'CrowdTest';

  return (
    <>
      <Header
        title={companyName}
        props={{
          isLoggedIn,
          setIsLoggedIn,
          currentUser,
          setCurrentUser,
          userRole,
          setUserRole,
        }}
      />
      <AdBoard
        data={{
          currentUser,
          userRole,
          update,
          list,
          setList,
        }}
      />
      <AdForm
        currentUser={currentUser}
        update={update}
        setUpdate={update}
        setList={setList}
      />
      <Footer company={companyName} author={'Robin Karlsson (WU21)'} />
    </>
  );
};

export default App;
