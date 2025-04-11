# Short Cyber-Physical Group Seminar Website

This is a lightweight, responsive website for tracking upcoming and past seminars. It dynamically displays seminars with speaker images, clickable links to detailed pages with abstracts and bios, and automatically sorts seminars as "upcoming" or "past" based on their date and time.

## Features

- **Dynamic Seminar List**: Shows upcoming and past seminars on the main page (`index.html`). Each seminar has a speaker image on the left and details (title, speaker, date, time, location) on the right.
- **Seminar Details**: Clicking a seminar opens a detail page (`seminar.html`) with the speaker’s image, details, abstract, and bio.
- **Automated Sorting**: Seminars are classified as "upcoming" if their end time (default 12:15 unless specified) hasn’t passed, or "past" otherwise.
- **Responsive Design**: Adapts to desktop and mobile devices, stacking elements vertically on smaller screens for better readability.
- **Easy Updates**: Seminar data lives in `seminars.json`, editable without touching HTML.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.).
- A local server tool for development (Python’s `http.server`, Node.js `http-server`, etc.).
- (Optional) A text editor to tweak `seminars.json` or styles.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/einstein07/scyphy-website.git
   cd scyphy-website

2. **Serve Locally**:
   - With Python:
     ```bash
     python3 -m http.server 8000

   - Or with Node.js http-server:
     ```bash
     npm install -g http-server
     http-server
   - Visit http://localhost:8000 (or http://127.0.0.1:8080 for http-server) in your browser.

3. **Customize**:
   - Edit seminars.json to add or update seminars
## File Structure
- `index.html`: Main page listing all seminars.
- `seminar.html`: Detail page for individual seminars.
- `styles.css`: Stylesheet for layout and responsive design.
- `script.js`: Script to populate the seminar list.
- `seminar.js`: Script to populate seminar details.
- `seminars.json`: Data file for seminar information.

## Data Format
Seminars are stored in `seminars.json`. Each seminar needs the following fields:
- **id**: Unique identifier (e.g., `seminar1`).
- **title**: Seminar title (e.g., `Introduction to XYZ`).
- **date**: Date in `YYYY-MM-DD` format (e.g., `2025-04-10`).
- **time**: Time range (e.g., `11:30 - 12:15`). Optional; defaults to `11:30 - 12:15` if omitted.
- **speaker**: Speaker’s name (e.g., `Dr. John Doe`).
- **topic**: Short topic description (e.g., `Exploring XYZ in Research`).
- **image**: Speaker image URL or path (e.g., `images/john-doe.jpg`).
- **abstract**: Seminar abstract text.
- **bio**: Speaker’s biography.
- **location**: Venue (e.g., `Room 101, Science Building`).
Example entry in `seminars.json`:
```json
{
    "id": "seminar1",
    "title": "Introduction to XYZ",
    "date": "2025-04-10",
    "time": "11:30 - 12:15",
    "speaker": "Dr. John Doe",
    "topic": "Exploring XYZ in Research",
    "image": "images/john-doe.jpg",
    "abstract": "This seminar explores the fundamentals of XYZ...",
    "bio": "Dr. John Doe is a leading researcher in XYZ...",
    "location": "Room 101, Science Building"
}
