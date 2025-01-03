# **Cinemaniacs Club Website**

Welcome to the official website of **Cinemaniacs Club**, a vibrant community of movie enthusiasts who love to review, discuss, and celebrate cinema.

---

## **Features**
- **Responsive Design**:
  - Optimized for desktop, tablet, and mobile devices.
- **Dynamic Sections**:
  - **Hero Banner**: Welcomes users with an enticing message about discovering great movies.
  - **About Us**: Learn about the Cinemaniacs community and our mission.
  - **Latest Reviews**: Highlights top reviews of trending movies.
  - **Join the Club**: A sign-up form for movie enthusiasts to become members.
- **Interactive Features**:
  - Functional navigation menu with mobile support.
  - Engaging call-to-action buttons.
  - Smooth scrolling between sections.

---

## **Technologies Used**
- **Frontend**:
  - React.js (via Vite)
  - CSS (modular design for component-level styling)
- **Tooling**:
  - Vite.js (fast development server and bundler)
- **Hosting**:
  - Compatible with platforms like Netlify, Vercel, and AWS.

---

## **Installation and Setup**

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Steps to Set Up Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/cinemaniacs-club.git
   cd cinemaniacs-club
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

4. **Build for Production**:
   To generate a production-ready build, run:
   ```bash
   npm run build
   ```

5. **Preview the Build**:
   Test the build locally before deployment:
   ```bash
   npm run preview
   ```

---

## **Deployment**

### Deploying to Netlify
1. Create a free account at [Netlify](https://www.netlify.com/).
2. Drag and drop the `dist/` folder generated by `npm run build` into the Netlify dashboard.
3. Your website will be live in seconds!

### Deploying to Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy your project:
   ```bash
   vercel
   ```

### Deploying to AWS S3
1. Upload the contents of the `dist/` folder to an S3 bucket.
2. Configure the bucket for static website hosting.

---

## **Usage**

- Use the navigation bar to explore sections like **Home**, **About Us**, **Reviews**, and **Join**.
- Scroll to the **Reviews** section to explore the latest movie reviews.
- Use the **Join the Club** form to sign up as a member.

---

## **Customization**

### Update Content
- Modify content in the respective React components located in `src/components/`.

### Update Styles
- Edit the CSS files in `src/styles/` to customize the design.

---

## **Contributing**

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License.

---
