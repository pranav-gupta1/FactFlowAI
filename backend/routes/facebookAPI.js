// facebookAPI.js

function fetchFacebookPosts(userId) {
    return [
        { id: 1, content: "Congress is discussing a new policy", timestamp: "2 days ago" },
        { id: 2, content: "Update on important community events", timestamp: "1 month ago" },
        { id: 3, content: "No recent updates on your selected topics", timestamp: "Just now" }
    ];
}

console.log(fetchFacebookPosts("user_abc123"));
