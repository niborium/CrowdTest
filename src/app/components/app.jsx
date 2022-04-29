import React, { useState, useEffect } from 'react';
import AdBoard from './adboard.jsx';
import { AdForm } from './adform.jsx';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';
import ProposalForm from './proposalform.jsx';
import ProposalBoard from './proposalboard.jsx';
import * as api from '../api/api';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [userRole, setUserRole] = useState('');
  const [update, setUpdate] = useState(false);
  const [list, setList] = useState([]);

  //* proposal list
  const [proposalList, setProposalList] = useState([]);

  const companyName = 'App';

  useEffect(() => {
    api
      .getAllProposal()
      .then((res) => setProposalList(res))
      .catch((err) => console.error(err));
  }, []);

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
      <ProposalForm
        setProposalList={setProposalList}
        proposalList={proposalList}
        update={update}
        setUpdate={setUpdate}
      />
      <ProposalBoard
        setProposalList={setProposalList}
        proposalList={proposalList}
        update={update}
        setUpdate={update}
      />
      <Footer
        company={companyName}
        data={{
          isLoggedIn,
          setIsLoggedIn,
          currentUser,
          setCurrentUser,
          userRole,
          setUserRole,
        }}
        author={'Author'}
      />
    </>
  );
};

export default App;
