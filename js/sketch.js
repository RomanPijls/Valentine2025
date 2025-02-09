document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const scene1Button = document.getElementById('scene1button');
  const intro = document.getElementById('intro');
  const scene1 = document.getElementById('scene1');
  const scene2 = document.getElementById('scene2');
  const body = document.body;

  if (startButton && intro && scene1) {
    startButton.addEventListener('click', () => {
      showHearts();
      intro.classList.add('fade-out');
      startButton.classList.add('fade-out');
      scene1.style.display = 'block';
      scene1.classList.add('fade-in');
      body.style.backgroundColor = "#ffb8d7";
      setTimeout(() => {
        intro.style.display = 'none';
        startButton.style.display = 'none';
      }, 3000); // Adjust this timeout to match the duration of your fade-out animation
    });
  }

  if (scene1Button && scene1 && scene2) {
    scene1Button.addEventListener('click', () => {
      scene1.classList.add('fade-out');
      scene2.style.display = 'block';
      scene2.classList.add('fade-in');
      setTimeout(() => {
        scene1.style.display = 'none';
      }, 3000); // Adjust this timeout to match the duration of your fade-out animation
    });
  }
});

function showHearts() {
  const heartContainer = document.createElement('div');
  heartContainer.className = 'heart-container';
  for (let i = 0; i < 150; i++) {
    const img = document.createElement('img');
    const randomHeart = Math.floor(Math.random() * 5) + 1;
    img.src = `img/heart${randomHeart}.png`;
    img.className = 'heart';
    
    // Set random drift values
    const driftX = Math.random() * 1000 - 500; // Random value between -500 and 500
    const driftY = Math.random() * 1000 - 500; // Random value between -500 and 500
    img.style.setProperty('--drift-x', `${driftX}px`);
    img.style.setProperty('--drift-y', `${driftY}px`);
    
    heartContainer.appendChild(img);
  }
  document.body.appendChild(heartContainer);
}