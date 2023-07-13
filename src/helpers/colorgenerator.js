export const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };




  
  export const getTextColor = (backgroundColor) => {
    // Convert the background color to RGB
    const hexToRgb = (color) => {
      const hex = color.replace('#', '');
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r, g, b];
    };

    // Calculate the brightness of the background color
    const calculateBrightness = (rgb) => {
      return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    };

    // Get the RGB values of the background color
    const rgb = hexToRgb(backgroundColor);
    const brightness = calculateBrightness(rgb);

    // Determine the appropriate text color based on brightness
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };