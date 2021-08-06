(function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
      heart.classList.toggle('red');
    });
  })();


  var animation = bodymovin.loadAnimation({
    container: document.getElementById('picleft3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '52408-girl-with-flowers.json'
  })

