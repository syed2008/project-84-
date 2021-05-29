canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x = 10;
car1_y = 20;

car2_width = 100;
car2_height = 90;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x = 10;
car2_y = 100;


function add(){
    background_imgTag = new Image;
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image;
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image;
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
   
    }

       
   
    function uploadcar1(){
        ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
       
        }
        function uploadcar2(){
            ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
           
            }
     
        window.addEventListener("keydown", my_keydown);
        function my_keydown(e){
         keyPressed = e.keyCode;
         console.log(keyPressed);
         if(keyPressed == '38'){
            //car1_up();
             console.log("up arrow key");
         }
         if(keyPressed == '40'){
             //car1_down();
            console.log("down arrow key");
        }
        if(keyPressed == '37'){
           //car1_left();
            console.log("left arrow key");
        }
        if(keyPressed == '39'){
            //car1_right();
            console.log("right arrow key");
        }
        }
 if(keyPressed == '38'){
            //car2_up();
             console.log("up arrow key");
         }
         if(keyPressed == '40'){
             //car2_down();
            console.log("down arrow key");
        }
        if(keyPressed == '37'){
           //car2_left();
            console.log("left arrow key");
        }
        if(keyPressed == '39'){
            //car2_right();
            console.log("right arrow key");
        }
        } 
