document.addEventListener("DOMContentLoaded", () => {
    const currentDateTime = new Date(); // Real-time current date and time
    const upcomingList = document.getElementById("upcoming-list");
    const pastList = document.getElementById("past-list");

    fetch("seminars.json")
        .then(response => response.json())
        .then(seminars => {
            seminars.forEach(seminar => {
                // Default seminar times if not specified
                const defaultStartTime = "11:30";
                const defaultEndTime = "12:15";
                
                // Parse seminar time, use default if not provided
                let endTime = defaultEndTime;
                if (seminar.time) {
                    const timeMatch = seminar.time.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
                    if (timeMatch) {
                        endTime = timeMatch[2]; // Extract end time (e.g., "15:00" from "14:00 - 15:00")
                    }
                }

                // Create Date object for seminar end time
                const seminarEndDateTime = new Date(`${seminar.date}T${endTime}:00`);
                
                // Seminar content (unchanged)
                const seminarContent = `
                    <article class="seminar">
                        <img src="${seminar.image}" alt="${seminar.speaker}" class="speaker-image">
                        <div class="seminar-details">
                            <h3>${seminar.title}</h3>
                            <p><strong>Speaker:</strong> ${seminar.speaker}</p>
                            <p><strong>Date:</strong> ${seminar.date}</p>
                            <p><strong>Time:</strong> ${seminar.time || `${defaultStartTime} - ${defaultEndTime}`}</p>
                            <p><strong>Location:</strong> ${seminar.location}</p>
                        </div>
                    </article>
                `;

                // Both upcoming and past seminars are clickable
                const seminarElement = `
                    <a href="seminar.html?id=${seminar.id}" class="seminar-link">
                        ${seminarContent}
                    </a>
                `;

                // Compare seminar end time to current date and time
                if (seminarEndDateTime < currentDateTime) {
                    pastList.innerHTML += seminarElement;
                } else {
                    upcomingList.innerHTML += seminarElement;
                }
            });
        })
        .catch(error => console.error("Error loading seminars:", error));
});