document.addEventListener("DOMContentLoaded", function() {
    const memeForm = document.getElementById("memeForm");
    const memeContainer = document.getElementById("memeContainer");
  
    memeForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const imageLink = document.getElementById("imageLink").value;
      const topText = document.getElementById("topText").value;
      const bottomText = document.getElementById("bottomText").value;
  
      createMeme(imageLink, topText, bottomText);
  
      memeForm.reset();
    });
  
    function createMeme(imageLink, topText, bottomText) {
      const memeDiv = document.createElement("div");
      memeDiv.classList.add("meme");
  
      const memeImage = document.createElement("img");
      memeImage.src = imageLink;
      memeDiv.appendChild(memeImage);
  
      const topTextDiv = document.createElement("div");
      topTextDiv.classList.add("top-text");
      topTextDiv.textContent = topText;
      memeDiv.appendChild(topTextDiv);
  
      const bottomTextDiv = document.createElement("div");
      bottomTextDiv.classList.add("bottom-text");
      bottomTextDiv.textContent = bottomText;
      memeDiv.appendChild(bottomTextDiv);
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove Meme";
      removeButton.addEventListener("click", function() {
        memeDiv.remove();
      });
      memeDiv.appendChild(removeButton);
  
      memeContainer.appendChild(memeDiv);
    }
  });
  