document.addEventListener("DOMContentLoaded", function () {

    const backBtn = document.querySelector('.back');
    const submitBtn = document.querySelector('.submit');

    // BACK BUTTON
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }

    // SUBMIT BUTTON
    if (submitBtn) {
        submitBtn.addEventListener('click', async function () {

            alert("Yayyy! You accepted my love! I love you so much! 😭💕");

            try {
                // Capture the whole page
                const canvas = await html2canvas(document.body);

                // Create download link
                const link = document.createElement('a');
                link.download = 'love-proof.png';
                link.href = canvas.toDataURL('image/png');

                // Trigger download
                link.click();

            } catch (error) {
                console.error("Screenshot failed:", error);
                alert("Oops! Screenshot failed 😢");
            }

        });
    }

});