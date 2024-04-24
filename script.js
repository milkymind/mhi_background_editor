// Function to process the uploaded image
function processImage() {
    // Get the selected background color
    var bgColor = document.getElementById('bgColor').value;

    // Get the canvas and context
    var canvas = document.getElementById('resultCanvas');
    var ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 400;
    canvas.height = 400;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Get the uploaded image
    var image = new Image();
    image.onload = function() {
        // Draw the uploaded image on top of the background
        ctx.drawImage(image, 0, 0, 400, 400);

        // Display the canvas
        canvas.style.display = 'block';

        // Show the download link
        var downloadLink = document.getElementById('downloadLink');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.style.display = 'block';

        // Create a preview image element
        var previewImage = document.getElementById('previewImage');
        previewImage.src = canvas.toDataURL('image/png');
        previewImage.style.display = 'block';
    };

    // Set the source of the image
    image.src = 'pixelated.png'; // Replace 'pixelated.png' with the path to your 32x32 pixel image
}
