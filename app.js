// classes
let pesianDate = new PersianDate();

// variables
const dateAndTime_div = document.querySelector('#date-time')
const holiday_div = document.querySelector('#holiday')
const religiousTimes_div = document.querySelector('#religiousTimes-result')
const submitBtn = document.querySelector('#sub-btn')
const submitBtn2 = document.querySelector('#sub-btn2')
const token = '667883:638ba49b7efe64.79427469'
const text_div = document.querySelector('#text')



// eventListeners
eventListeners()
function eventListeners(){
    submitBtn.addEventListener('click' , religiousTimes)
    // submitBtn2.addEventListener('click' , author)
}


// functions

// show shamsi date and time
async function dateAndTime(){
    let time = new Date().toString().slice(16 , 24)


    let date = new Date().toLocaleDateString('fa-IR-u-nu-latn');
    let day = pesianDate.getDayName()

    dateAndTime_div.innerHTML = `
    <div class="timeAndDate">
        <div>
            <span class+"time-title">ساعت : </span>
            <span class="time">${time}</span>
        </div>
        <div>
            <ul class="date-day">
                <li><span>تاریخ : </span>${date}</li> 
                <li><span>روز : </span>${day}</li>   
            </ul>
        </div>
    </div>
    `
}
setInterval(dateAndTime , 1000)

// show events on now day
// async function holidays() {
//     const date = new Date().toLocaleDateString('fa-IR-u-nu-latn');

//     const year = date.slice(0, 4);
//     const month = date.slice(5, 6);
//     const day = date.slice(7, 8);

//     const url = `https://holidayapi.ir/jalali/${year}/${month}/${day}`;
//     console.log(url);

//     let response = await fetch(url)
//     let json = await response.json()
    
//     console.log(json);
//     const holidays = data.events;
    
//     holiday_div.innerHTML = ''; // Clear the previous content
//     holidays.forEach(day => {
//         holiday_div.innerHTML += `
//             <ul dir="rtl" class="holidays">
//                 <li class="info">${day.description}</li>
//             </ul>
//         `;
//     });
// }
// holidays();

// show religious time of cities
async function religiousTimes(){

    let cities = document.querySelector('#city').value
    
    let url = `https://one-api.ir/owghat/?token=${token}&city=${cities}&en_num=false`


    let response = await fetch(url)
    let json = await response.json()
    .then(info => {
        let infos = info.result

        religiousTimes_div.innerHTML = `
            <p>شهر : ${infos.city}</p>
            <p>اذان صبح : ${infos.azan_sobh}</p>
            <p>اذان ظهر : ${infos.azan_zohre}</p>
            <p>اذان مغرب : ${infos.azan_maghreb}</p>
            <p>طلوع آفتاب : ${infos.toloe_aftab}</p>
            <p>غروب آفتاب : ${infos.ghorob_aftab}</p>
            <p>نیمه شب شرعی : ${infos.nime_shabe_sharie}</p>
        `
    })
}


// show quote of authors
// async function author(){

//     const authorsID = document.querySelector('#authors').value

//     let url = `https://one-api.ir/sokhan/?token=${token}&action=random_by_author&author_id=${authorsID}`

//     let response = await fetch(url)
//     let json = await response.json()
//     .then(info => {
//         let result = info.result

//         text_div.innerHTML = `
//             <q>${result.text}</q>
//         `

//     })
// }
