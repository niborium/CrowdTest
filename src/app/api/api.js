const lskey = "ct-list";
//POST (Sends new post for adboard)
export function postNewadd(title, desc, devices, budget, nroftesters, startdate, enddate, author) {
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
        'id': generateId(7),
        'title': title,
        'description': desc,
        'devicetotest': devices,
        'budget': cbudget,
        'nroftesters': cnroftesters,
        'startdate': cstartdate,
        'enddate': cenddate,
        'author': author
    };
    
    //Functions to random id
    function dec2hex (dec) {
        return dec.toString(16).padStart(2, "0")
    }
    function generateId (len) {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, dec2hex).join('')
    }
    
    //Merge new post with existingPosts
    existingPosts.push(newPost);

    //Push to localStorage
    localStorage.setItem(lskey, JSON.stringify(existingPosts));
}
//GET (Gets all posts from localStorage for adboard)
export function getAllpost(){
    var posts = JSON.parse(localStorage.getItem(lskey) || "[]");
    return posts;
}