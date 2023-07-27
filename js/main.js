// CRUD obretion for book mark App. //
//get inputs element from HTML :
var wName = document.getElementById("webNameInp");
var wUrl = document.getElementById("webUrlInp");
//console.log(wName , wUrl);

// Create empty array for save the return objects :
var wUrlContainers = [];

// diplay data from local sotarge:
if (localStorage.getItem("links") != null) {
  wUrlContainers = JSON.parse(localStorage.getItem("links"));
  displayLinks(wUrlContainers);
}

// Create function to get clint input and create object and push to array :
function webLinkes() {
  if (checkInputEmpty() == true) {
    var userLink = {
      name: wName.value,
      link: wUrl.value,
    };
    //push the object in the array :
    wUrlContainers.push(userLink);

    // push the array into local sotrage :
    localStorage.setItem("links", JSON.stringify(wUrlContainers));

    // display links function:
    displayLinks(wUrlContainers);

    // clear form function :
    clearForm();

    //console.log(wUrlContainers)
  } else {
    alert("all inputs is required");
  }
}

// create function to display links :
function displayLinks(wUrlContainers) {
  var linkContainer = ``;

  // create loop to get all user inputs value :
  for (i = 0; i < wUrlContainers.length; i++) {
    linkContainer += `<tr>
        <td>${wUrlContainers[i].name}</td>
        <td>${wUrlContainers[i].link}</td>
        <td><a class="btn btn-outline-primary" href="https://${wUrlContainers[i].link}" target="_blank">visit</a></td>
        <td><button onclick="deleteLink(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`;
  }
  document.getElementById("tableBody").innerHTML = linkContainer;
}

// create function to reset the form :
function clearForm() {
  wName.value = "";
  wUrl.value = "";
}

// create function tocheck empty inputs :
function checkInputEmpty() {
  if (wName.value != "" && wUrl.value != "") {
    return true;
  } else {
    return false;
  }
}

// create delete function :
function deleteLink(index) {
  wUrlContainers.splice(index, 1);
  localStorage.setItem("links", JSON.stringify(wUrlContainers));
  displayLinks(wUrlContainers);
}

// create search functiom:
function searchLink(word) {
  var matchedLinks = [];
  for (i = 0; i < wUrlContainers.length; i++) {
    if (
      wUrlContainers[i].name.toLowerCase().includes(word.toLowerCase()) === true
    ) {
      matchedLinks.push(wUrlContainers[i]);
    }
  }
  //console.log(matchedLinks);
  // display new array contain matched search
  displayLinks(matchedLinks);
}

