const detectRedColor = (imageData: ImageData): boolean => {
    const { data, width, height } = imageData;
    let redDetected = false;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];     // Red channel
        const g = data[i + 1]; // Green channel
        const b = data[i + 2]; // Blue channel

        // Simple threshold for detecting red color
        if (r > 150 && g < 100 && b < 100) {
            redDetected = true;
            break;
        }
    }

    return redDetected;
};

export { detectRedColor };