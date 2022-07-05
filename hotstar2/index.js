async function main(){

    let query=document.getElementById("query").value
  let data=await getdata(query)
      append(data)
}

 async function getdata(query){

    let url =`http://www.omdbapi.com/?apikey=3f15a8a&s=${query}`;

    let res=await fetch(url)
    let  data=await res.json()
     console.log(data)
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
            img.onclick=()=>{
                show(el)
            }
            let title=document.createElement("p")
            title.innerText=el.Title
              
           

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

    function show(el){

    
      let container=document.getElementById("container")
      container.innerHTML=null

      let img=document.createElement("img")
      img.src=el.Poster

           let title=document.createElement("p")
            title.innerText=el.Title
    
            let year=document.createElement("p")
            year.innerText=el.Year

            let type=document.createElement("p")
            type.innerText=el.Type

            container.append(img,title,year,type)
    
      
    }