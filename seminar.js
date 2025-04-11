document.addEventListener("DOMContentLoaded", () => {
    // Get the seminar ID from the URL (e.g., ?id=seminar1)
    const urlParams = new URLSearchParams(window.location.search);
    const seminarId = urlParams.get("id");

    if (!seminarId) {
        document.getElementById("seminar-details").innerHTML = "<p>No seminar selected.</p>";
        return;
    }

    fetch("seminars.json")
        .then(response => response.json())
        .then(seminars => {
            const seminar = seminars.find(s => s.id === seminarId);
            if (seminar) {
                document.getElementById("title").textContent = seminar.title;
                document.getElementById("speaker-image").src = seminar.image;
                document.getElementById("speaker-image").alt = seminar.speaker;
                document.getElementById("speaker").textContent = seminar.speaker;
                document.getElementById("date").textContent = seminar.date;
                document.getElementById("time").textContent = seminar.time;
                document.getElementById("location").textContent = seminar.location;
                document.getElementById("abstract").textContent = seminar.abstract;
                document.getElementById("bio").textContent = seminar.bio;
            } else {
                document.getElementById("seminar-details").innerHTML = "<p>Seminar not found.</p>";
            }
        })
        .catch(error => {
            console.error("Error loading seminar details:", error);
            document.getElementById("seminar-details").innerHTML = "<p>Error loading seminar details.</p>";
        });
});