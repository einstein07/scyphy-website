document.addEventListener("DOMContentLoaded", () => {
    const currentDateTime = new Date(); // Real-time current date and time
    const upcomingList = document.getElementById("upcoming-list");
    const pastList = document.getElementById("past-list");

    fetch("../seminars.json")
        .then(response => response.json())
        .then(seminars => {
            // Default seminar times if not specified
            const defaultStartTime = "11:30";
            const defaultEndTime = "12:15";
            // Ensure seminars are sorted by date
            seminars.forEach(seminar => {
                // Parse seminar time, use default if not provided
                let endTime = defaultEndTime;
                if (seminar.time) {
                    const timeMatch = seminar.time.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
                    if (timeMatch) {
                        endTime = timeMatch[2]; // Extract end time (e.g., "15:00" from "14:00 - 15:00")
                    }
                }
                seminar.seminarEndDateTime = new Date(`${seminar.date}T${endTime}:00`);
            });

            const pastSeminars = seminars
                .filter(seminar => seminar.seminarEndDateTime < currentDateTime)
                .sort((a, b) => b.seminarEndDateTime - a.seminarEndDateTime); // latest past first

            const upcomingSeminars = seminars
                .filter(seminar => seminar.seminarEndDateTime >= currentDateTime)
                .sort((a, b) => a.seminarEndDateTime - b.seminarEndDateTime); // soonest upcoming first

            [...pastSeminars, ...upcomingSeminars].forEach(seminar => {
                const seminarContent = `
                    <article class="seminar">
                        <div class="seminar-details">
                            <h3>${seminar.title}</h3>
                            <p><strong>Speaker:</strong> ${seminar.speaker}</p>
                            <p><strong>Date:</strong> ${seminar.date}</p>
                            <p><strong>Time:</strong> ${seminar.time || `${defaultStartTime} - ${defaultEndTime}`}</p>
                            <p><strong>Location:</strong> ${seminar.location}</p>
                        </div>
                    </article>
                `;

                const seminarElement = `
                    <a href="seminar.html?id=${seminar.id}" class="seminar-link">
                        ${seminarContent}
                    </a>
                `;

                if (seminar.seminarEndDateTime < currentDateTime) {
                    pastList.innerHTML += seminarElement;
                } else {
                    upcomingList.innerHTML += seminarElement;
                }
            });
        })
        .catch(error => console.error("Error loading seminars:", error));
});