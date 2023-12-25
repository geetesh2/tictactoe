let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn = true;

const winpatterns = [[0,1,2],
                     [0,3,6],
                    [0,4,8],
                [1,4,7],
            [2,5,8],
        [2,4,6],
    [3,4,5],
[6,7,8]];


let check = () => {
    for(let i = 0;i<8;i++)
    {
        let arr = winpatterns[i];
        let first = boxes[arr[0]].innerText;
        let second = boxes[arr[1]].innerText;
        let third = boxes[arr[2]].innerText;
        if(turn == true)
        {
            if(first == "X" && second == "X" && third == "X") return true;
        } else {
            if(first == "O" && second == "O" && third == "O") return true;

        }
        console.log(first,second,third);

    }
    return false;

}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        box.innerText = turn == true ? "X" : "O";
        if(check() == true)
        {
            if(turn == true)
            {
                let div = document.createElement("div");
                div.innerHTML = "<br> <h1>The user with X wins!!</h1>";
                document.body.append(div);
            } else {
                let div = document.createElement("div");
                div.innerHTML = "<br> <h1>The user with O wins!!</h1>";
                document.body.append(div);

            }

        }
        if(turn == true) turn = false;
        else turn = true;
        
    })
});

reset.addEventListener("click",()=>{
    window.location.reload();
})