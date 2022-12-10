var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var siteNameWarnigInput = document.getElementById("siteNameWarnig");
var siteUrlWarnigInput = document.getElementById("siteUrlWarnig");

var playList;
if (localStorage.getItem("bookmarks") == null) {
  playList = [];
} else {
  playList = JSON.parse(localStorage.getItem("bookmarks"));
  displayPlayList();
}

function warning() {
    if (siteNameInput.value == "" || siteUrlWarnigInput.value == "") {
        siteNameWarnigInput.style = "diplay:visable";
        siteUrlWarnigInput.style = "diplay:visable";
    } 

  }
  function displayWarning(){
    if (siteNameInput.value == true || siteUrlWarnigInput.value == true) {
    siteNameWarnigInput.style = "diplay:none";
    siteUrlWarnigInput.style = "diplay:none";
    }
  }

function addBookmark() {
  warning();
  var bookMarkers = {
    site: siteNameInput.value,
    url: siteUrlInput.value,
  };
  playList.push(bookMarkers);
  localStorage.setItem("bookmarks", JSON.stringify(playList));
  displayPlayList();


}

function displayPlayList() {
  var temp = "";
  for (var i = 0; i < playList.length; i++) {
    temp +=
      ` <div class="form-inputs p-4 row flex-nowrap mb-5">
    <h2 class="col-5">` +
      playList[i].site +
      `</h2>
    <a id="visit" class="btn btn-primary col-1" href="https:` +
      playList[i].url +
      `" target="_blank">Visit</a>
    <button type="button" onclick="deleteBtn(` +
      i +
      `)" class="btn btn-danger col-1">Delete</button>
</div>`;
  }
  document.getElementById("bookmarkBody").innerHTML = temp;
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function deleteBtn(row) {
  playList.splice(row, 1);
  localStorage.setItem("bookmarks", JSON.stringify(playList));
  displayPlayList();
}
