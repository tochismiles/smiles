let revelation = document.getElementById("revealparty");
let revealBtn = document.getElementById("revealbtn")
const scroller = document.getElementsByClassName (".scroller")
const nav = document.querySelector(".links")
const ham = document.querySelector(".hambar")

ham.addEventListener("click", () => {
 nav.classList.toggle("forlink--open")
 ham.classList.toggle("forham--open")


console.log(nav.classList)
})


console.log(scroller)

revealBtn.onclick = () => {
    if(revelation.style.display == "none"){
          revelation.style.display = "block"
        }
        else{
          revelation.style.display = "none";
        }
   
        let scrollerInside = document.getElementsByClassName("inner_scroller")
        console.log(scrollerInside)
        const scrollContent = Array.from(scrollerInside)
        scrollContent.forEach(item =>{
        let dubItem = item.cloneNode(true)
            console.log(dubItem)
            dubItem.setAttribute("aria-hidden", true)
            // scrollerInside[0].appendChild(dubItem)
        })
  
        // console.log(scrollContent)

    

}

