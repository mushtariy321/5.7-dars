let input = document.querySelector('input')
let wrapper = document.querySelector('.wrapper')


let arr = [
    {
        id: 1,
        img: 'https://th.bing.com/th/id/OIP.z0CC5EH1tQOOYXKlrEvnbgHaEK?w=275&h=180&c=7&r=0&o=5&pid=1.7',
        title: 'Mercedes-Benz',
        const: '576.000 EURO'
    },
    {
        id: 2,
        img: 'https://mirbmw.ru/wp-content/uploads/2020/06/bmw-4-series-coupe-g22-05.jpg',
        title: 'BMW',
        const: '476.000 EURO'
    }, {
        id: 3,
        img: 'https://th.bing.com/th?id=OIF.BywAFi7FoP2Y%2fazfUEXV6w&w=318&h=180&c=7&r=0&o=5&pid=1.7',
        title: 'Rolls-Royce',
        const: '230.000 EURO'
    }, {
        id: 4,
        img: 'https://cdn.luxe.digital/media/20230123162705/most-expensive-houses-in-the-world-reviews-luxe-digital-1200x600.jpg.webp',
        title: 'Homes of the rich',
        const: '176.000 billion $'
    }, {
        id: 5,
        img: 'https://uybor.uz/_next/image?url=https%3A%2F%2Fapi.uybor.uz%2Fapi%2Fv1%2Fmedia%2Fn%2F17171416613552204.jpg%3Fwidth%3D660%26height%3D460&w=750&q=100',
        title: 'Tashkent city',
        const: '176.000 $'
    }, {
        id: 6,
        img: 'https://uybor.uz/_next/image?url=https%3A%2F%2Fapi.uybor.uz%2Fapi%2Fv1%2Fmedia%2Fn%2F16926867498417345.jpg%3Fwidth%3D480%26height%3D270&w=640&q=100',
        title: 'Zenit Resedence',
        const: '3000 $'
    }, {
        id: 7,
        img: 'https://th.bing.com/th/id/OIF.sktCrDCmQionlU2AibENRw?w=183&h=122&c=7&r=0&o=5&pid=1.7',
        title: 'Iphone',
        const: '17000 $',
    }, {
        id: 8,
        img: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Redmi_9T_2_0.jpg',
        title: 'Redmi',
        const: '1000 EURO'
    }, {
        id: 9,
        img: 'https://th.bing.com/th/id/OIP.ORUpz7X5LXOK1VrBuVWRlAHaH3?rs=1&pid=ImgDetMain',
        title: 'Vivo',
        const: '176.000 EURO'
    },
]

let res = []

const ReadFunction = (arr) => {
    arr.map((v) => {
        let div = document.createElement('div')
        div.innerHTML = `<img src="${v.img}" alt="" style="width: 350px; height: 350px;"><h1 style="text-align: center;">${v.title}</h1>  <p style="text-align: center;">${v.const}</p>`
        wrapper.appendChild(div)
    })
}

ReadFunction(arr)


input.addEventListener('input', (e) => {
    wrapper.innerHTML = ''
    e.preventDefault()
    res = arr.filter((v) => v.title.includes(input.value))
    ReadFunction(res)
})
