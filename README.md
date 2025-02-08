# Lostify
🚀 **Live Demo**: [Lostify](https://lositfy.web.app) 
## Purpose
Lostify is a web application designed to help users report and recover lost items. It allows users to submit lost and found items, manage submissions, and search for items. The app includes features like authentication, JWT-based login, a dynamic homepage, and a user-friendly interface.



## Key Features
- **Authentication**: Secure login system using JWT with email/password authentication and social login options.
- **Item Submission**: Users can submit lost items with detailed descriptions, images, and locations.
- **Item Management**: Admins can manage all submissions, approve or reject items, and update the status.
- **Search Functionality**: Users can search for lost items using filters like category, location, or description.
- **Responsive Design**: The app is fully responsive and works across various devices.
- **404 Page**: Custom error page for non-existent routes.
- **Toast/Sweet Alerts**: Notifications for actions like successful submissions or errors.
  
---

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth, JWT
- **Other Libraries**: React Router, Axios, SweetAlert2, React Hook Form

---
## 🧑‍💻 Used Dependencies 
```json
 "dependencies": {
        "@stripe/react-stripe-js": "^3.1.1",
        "@stripe/stripe-js": "^5.5.0",
        "@tanstack/react-query": "^5.64.1",
        "axios": "^1.7.9",
        "firebase": "^11.1.0",
        "localforage": "^1.10.0",
        "match-sorter": "^8.0.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-hook-form": "^7.54.2",
        "react-icons": "^5.4.0",
        "react-paginate": "^8.2.0",
        "react-router-dom": "^7.1.1",
        "react-slick": "^0.30.3",
        "react-stars": "^2.2.5",
        "react-toastify": "^11.0.3",
        "slick-carousel": "^1.8.1",
        "sort-by": "^1.2.0",
        "sweetalert2": "^11.15.10"
      },
```
---





# 🚀 Local Installation Guide

## **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/abid45342/EduManage-Client.git
cd CrowdFunding-Client 
```
## **2️⃣ Install Dependencies**
```sh
npm install
```
## **3️⃣ Configure Environment Variables**
```sh
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```
## **4️⃣ Run the Project Locally**
```sh
npm run dev
```








