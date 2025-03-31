# React Scroll Progress Bar

This React component provides a visually appealing progress bar that indicates the user's scroll position on the page. It utilizes `framer-motion` for smooth animations.

## Features

-   **Dynamic Progress:** The progress bar's width dynamically updates as the user scrolls.
-   **Smooth Animations:** Uses `framer-motion` for fluid transitions.
-   **Customizable Styling:** Easily adjust the color, height, and shadow of the progress bar.
-   **Fixed Position:** Stays at the top of the viewport for constant visibility.

## Installation

1.  **Install the necessary dependencies:**

    ```bash
    npm install react framer-motion
    # or
    yarn add react framer-motion
    ```

2.  **Import and use the `ProgressBar` component:**

    ```jsx
    import React from 'react';
    import ProgressBar from './ProgressBar'; // Adjust the import path as needed

    function App() {
      return (
        <div>
          <ProgressBar />
          {/* Your page content here */}
          <div style={{ height: '2000px', padding: '20px' }}>
            {/*Add a lot of content so that the page scrolls*/}
            <h1>Scroll Down to See the Progress Bar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              {/*Add more text to make the page scroll*/}
            </p>
          </div>
        </div>
      );
    }

    export default App;
    ```

## Usage

1.  **Place the `ProgressBar` component at the top level of your component tree.** This ensures it's rendered above all other content.
2.  **Ensure your page has enough scrollable content** for the progress bar to function correctly.

## Component Code

```jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-2 z-50 rounded-full shadow-lg"
      style={{
        width: `${scrollPercentage}%`,
        background: "linear-gradient(90deg,rgb(0, 13, 255),rgb(4, 0, 254))",
        boxShadow: "0px 0px 5px rgba(22, 30, 254, 0.7)",
      }}
      initial={{ width: "0%" }}
      animate={{ width: `${scrollPercentage}%` }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
};

export default ProgressBar;
