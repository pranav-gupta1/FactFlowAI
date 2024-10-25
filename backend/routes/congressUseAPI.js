// congressUseAPI.js

function fetchCongressSchedule() {
    return [
        { date: "10/23/24", time: "N/A", accessLink: "N/A", event: "No meeting data for this date." },
        { date: "10/24/24", time: "9:00 AM (EDT)", accessLink: "https://judiciary.house.gov/", event: "House Committee on the Judiciary" },
        { date: "10/25/24", time: "N/A", accessLink: "N/A", event: "No meeting data for this date." }
    ];
}

console.log(fetchCongressSchedule());
