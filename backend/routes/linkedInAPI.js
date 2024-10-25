// linkedinAPI.js

function fetchLinkedInPosts(companyId) {
    return [
        { id: 1, content: "LinkedIn update on Congressional activities", timestamp: "5 days ago" },
        { id: 2, content: "Government event insights", timestamp: "3 weeks ago" },
        { id: 3, content: "Congressional policy discussion updates", timestamp: "2 months ago" }
    ];
}

console.log(fetchLinkedInPosts("congress-gov"));
