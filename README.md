# Web Storage API
The Web Storage API offers a straightforward and efficient method for storing and managing small amounts of client-side data for web applications. This browser feature allows for local storage of key-value pairs in a user’s web browser. It is commonly used for storing data that persists across browser sessions, making it ideal for storing user-specific data, settings, or preferences

### Here's an example that saves the user's background and font-color preferences:
 These changes are saved to local storage, so they persist even if the user closes the browser window and comes back later.

```jsx
import { useState } from 'react';

const LocalStorageExample = () => {
    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem('backgroundColor') || '#ffffff'
    );
    const [fontColor, setFontColor] = useState(
        localStorage.getItem('fontColor') || '#000000'
    );

    const handleBackgroundColorChange = (e) => {
        const color = e.target.value;
        setBackgroundColor(color);
        localStorage.setItem('backgroundColor', color);
    };

    const handleFontChange = (e) => {
        const font = e.target.value;
        setFontFamily(font);
        localStorage.setItem('fontFamily', font);
    };

    return (
        <div>
            <h1> Local Storage Playground </h1>
            <div style={{ backgroundColor: backgroundColor }} >
                <p style={{ color: fontColor }} >
                    Use the Web Storage API to save the users local updates
                </p>
                <div>
                    <form>
                        <div>
                            <label htmlFor="background-color" className="sr-only">
                                Choose a background color
                            </label>
                            <input
                                id="background-color"
                                type="color"
                                value={backgroundColor}
                                onChange={handleBackgroundColorChange}
                            />

                            <label htmlFor="font-color" className="sr-only">
                                Choose a font color
                            </label>
                            <input
                                id="font-color"
                                type="color"
                                value={fontColor}
                                onChange={handleFontColorChange}
                            />
                        </div>
                    </form>                
                </div>
            </div>
        </div>
    );
};
```