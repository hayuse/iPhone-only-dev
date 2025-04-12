# Red Detection App

## Overview
The Red Detection App is a web application built with Next.js that utilizes the device's camera to capture images and detect the presence of red color within those images. If red is detected, the application will indicate a "loss" condition.

## Features
- Access the device camera to capture images.
- Real-time detection of red color in the captured images.
- User-friendly interface to display results.

## Project Structure
```
red-detection-app
├── public                # Static files
├── src
│   ├── components        # React components
│   │   └── Camera.tsx    # Camera component for capturing images
│   ├── pages             # Application pages
│   │   ├── index.tsx     # Main page displaying the camera component
│   │   └── api
│   │       └── detect-red.ts # API endpoint for red color detection
│   ├── styles            # CSS styles
│   │   └── globals.css    # Global styles for the application
│   └── utils             # Utility functions
│       └── colorDetection.ts # Functions for color detection logic
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/red-detection-app.git
   ```
2. Navigate to the project directory:
   ```
   cd red-detection-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Allow camera access when prompted.
4. Capture an image and check for red color detection results.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.