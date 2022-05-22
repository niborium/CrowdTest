import 'regenerator-runtime/runtime';
import axios from 'axios';
const lskey = 'ct-list';
const bidkey = 'bid-data';

//POST (Sends new post for adboard)
export function postNewadd(
  title,
  desc,
  devices,
  budget,
  nroftesters,
  startdate,
  enddate,
  author
) {
  //Get current list of ads (parsed from localStorage)
  var existingPosts = JSON.parse(localStorage.getItem(lskey)) || [];

  //Converts budget and nroftesters (numbers) to strings for localStorage
  var cbudget = budget.toString();
  var cnroftesters = nroftesters.toString();

  //Converts datetimes (startdate + enddate) to string for localStorage
  var cstartdate = startdate.toString();
  var cenddate = enddate.toString();

  //Inputs for new post to be added to localStorage
  var newPost = {
    id: generateId(7),
    title: title,
    description: desc,
    devicetotest: devices,
    budget: cbudget,
    nroftesters: cnroftesters,
    startdate: cstartdate,
    enddate: cenddate,
    author: author,
  };

  //Functions to random id
  function dec2hex(dec) {
    return dec.toString(16).padStart(2, '0');
  }
  function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
  }

  //Merge new post with existingPosts
  existingPosts.push(newPost);

  //Push to localStorage
  localStorage.setItem(lskey, JSON.stringify(existingPosts));
}
//GET (Gets all posts from localStorage for adboard)
export function getAllpost() {
  var posts = JSON.parse(localStorage.getItem(lskey) || '[]');
  return posts;
}
export const postProposal = async (description) => {
  await axios
    .post('https://6268f190f2c0cdabac06d6a5.mockapi.io/ImprovementProposals', {
      Description: description,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getAllProposal = async () => {
  return await axios
    .get('https://6268f190f2c0cdabac06d6a5.mockapi.io/ImprovementProposals')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const postBid = async (id, author, totalAmount) => {
  await axios
    .post('https://628a11e15da6ddfd5d5f66fa.mockapi.io/bids', {
      user: id,
      author: author,
      totalAmount: totalAmount.toString(),
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getBids = async (id) => {
  return await axios
    .get('https://628a11e15da6ddfd5d5f66fa.mockapi.io/bids')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export function deleteAd(id) {
  const bids = JSON.parse(localStorage.getItem(lskey) || '[]');
  const newAds = bids.filter((bid) => bid.id !== id);

  localStorage.setItem(lskey, JSON.stringify(newAds));
}

export function editAd(data) {
  const posts = JSON.parse(localStorage.getItem(lskey) || '[]');
  const newPosts = posts.map((post) => (post.id === data.id ? data : post));
  localStorage.setItem(lskey, JSON.stringify(newPosts));
}
