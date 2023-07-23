const arrs = ['name','user','sss']


const [one,two,three] = arrs;
// const one = 'name'

console.log(one); // 'name
// console.log(two);

const user = {
    name : 'Alex',
    age : 222,
    isAdmin : false
}


console.log(
    // user.admin ,
    user[one],
    user['name']
);


const {name,age} = user;

// console.log(name);
// console.log(age);
const logName = ({name}) => {
    // console.log(name);
}

logName(user)


//------------------------------------


// 1 defoult
const sumT = document.querySelector('.sumT')
const dataT = document.querySelector('.dataT')
const mistake = document.querySelector('.mistake')
const historyBTN = document.querySelector('.historyBTN')
const historyResults = document.querySelector('.historyResults')

const goods = {
    data : [
        {
            id : 2,
            price : 200
        },
        {
            id : 3,
            price : 300
        },
        {
            id : 5,
            price : 400
        },
    ],
    sum : 1000,
    history : []
}
// 1000 
// logical

const createBTNs = ({data}) => {
   console.log(data);

  let new_data = data.map((elem)=>{
    return `<button class="btn">${elem.price}</button>`
  })
  sumT.innerHTML = new_data.join("")

};

function create_sum_btn({sum}){
    dataT.innerHTML = `<p>${sum}</p>`
}
const calc_sum = (e) => {
    if (e.target.nodeName != 'BUTTON') return;
    const res = goods.sum; 
    let num = e.target.innerText
    if (res < num) {
        // mistake.classList.remove("hidden")
        // mistake.innerHTML = 'you are poor'
        sumT.classList.add('hide')
    }else {
        goods.sum = res - num; 
        create_sum_btn(goods)
    }
    
}

const add_history = (e) => {
    const time = new Date();
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const newTime = `${day}.${month}.${year}`;
    const elemHistory = {
        price : +e.target.innerHTML,
        data : newTime
    }
    goods.history.push(elemHistory)
}

const paint_history = () =>{
    const paint = goods.history.map((elem)=>{
        return `<div class="peshka">
        <p>Price: ${elem.price}</p>
        <p> Date: ${elem.data}</p>
        </div>`
    })
    historyResults.innerHTML = paint.join('')
}
function click_his(){
    paint_history(goods)
}
// events 
sumT.onclick = (e) => {
    calc_sum(e)
    add_history(e)
};

// start 

create_sum_btn( goods )
createBTNs( goods )
create_sum_btn( goods )
historyBTN.onclick = click_his;

// sumT.onclick = add_history;










