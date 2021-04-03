const button = document.getElementById("button");
const body = document.getElementsByTagName('body');
const itemSocial = document.querySelectorAll('div .list__item');
const itemGrid = document.querySelectorAll('div .Overview__grid-item');
const numberOfItemSocial = document.getElementsByClassName('list__item-number');
const nameOfItemSocial = document.getElementsByClassName('name');
const numberOfItemGrid = document.getElementsByClassName('number');
const OverviewToday = document.querySelector(' .Overview__today');
const socialTitle = document.querySelector('.header__social-title');
const socialFollow = document.querySelector('.header__social-follow');
const attribute = document.querySelector(".attribution");

var styleElem = document.head.appendChild(document.createElement("style"));

var countDark = 0;
var countCheck = null;
 
button.addEventListener("click",()=>{
   
    if(countDark === 1)
    {
        attribute.style.color = "black";
        // body[0].style.background = 'rgb(255,255,255)';
        for(var i = 0 ; i < itemSocial.length ; i++)
        {
            itemSocial[i].style.background = "rgb(240,243,250)";
        }
        for(var i = 0 ; i < itemGrid.length ; i++)
        {
            itemGrid[i].style.background = "rgb(240,243,250)";
        }
        for(var i = 0 ; i < numberOfItemSocial.length ;  i++)
        {
            numberOfItemSocial[i].style.color = "rgb(28,31,40)";
        }
        for(var i = 0 ; i < nameOfItemSocial.length ;  i++)
        {
            nameOfItemSocial[i].style.color = "rgb(119,128,167)";   
        }
        for(var i = 0 ; i < numberOfItemGrid.length ;  i++)
        {
            numberOfItemGrid[i].style.color = "rgb(28,31,40)";
        }
    
        OverviewToday.style.color = "rgb(28,31,40)";
        socialFollow.style.color = "rgb(28,31,40)";
        socialTitle.style.color = "rgb(28,31,40)";
        button.style.background = "rgb(174,178,203)";
        styleElem.innerHTML = ".header .header__mode #button:before {background: white;}";
        countCheck = false;
        body[0].style.background = 'rgb(255,255,255)';
        countDark = 0;
        hoverItemLight();
    }
    else if(countDark === 0)
    {
        attribute.style.color = "white";
        // body[0].style.background = 'rgb(32,34,47)';
    for(var i = 0 ; i < itemSocial.length ; i++)
    {
        itemSocial[i].style.background = "rgb(37,43,67)";
    }
    for(var i = 0 ; i < itemGrid.length ; i++)
    {
        itemGrid[i].style.background = "rgb(37,43,67)";
    }
    for(var i = 0 ; i < numberOfItemSocial.length ;  i++)
    {
        numberOfItemSocial[i].style.color = "white";
    }
    for(var i = 0 ; i < nameOfItemSocial.length ;  i++)
    {
        nameOfItemSocial[i].style.color = "rgb(119,128,167)";
    }
    for(var i = 0 ; i < numberOfItemGrid.length ;  i++)
    {
        numberOfItemGrid[i].style.color = "white";
    }

    OverviewToday.style.color = "white";
    socialFollow.style.color = "white";
    socialTitle.style.color = "white";
    button.style.background = "linear-gradient(to right bottom,rgb(60,181,182),rgb(56,156,214))";
    styleElem.innerHTML = ".header .header__mode #button:before {background: black; transform: translate(-264%,-47%);}";
    countCheck = true;  
    body[0].style.background = 'rgb(32,34,47)'; 
    countDark=1;
    hoverItemDark();
    }
    else 
    {

    }
    
});
console.log(countCheck);
console.log(countDark);
//mouseout là thả ra , mouseover == hover
function hoverItemDark()
{
// item social
        itemSocial[0].addEventListener("mouseover",()=>{
            itemSocial[0].style.background = "rgb(51,58,86)";
          });
          itemSocial[1].addEventListener("mouseover",()=>{
              itemSocial[1].style.background = "rgb(51,58,86)";
            });
          itemSocial[2].addEventListener("mouseover",()=>{
              itemSocial[2].style.background = "rgb(51,58,86)";
            });
          itemSocial[3].addEventListener("mouseover",()=>{
              itemSocial[3].style.background = "rgb(51,58,86)";
            });
            itemSocial[1].addEventListener("mouseout",()=>{
              itemSocial[1].style.background = "rgb(37,43,67)";
            });
          itemSocial[0].addEventListener("mouseout",()=>{
              itemSocial[0].style.background = "rgb(37,43,67)";
            });
          itemSocial[2].addEventListener("mouseout",()=>{
              itemSocial[2].style.background = "rgb(37,43,67)";
            });
          itemSocial[3].addEventListener("mouseout",()=>{
              itemSocial[3].style.background = "rgb(37,43,67)";
            });
            //item grid
            
            itemGrid[0].addEventListener("mouseover",()=>{
                itemGrid[0].style.background = "rgb(51,58,86)";
             });
            itemGrid[1].addEventListener("mouseover",()=>{
                itemGrid[1].style.background = "rgb(51,58,86)";
             });
            itemGrid[2].addEventListener("mouseover",()=>{
                itemGrid[2].style.background = "rgb(51,58,86)";
             });
            itemGrid[3].addEventListener("mouseover",()=>{
                itemGrid[3].style.background = "rgb(51,58,86)";
             });
            itemGrid[4].addEventListener("mouseover",()=>{
                itemGrid[4].style.background = "rgb(51,58,86)";
             });
            itemGrid[5].addEventListener("mouseover",()=>{
                itemGrid[5].style.background = "rgb(51,58,86)";
             });
            itemGrid[6].addEventListener("mouseover",()=>{
                itemGrid[6].style.background = "rgb(51,58,86)";
             });
            itemGrid[7].addEventListener("mouseover",()=>{
                itemGrid[7].style.background = "rgb(51,58,86)";
             });
            itemGrid[0].addEventListener("mouseout",()=>{
                itemGrid[0].style.background = "rgb(37,43,67)";
             });
            itemGrid[1].addEventListener("mouseout",()=>{
                itemGrid[1].style.background = "rgb(37,43,67)";
             });
            itemGrid[2].addEventListener("mouseout",()=>{
                itemGrid[2].style.background = "rgb(37,43,67)";
             });
            itemGrid[3].addEventListener("mouseout",()=>{
                itemGrid[3].style.background = "rgb(37,43,67)";
             });
            itemGrid[4].addEventListener("mouseout",()=>{
                itemGrid[4].style.background = "rgb(37,43,67)";
             });
            itemGrid[5].addEventListener("mouseout",()=>{
                itemGrid[5].style.background = "rgb(37,43,67)";
             });
            itemGrid[6].addEventListener("mouseout",()=>{
                itemGrid[6].style.background = "rgb(37,43,67)";
             });
            itemGrid[7].addEventListener("mouseout",()=>{
                itemGrid[7].style.background = "rgb(37,43,67)";
             });
}

