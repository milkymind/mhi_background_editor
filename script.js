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

    // Get the uploaded image file
    var fileInput = document.getElementById('imageInput');
    var uploadedImage = fileInput.files[0];

    if (!uploadedImage) {
        alert('Please upload an image.');
        return;
    }

    // Create a FileReader to read the uploaded image
    var reader = new FileReader();
    reader.onload = function(event) {
        // Create a new Image object with the uploaded image
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

            // Hide the preview image
            var previewImage = document.getElementById('previewImage');
            previewImage.style.display = 'none';
        };
        image.src = event.target.result;
    };
    reader.readAsDataURL(uploadedImage);
}
