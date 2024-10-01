let img = document.getElementById("img");
let input = document.getElementById("input");

input.onchange = (e) => {
  if (input.files[0]) img.src = URL.createObjectURL(input.files[0]);
};

// you could upload some code saved as .jpg and with this snipped you include the file in your page.
// some evil way could be to upload a Shell Page... a lot of offensive techniques
