// Function to preview the uploaded image
function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function() {
        var image = document.getElementById('imagePreview');
        image.src = reader.result;
        image.style.display = 'block'; // Show the image preview
    }

    if (input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]);
    }
}

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

    // Get the image preview
    var image = document.getElementById('imagePreview');

    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0, 400, 400);

    // Display the canvas
    canvas.style.display = 'block';

    // Show the download link
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.style.display = 'block';
}
