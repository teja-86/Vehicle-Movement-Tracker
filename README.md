# Vehicle Movement Tracker

A real-time web app showcasing vehicle movement on a map with React, Leaflet, and Tailwind CSS. It dynamically updates the vehicle's position and path on the map, highlighting integration with mapping libraries and responsive design principles.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)

## Features

- **Real-time Vehicle Tracking:** Display the current location of vehicles on a map in real-time using GPS data.
- **Interactive Map Interface:** Utilize Leaflet to provide a responsive, interactive map interface for users to zoom, pan, and explore different regions.
- **Custom Markers:** Use custom markers to represent vehicles, with different icons or colors based on the vehicle type or status.
- **Route Visualization:** Show the route taken by the vehicle with polylines on the map, allowing users to visualize the vehicle's journey.
- **Historical Route Playback:** Allow users to replay a vehicle's route history on the map, showing the path it took over a specified time period.
- **Responsive Design:** Ensure the map and tracking features are accessible and functional across different devices and screen sizes.
- **Vehicle Status Indicators:** Display vehicle statuses such as "moving," "idle," or "stopped" with different marker colors or icons.

## Tech Stack

- **Frontend:** React.js, Leaflet,JavaScript (ES6+), HTML5 & CSS3, Tailwind CSS
- **Maps and Geolocation:** Leaflet, Google Maps API
- **Version Control:** Git and GitHub
- **Deployment:** Render.com

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **Git** installed on your machine

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/teja-86/Vehicle-Movement-Tracker.git
   cd Vehicle-Movement-Tracker
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up the environment variables:**

   Give your needed environment variables in the .env file in the root of the project and configure them.

## Running the Application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit them: `git commit -m 'Add Your Feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.
