import React, { useState, createContext, useContext, useEffect } from 'react';
import * as api from '../api/api';

export const IndexContext = createContext();

export const useIndexContext = () => {
  return useContext(IndexContext);
};

const IndexContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [userRole, setUserRole] = useState('');
  const [update, setUpdate] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  //* proposal list
  const [proposalList, setProposalList] = useState([]);

  //* bid form
  const [currentUserData, setCurrentUserData] = useState({
    id: '',
    author: '',
  });
  const [bidList, setBidList] = useState([]);

  const companyName = 'CrowdTest';
  const fetchBids = async () => {
    try {
      const bids = await api.getBids();
      setBidList(bids);
      setError('');
    } catch (error) {
      setError('Error fetching bids');
    }
  };

  useEffect(() => {
    api
      .getAllProposal()
      .then((res) => setProposalList(res))
      .catch((err) => console.error(err));

    fetchBids();
  }, []);
  const value = {
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
    fetchBids,
    error,
    setError,
  };
  return (
    <IndexContext.Provider value={value}>{children}</IndexContext.Provider>
  );
};

export default IndexContextProvider;
