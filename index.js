// task 1
document.querySelector(".slider__input").addEventListener(
  "input",
  _.debounce((event) => {
    document.querySelector(".slider__image").style.width = `${
      event.target.value * 4
    }px`;
    document.querySelector(".slider__image").style.height = `${
      event.target.value * 4
    }px`;
  }, 30)
);

// task 2
document.querySelector("#box").addEventListener(
  "mousemove",
  _.debounce(
    (event) =>
      (event.target.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`),
    100
  )
);
