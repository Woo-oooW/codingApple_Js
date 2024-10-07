for (let i = 0; i < (document.querySelectorAll('.tab-button').length); i++) {

  $('.tab-button').eq(i).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  });
}

var car2 = { name: '소나타', price: 50000 };
var pants = [28, 30, 32, 34];
var shirt = [90, 95, 100, 105];

document.querySelector('.form-select.mt-2').addEventListener('input', function () {
  document.querySelector('.form-select.mt-3').innerHTML = '';
  if (document.querySelector('.form-select.mt-2').value == '셔츠') {
    shirt.forEach(item => {
      $('.form-select.mt-3').append('<option>' + item + '</option>');
    });
  }
  else if (document.querySelector('.form-select.mt-2').value == '바지')
    pants.forEach(item => {
      $('.form-select.mt-3').append('<option>' + item + '</option>');
    });
  {
  }
});

var nameList = ['흥민', '영희', '철수', '재석'];

function findName(findNm) {
  for (var i in nameList) {
    if (nameList[i] == findNm) {
      console.log("있");
    }
  }
};
findName('철수');

document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2.price;

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


