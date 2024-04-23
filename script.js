function processImage() {
    const input = document.getElementById('imageInput');
    const bgColor = document.getElementById('bgColor').value;
    const canvas = document.getElementById('resultCanvas');
    const downloadLink = document.getElementById('downloadLink');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                const tmpCanvas = document.createElement('canvas');
                const tmpCtx = tmpCanvas.getContext('2d');

                // Set the temporary canvas size to the desired output size
                tmpCanvas.width = 400;
                tmpCanvas.height = 400;

                // Disable image smoothing for pixel art
                tmpCtx.imageSmoothingEnabled = false;
                tmpCtx.webkitImageSmoothingEnabled = false;
                tmpCtx.mozImageSmoothingEnabled = false;

                // Draw image on the temporary canvas using nearest neighbor
                tmpCtx.drawImage(img, 0, 0, 32, 32, 0, 0, 400, 400);

                // Clear main canvas
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw background color as a rectangle
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Draw scaled image from temporary canvas to main canvas
                ctx.drawImage(tmpCanvas, 0, 0);

                // Show download link
                downloadLink.href = canvas.toDataURL('image/png');
                downloadLink.style.display = 'inline';
            };
        };

        reader.readAsDataURL(input.files[0]);
    }
}
