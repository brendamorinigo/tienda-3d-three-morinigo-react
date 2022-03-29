const products= 
[
    {id:1, name:"HANMEN", price:100, stock:12, detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores modi pariatur cumque minima, totam quisquam cum asperiores earum nisi.", img:"https://images.cults3d.com/1f0EED767KlgvnWXlp3oTUwb_OQ=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/19873598/illustration-file/f71a1051-870f-4841-a983-29484ddf92aa/3-42.jpg"},
    {id:2, name:"RIOMEN SUKUNA", price:800,stock:12, detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores modi pariatur cumque minima, totam quisquam cum asperiores earum nisi.", img:"https://images.cults3d.com/rJAveR28SYbxtrsHL5qLhbOUx9U=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/17887774/illustration-file/40360c2e-047d-44a7-ab41-7af9bfb34e51/ryomen-sukuna-2.jpg"},
    {id:3, name:"NEZUKO", price:300,stock:12, detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores modi pariatur cumque minima, totam quisquam cum asperiores earum nisi.", img:"https://images.cults3d.com/7JmZH186ue6yW0c08EGl4QCrxXs=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/16711896/illustration-file/14e2d5ec-cbc3-4f98-91d0-4690e6715b44/7.jpg"},
]
;

export const promesa= new Promise((resolver, error)=>{
let condicion= true
if(condicion){
    setTimeout(()=>{
        resolver(products)
    },3000)
}else{
    error('esta mal')
}
})
