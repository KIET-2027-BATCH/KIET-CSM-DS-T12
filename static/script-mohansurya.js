document.getElementById('sentiment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const text = document.getElementById('sentiment-input').value;
    if (!text.trim()) {
        alert("Please enter some text!");
        return;
    }

    const response = await fetch('/analyze', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    document.getElementById('result').innerHTML = `Sentiment: ${result.sentiment} ${result.emoji}`;
});
