async function main(){

    let query=document.getElementById("query").value
  let data=await getdata(query)
      append(data)
}

 async function getdata(query){

    let url =`http://www.omdbapi.com/?apikey=3f15a8a&s=${query}`;

    let res=await fetch(url)
    let  data=await res.json()
     
    return data.Search
 }

    function append(data){
        let cont=document.getElementById("movies")
        cont.innerHTML=null

        data.forEach(function(el){

            let div=document.createElement("div")
            div.setAttribute("class","movie");
            let img=document.createElement("img")
            img.src=el.Poster

            let title=document.createElement("p")
            title.innerText=el.Title
              
            // let year=document.createElement("h4")
            // year.innerText=el.Year

            div.append(img,title)
            cont.append(div)
        })
    }
    let id;
    function debounce(func,delay){
        if(id){
    clearTimeout(id)
      }
       id=  setTimeout(function(){
             func()
        },delay)
    }