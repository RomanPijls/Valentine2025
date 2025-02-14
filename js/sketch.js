document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const scene1Button = document.getElementById('scene1button');
  const scene2Button = document.getElementById('scene2button');
  const intro = document.getElementById('intro');
  const scene1 = document.getElementById('scene1');
  const scene2 = document.getElementById('scene2');
  const scene3 = document.getElementById('scene3');
  const rocket = document.getElementById('rocket');
  const moon = document.getElementById('moon');
  const valentineText = document.getElementById('valentineText');
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

  if (scene2Button && scene2 && scene3) {
    scene2Button.addEventListener('click', () => {
      scene2.classList.add('fade-out');
      scene3.style.display = 'block';
      scene3.classList.add('fade-in');
      setTimeout(() => {
        scene2.style.display = 'none';
      }, 3000); // Adjust this timeout to match the duration of your fade-out animation
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY >= 7000) {
        moon.style.display = 'block';
        moon.classList.add('fade-in-quick');

        setTimeout(() => {
            moon.classList.add('enlarge');
            
            setTimeout(() => {
                valentineText.classList.add('text-fade-in');
            }, 1500); // Starts after the moon expands
        }, 700); // Starts after fade-in
    } else {
        rocket.style.bottom = `${scrollY * 0.1}px`;
    }
});
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