

const caruselContainer = document.querySelectorAll('.carusel');
 
caruselContainer.length && caruselContainer.forEach(function (caruselItem) {
	const btnPrev = caruselItem.querySelector('.caruselBtn_prev'); // левая кнопка
	const btnNext = caruselItem.querySelector('.caruselBtn_next'); // правая кнопка
	const images = caruselItem.querySelectorAll('.caruselGaleryItems > img'); // каждая картинка
    let circles = caruselItem.querySelectorAll('.caruselDotsItem'); // круги - переключатели
    let commonWidth;
    let sladerIndex = 0;



    // адаптив для блока с картинками
    function resizeWrapper() {


    //размер ширина окна видимого блока (одна картинка)
    commonWidth = document.querySelector('.caruselGalery').offsetWidth;
    
        images.forEach(item => {
            item.style.width = commonWidth + 'px';
            item.style.height = 'auto';
        });
    };
 
    resizeWrapper();
    window.addEventListener('resize', resizeWrapper);
  
    
    
   
   // левая кнопка
   btnPrev.addEventListener('click', ()=>{
        images[sladerIndex].style.display = 'none';
        sladerIndex--;

        if(sladerIndex < 0){
            sladerIndex = images.length - 1;
        }

        images[sladerIndex].style.display = 'block';
        activeСircle();
    });



    // правая кнопка
    btnNext.addEventListener('click', ()=>{
        images[sladerIndex].style.display = 'none';
        sladerIndex++;
        
        if(sladerIndex >= images.length){
            sladerIndex = 0;
        }

        images[sladerIndex].style.display = 'block';
        activeСircle();
    });


    // точки переключения
    circles.forEach((circleEl, index)=>{
        circleEl.addEventListener('click', ()=>{
                
            images.forEach((imagesEl, imgIndex) => {
                  
                images[imgIndex].style.display = 'none';
                
                sladerIndex = index;

                if(index === imgIndex){  

                    activeСircle();

                } 

            })
           
        })
    });


    // Активная точка переключения слайда
    function activeСircle(){
        circles.forEach((el)=> el.classList.remove('caruselDotsItem_active'));
        circles[sladerIndex].classList.add('caruselDotsItem_active');
        images[sladerIndex].style.display = 'block';
     
    }
    
    

    
});






















