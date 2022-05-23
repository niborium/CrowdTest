import React from 'react';
import AdBoard from './adboard.jsx';
import { AdForm } from './adform.jsx';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';
import ProposalForm from './proposalform.jsx';
import ProposalBoard from './proposalboard.jsx';
import BidForm from './bidform.jsx';
import BidList from './viewbids.jsx';
import Profile from './profile.jsx';
import Faq from './faq.jsx';
import AdDelConfirm from './addelconfirm.jsx';
import AdEditForm from './adeditform.jsx';
import { useIndexContext } from '../context/contextAPI.js';

const App = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
    userRole,
    setUserRole,
    update,
    setUpdate,
    list,
    setList,
    companyName,
    proposalList,
    setProposalList,
    currentUserData,
    setCurrentUserData,
    bidList,
    setBidList,
    error,
  } = useIndexContext();

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
        author={'Robin Karlsson(WU21)'}
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

      <Profile currentUser={currentUser} userRole={userRole} />

      <Faq userRole={userRole} />

      <AdDelConfirm currentUserData={currentUserData} setList={setList} />

      <AdEditForm
        currentUserData={currentUserData}
        list={list}
        setList={setList}
      />
    </>
  );
};

export default App;