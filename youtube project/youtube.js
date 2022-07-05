let apikey="AIzaSyApiHM2WjLYK7jtxrFo8v2SUHa9HzHnYOo"

  let search=()=>{

    let query=document.getElementById("query").value
      getdata(query)
  }
     
 let getdata=async (query)=>{

    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&key=${apikey}`

    let res= await fetch (url)

    let data=await res.json()
     append(data.items)
    console.log(data)
 }

   let append =(data)=>{

    let cont=document.getElementById("container")
    cont.innerHTML=null

      data.forEach((el)=>{

        let div=document.createElement("div")
        div.onclick= ()=>{
            savevideo(el)
        }

        let img=document.createElement("img")
         img.src=el.snippet.thumbnails.medium.url;

         let title=document.createElement("h2")
          title.innerText=el.snippet.title
      
          div.append(img,title)
          cont.append(div)
    })
   }

   let savevideo=(data)=>{

    localStorage.setItem("video",JSON.stringify(data))
    window.location.href="video.html";
   }
//    let id;
//    function debounce(func,delay){
//        if(id){
//    clearTimeout(id)
//      }
//       id=  setTimeout(function(){
//             func()
//        },delay)
//    }