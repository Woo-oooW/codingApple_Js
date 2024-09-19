for (let i = 0; i <(document.querySelectorAll('.tab-button').length); i++){

    $('.tab-button').eq(i).on('click', function(){
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    })

    // 바닐라로 변환한다면?
    // document.querySelectorAll('.tab-button')[i].addEventListener('click',
    //     function(){
    //         document.querySelectorAll('.tab-button').forEach(element => {
    //             element.classList.remove('orange');
    //         })
    //         document.querySelectorAll('.tab-content').forEach(element => {
    //             element.classList.remove('show');
    //         })
    //         document.querySelectorAll('.tab-content')[i].classList.add('show');
    //         document.querySelectorAll('.tab-button')[i].classList.add('orange');

    //     }
    // )
    
  
  }