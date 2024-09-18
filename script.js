document.addEventListener("DOMContentLoaded", () => {
  let selectedColor = "";
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const canvas = document.querySelector(".canvas");
  const red = document.querySelector(".red");
  const green = document.querySelector(".green");
  const blue = document.querySelector(".blue");
  const yellow = document.querySelector(".yellow");
  const purple = document.querySelector(".purple");
  const orange = document.querySelector(".orange");
  const black = document.querySelector(".black");
  const eraser = document.querySelector(".eraser");
  const colors = [red, green, blue, yellow, purple, orange, black, eraser];
  const clear = document.querySelector(".clear");

  clear.addEventListener("click", () => {
    while (canvas.firstChild) {
      canvas.removeChild(canvas.lastChild);
    }
    input.value = "";
  });

  red.addEventListener("click", () => {
    red.classList.add("selected");
    selectedColor = "red";
    for (let i = 0; i < colors.length; i++) {
      if (i === 0) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  green.addEventListener("click", () => {
    green.classList.add("selected");
    selectedColor = "green";
    for (let i = 0; i < colors.length; i++) {
      if (i === 1) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  blue.addEventListener("click", () => {
    blue.classList.add("selected");
    selectedColor = "blue";
    for (let i = 0; i < colors.length; i++) {
      if (i === 2) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  yellow.addEventListener("click", () => {
    yellow.classList.add("selected");
    selectedColor = "yellow";
    for (let i = 0; i < colors.length; i++) {
      if (i === 3) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  purple.addEventListener("click", () => {
    purple.classList.add("selected");
    selectedColor = "purple";
    for (let i = 0; i < colors.length; i++) {
      if (i === 4) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  orange.addEventListener("click", () => {
    orange.classList.add("selected");
    selectedColor = "orange";
    for (let i = 0; i < colors.length; i++) {
      if (i === 5) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  black.addEventListener("click", () => {
    black.classList.add("selected");
    selectedColor = "black";
    for (let i = 0; i < colors.length; i++) {
      if (i === 6) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  eraser.addEventListener("click", () => {
    eraser.classList.add("selected");
    selectedColor = "white";
    for (let i = 0; i < colors.length; i++) {
      if (i === 7) {
        continue;
      }
      colors[i].classList.remove("selected");
    }
  });

  button.addEventListener("click", () => {
    console.log(input.value);
    while (canvas.firstChild) {
      canvas.removeChild(canvas.lastChild);
    }
    if (input.value === "") {
      alert("Input field must not be empty!");
      input.value = "";
    } else if (isNaN(Number(input.value))) {
      alert("Input must be a number!");
      input.value = "";
    } else if (Number(input.value) < 32 || Number(input.value) > 100) {
      alert("Number must be in the range 32 to 100!");
      input.value = "";
    } else {
      let size = Number(input.value);

      for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");

        div.classList.add(`coloringBox${i}`);
        canvas.appendChild(div);
      }

      let divs = canvas.childNodes;
      const pixels = Array.from(divs);
      let isMouseDown = false;

      // Add mousedown and mouseup listeners to the document
      document.addEventListener("mousedown", () => {
        isMouseDown = true;
      });

      document.addEventListener("mouseup", () => {
        isMouseDown = false;
      });

      pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
          if (isMouseDown && selectedColor) {
            pixel.style.backgroundColor = selectedColor;
          }
        });
      });

      // Prevent text selection while drawing
      canvas.addEventListener("mousedown", (e) => {
        e.preventDefault();
      });
    }
  });
});
