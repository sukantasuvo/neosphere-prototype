function setMood(mood) {
  const feed = document.getElementById('feed');
  let message = '';

  switch (mood) {
    case 'happy':
      message = "🌞 You're feeling happy! Here's some uplifting music and positive thoughts!";
      break;
    case 'sad':
      message = "🌧️ It's okay to feel sad. Here's a calming video and a mindfulness tip.";
      break;
    case 'anxious':
      message = "🧘 Let's breathe. Try this 2-minute meditation and a soothing playlist.";
      break;
    case 'angry':
      message = "🔥 Channel your anger into power. Here's a motivational podcast and breathing exercise.";
      break;
  }

  feed.innerHTML = `<p>${message}</p>`;
}

function chat() {
  const input = document.getElementById('userInput').value;
  const chatLog = document.getElementById('chatLog');

  if (input.trim() === '') return;

  // Fake AI reply
  const aiReply = getAIResponse(input);

  chatLog.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  chatLog.innerHTML += `<p><strong>AI:</strong> ${aiReply}</p>`;

  document.getElementById('userInput').value = '';
}

function getAIResponse(input) {
  input = input.toLowerCase();
  if (input.includes('sad') || input.includes('tired')) {
    return "I'm here for you. Want to try a breathing exercise together?";
  } else if (input.includes('happy')) {
    return "That's great! Keep shining! 🌟";
  } else {
    return "Tell me more... I'm listening 🤖";
  }
}
