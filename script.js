
document.getElementById('resumeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const jobTitle = document.getElementById('jobTitle').value;
    try {
        const response = await fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jobTitle })
        });
        const data = await response.json();
        console.log('Template Suggestions:', data);
        // Implement further actions with the data
    } catch (error) {
        console.error('Error fetching template suggestions:', error);
    }
});