function hoverItemLight()
{

        itemSocial[0].addEventListener("mouseover",()=>{
            itemSocial[0].style.background = "rgb(225,227,240)";
          });
          itemSocial[1].addEventListener("mouseover",()=>{
              itemSocial[1].style.background = "rgb(225,227,240)";
            });
          itemSocial[2].addEventListener("mouseover",()=>{
              itemSocial[2].style.background = "rgb(225,227,240)";
            });
          itemSocial[3].addEventListener("mouseover",()=>{
              itemSocial[3].style.background = "rgb(225,227,240)";
            });
            itemSocial[1].addEventListener("mouseout",()=>{
              itemSocial[1].style.background = "rgb(240,243,250)";
            });
          itemSocial[0].addEventListener("mouseout",()=>{
              itemSocial[0].style.background = "rgb(240,243,250)";
            });
          itemSocial[2].addEventListener("mouseout",()=>{
              itemSocial[2].style.background = "rgb(240,243,250)";
            });
          itemSocial[3].addEventListener("mouseout",()=>{
              itemSocial[3].style.background = "rgb(240,243,250)";
            });
            // item grid
            itemGrid[0].addEventListener("mouseover",()=>{
                itemGrid[0].style.background = "rgb(225,227,240)";
             });
            itemGrid[1].addEventListener("mouseover",()=>{
                itemGrid[1].style.background = "rgb(225,227,240)";
             });
            itemGrid[2].addEventListener("mouseover",()=>{
                itemGrid[2].style.background = "rgb(225,227,240)";
             });
            itemGrid[3].addEventListener("mouseover",()=>{
                itemGrid[3].style.background = "rgb(225,227,240)";
             });
            itemGrid[4].addEventListener("mouseover",()=>{
                itemGrid[4].style.background = "rgb(225,227,240)";
             });
            itemGrid[5].addEventListener("mouseover",()=>{
                itemGrid[5].style.background = "rgb(225,227,240)";
             });
            itemGrid[6].addEventListener("mouseover",()=>{
                itemGrid[6].style.background = "rgb(225,227,240)";
             });
            itemGrid[7].addEventListener("mouseover",()=>{
                itemGrid[7].style.background = "rgb(225,227,240)";
             });
            itemGrid[0].addEventListener("mouseout",()=>{
                itemGrid[0].style.background = "rgb(240,243,250)";
             });
            itemGrid[1].addEventListener("mouseout",()=>{
                itemGrid[1].style.background = "rgb(240,243,250)";
             });
            itemGrid[2].addEventListener("mouseout",()=>{
                itemGrid[2].style.background = "rgb(240,243,250)";
             });
            itemGrid[3].addEventListener("mouseout",()=>{
                itemGrid[3].style.background = "rgb(240,243,250)";
             });
            itemGrid[4].addEventListener("mouseout",()=>{
                itemGrid[4].style.background = "rgb(240,243,250)";
             });
            itemGrid[5].addEventListener("mouseout",()=>{
                itemGrid[5].style.background = "rgb(240,243,250)";
             });
            itemGrid[6].addEventListener("mouseout",()=>{
                itemGrid[6].style.background = "rgb(240,243,250)";
             });
            itemGrid[7].addEventListener("mouseout",()=>{
                itemGrid[7].style.background = "rgb(240,243,250)";
             });
}


//     hoverItem();
