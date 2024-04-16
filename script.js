  window.onload = function() {
    showContent('home');
  }

  function showContent(page) {
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
  }