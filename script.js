
    function imgSlider(anything){
       const jogoDaVelha = document.querySelector('#jogoDaVelha');
       const campoMinado = document.querySelector('.campoMinado');
       const adivinhacao = document.querySelector('.adivinhacao');
         

       const slider = document.querySelector('.starbucks');
       slider.style.transition = 'all 1s ease-in-out';
       slider.src = anything;

        if(anything == 'images/img2.png'){
            adivinhacao.style.display = 'none';
            jogoDaVelha.style.display = 'none';
            campoMinado.style.display = 'block';
        }else if(anything == 'images/img3.png'){
            jogoDaVelha.style.display = 'none';
            campoMinado.style.display = 'none';
            adivinhacao.style.display = 'block';
        }else{
            campoMinado.style.display = 'none';
            adivinhacao.style.display = 'none';
            jogoDaVelha.style.display = 'block';
        }

    }

    function changeCircleColor(color){
        const circle = document.querySelector('.circle');
        circle.style.background = color;
    }

  
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function(){
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active')
    });

