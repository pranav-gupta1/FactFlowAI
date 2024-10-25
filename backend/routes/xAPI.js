// xAPI.js

function fetchTweets(username) {
    return [
        { id: 1, content: "This is a recent update from " + username, timestamp: "3 days ago" },
        { id: 2, content: "This is another tweet about a Congressional event.", timestamp: "1 month ago" },
        { id: 3, content: "Updates involving the Library of Congress.", timestamp: "1 week ago" }
    ];
}

console.log(fetchTweets("User123"));
