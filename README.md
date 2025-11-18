# Travel Landing Page (Jadoo) ✈️

A pixel-perfect, responsive travel agency landing page built with React.js and Pure CSS. This project replicates a Figma design with high fidelity and features a mock backend integration for dynamic data fetching.

---

## 🚀 Features Implemented

- **Pixel-Perfect UI**  
  Exact match of the provided Figma design (fonts, colors, spacing, z-indexes).
- **Responsive Design**  
  Fully responsive layout optimized for Desktop, Tablet, and Mobile devices.
- **Dynamic Data Fetching**
  - **Destinations:** Fetches trip data from a local JSON API.
  - **Testimonials:** User reviews load dynamically with a slider interface.
- **Interactive Newsletter**
  - Validates email format (Regex).
  - Sends a POST request to the mock API.
  - Displays success/error feedback states.
- **Modern Animations**  
  Hover effects, floating cards, and smooth transitions throughout the UI.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), **pure CSS**
- **Icons:** Lucide React
- **Backend (Mock):** JSON-Server
- **HTTP Client:** Fetch API

---

## ⚙️ Setup Instructions

To run this project locally, you need **Node.js** installed.

### 1. Clone the Repository
```bash

git clone https://github.com/Siddh-03/Travel-Landing-Page.git

cd Travel-Landing-Page
```

### 2. Install Dependencies
```bash

npm install
```

### 3. Start the Mock Backend (Terminal 1)

The frontend requires the API to be running in order to fetch data.
```bash

npm run server
```

The API will run at [http://localhost:4000](http://localhost:4000)

### 4. Start the React App (Terminal 2)

Open a **new terminal window** and run:
```bash

npm run dev
```

The app will launch at [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure

/
├── public/
├── src/
│   ├──Sections
│   ├── assets/
│   └── App.jsx
├── db.json             # Example mock backend data
├── vite.config.js
└── package.json


---

## 🎨 Design Reference

This project is based on the "[Travel Website Landing Page](https://www.figma.com/design/63i8Y0udXojQqU8X01dQuE/Travel-Website-Landing-Page--Community-?node-id=0-1&p=f&t=BIa4hJuCLef59PSb-0)" Figma design for maximum visual fidelity.
