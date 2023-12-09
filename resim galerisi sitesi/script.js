
window.onload = function() {

    var cards= document.querySelectorAll('.kart-container');
  
   
    var unsplashURL = 'https://source.unsplash.com/random/400x320';
  
    kartlar.forEach(function(card) {
      
      var resimElementi = card.querySelector('#dinamik-resim');
  
      
      fetch(unsplashURL)
        .then(function(response) {
          return response.url;
        })
        .then(function(resimURL) {
          resimElementi.src = resimURL;
        })
        .catch(function(error) {
          console.error('Resim alınamadı: ', error);
        });
    });
  };
  
  
  async function getUnsplashImage() {
    try {
        const response = await fetch('https://source.unsplash.com/random');
        const imageUrl = response.url;
        return imageUrl;
    } catch (error) {
        console.error('Resim alınamadı:', error);
    }
}

// Tüm dinamik resim elementlerini seç
var dinamikResimler = document.querySelectorAll('.kart-container img');

// Her bir dinamik resim elementine rastgele bir Unsplash resmi ata
dinamikResimler.forEach(async function (resimElementi) {
    // Rastgele bir Unsplash resmi al
    var unsplashResmi = await getUnsplashImage();
    // Resim yolunu ata
    resimElementi.src = unsplashResmi;
});
  