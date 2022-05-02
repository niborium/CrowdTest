import React, { useState, useEffect } from 'react';
import AdBoard from './adboard.jsx';
import { AdForm } from './adform.jsx';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';
import ProposalForm from './proposalform.jsx';
import ProposalBoard from './proposalboard.jsx';
import * as api from '../api/api';
import BidForm from './bidform.jsx';
import BidList from './viewbids.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [userRole, setUserRole] = useState('');
  const [update, setUpdate] = useState(false);
  const [list, setList] = useState([]);

  //* proposal list
  const [proposalList, setProposalList] = useState([]);

  //* bid form
  const [currentUserData, setCurrentUserData] = useState({
    id: '',
    author: '',
  });
  const [bidList, setBidList] = useState([]);

  const companyName = 'CrowdTest';
  console.log(currentUserData, setCurrentUserData);

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
          setCurrentUserData,
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
        author={'Robin Karlsson (WU21)'}
      />
      <BidForm
        currentUserData={currentUserData}
        setCurrentUserData={setCurrentUserData}
        bidList={bidList}
        setBidList={setBidList}
      />
      <BidList
        bidList={bidList}
        setBidList={setBidList}
        currentUserData={currentUserData}
      />
    </>
  );
};

export default App;
