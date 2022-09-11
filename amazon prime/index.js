let movie = document.getElementById("search-text").value;
const url = `https://api.themoviedb.org/3/search/movie?api_key=247f5fa9d84f1687cb841ded0a341993&language=en-US&page=1&include_adult=false&query=${movie}`;

let getMovie = async ()=>{
      
    let res = await fetch(url);
    res = await res.json();
        console.log(res);

}

