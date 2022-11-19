let container = document.getElementById("container");

let getdata = async () => {
  try {
    let jatin = document.getElementById("SearchQuery").value;
    let res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=309ffef5&s=${jatin}`
    );
    let data = await res.json();
    AppendData(data.Search);
    console.log("data", data.Search);
  } catch (err) {
    console.log("err", err);
    let image = document.createElement("img");
    image.setAttribute("class", "images");
    image.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85iGL_oq88a0AZgule_UujyVgv51ilzlHLq9uMiQR&s";
    container.append(image);
  }
};

AppendData = (data) => {
  container.innerText = "";
  data.forEach(function (elem) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.Poster;
    let title = document.createElement("h4");
    title.innerText = elem.Title;

    let type = document.createElement("h4");
    type.innerText = elem.Type;

    let year = document.createElement("h4");
    year.innerText = elem.Year;
    div.append(image, title, type, year);
    container.append(div);
  });
};
