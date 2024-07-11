var images = [
    {
        src: "Images/burger.jpg",
        name: "burger",
        show: false,
    },
    {
        src: "Images/burger.jpg",
        name: "burger",
        show: false,
    },
    {
        src: "Images/grapes.png",
        name: "grapes",
        show: false,
    },
    {
        src: "Images/grapes.png",
        name: "grapes",
        show: false,
    },
    {
        src: "Images/plane.png",
        name: "plane",
        show: false,
    },
    {
        src: "Images/plane.png",
        name: "plane",
        show: false,
    },
    {
        src: "Images/icecream.jpg",
        name: "icecream",
        show: false,
    },
    {
        src: "Images/icecream.jpg",
        name: "icecream",
        show: false,
    },
    {
        src: "Images/pizza.webp",
        name: "pizza",
        show: false,
    },
    {
        src: "Images/pizza.webp",
        name: "pizza",
        show: false,
    },
    {
        src: "Images/train.png",
        name: "train",
        show: false,
    },
    {
        src: "Images/train.png",
        name: "train",
        show: false,
    },
]
var first = -1; 
var second = -1; 
var score = 0;

function displayData()
{
    let imagesBox = document.getElementById("images")
    imagesBox.innerHTML = "";

    images.forEach((data,index) => {
        if(data["show"] == true)
        {
            let img = document.createElement("img")
            img.src = data["src"]
            imagesBox.append(img)
        }
        else
        {
            let div = document.createElement("div")
            div.classList.add("box")
            div.addEventListener("click",() => handleClick(index))
            imagesBox.append(div)
        }
    })
}

function handleClick(index)
{
    if(first == -1)
    {
        images[index]["show"] = true;
        displayData();
        first = index
    }
    else if (second == -1)
    {
        images[index]["show"] = true;
        displayData();
        second = index

        setTimeout(checkImages, 1000 )
    }

}

function checkImages()
{
    if(images[first].name == images[second].name)
    {
        first = -1;
        second = -1;

        score += 10;
        document.getElementById("score").innerText = score

    }
    else
    {
        images[first].show = false;
        images[second].show = false;
        first = -1;
        second = -1;
        displayData();
    }
}

function shuffle()
{
    let len = images.length;
    let ans = []
    for(let i = 0 ; i < len ; i++ )
    {
        let randomIndex = Math.floor(Math.random() * images.length)
        ans.push(images[randomIndex])
        images.splice(randomIndex,1)
    }
    images = [...ans];
}

window.addEventListener("load", () => {
    shuffle();
    displayData()
})

let reset = document.getElementById("reset")
reset.addEventListener("click",()=>{
    images.forEach((data, index) => {
        data["show"] = false;  
    });
    score = 0;
    document.getElementById("score").innerText = score; 
    displayData(); 
})