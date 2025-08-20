window.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    


    
        let timer = null;
        let x = 0;
        let y = 0;
        let stage = 0;

        const run = function() {
            switch(stage) {

                case 0:
                     x++;
                box.style.left = x + 'px';

                if (x >= 500) {
                    stage = 1;
                    
                }
                break;

                case 1:
                    y ++;
                    
                box.style.top = y + 'px';
                if (y >= 500) {
                    stage = 2;
                }
                break;





                default:
                     clearInterval(timer);
                    break;

            }
        };
    

          const animate = function () {
          if (timer) return; 


        timer = setInterval(run, 50);
    };

   box.addEventListener("click", animate);
});