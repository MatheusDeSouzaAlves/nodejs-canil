
export const dogs = (req, res) => {
    res.render('pages/page',{
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        }
    })
}

export const cats = (req, res) => {
    res.render('pages/page',{
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        }
    })
}

export const fishes = (req, res) => {
    res.render('pages/page',{
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        }
    })
}

export const homeTeste = (req, res) => {
    res.send('teste')
}