const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["A fresh start will put you on your way.", "A lifetime friend will be made soon", "A pleasant surprise is waiting for you!", "A smile is your personal welcome mat.", "You don't need luck, you are already a lucky person!"
]

  let randomFortune = Math.floor(Math.random() * fortunes.length)

  let newFortunesOnClick = fortunes[randomFortune]

  res.status(200).send(newFortunesOnClick)
})


app.get("/api/powers", (req, res) => {
  const shootFire = ["FLAME ON!"]
  res.status(200).send(shootFire)
  const flameOn = alert(shootFire)

 

})



app.get("/api/passwords", (req, res) => {
  const passwordsRandom = ['password','redbrickwall','1234icancount', 'youwillsmithneverguess0101', 'buildabearworkshopyeet33445', '0101110010101binarysucks', 'ifyouguessthisyourock99@#$','hitherenoob','yeetskeetskeetandyeet', 'mrpotatoheadisaG', 'myairjordansarefake$$$money'
]

  let funnyPasswords = Math.floor(Math.random() * passwordsRandom.length)

  let clickAPassword = passwordsRandom[funnyPasswords]

  res.status(200).send(clickAPassword)
})

app.get('/api/lottery', (req,res) => {
  const sike = ['SIKE YOU GOT PUNKD!']
  res.status(200).send(sike)
})


app.get("/api/luckyNumber", (req, res) => {
  const luckyNum = (min,max) =>{
    return Math.random() * (min - max) + min
  }
  res.status(200).send(luckyNum(0,100000))
})

app.get('/api/cowMoo', (req, res) =>{
  if(addEventListener('mouseover',moo)){
    res.status(200).send(moo)
  }
})





app.listen(4000, () => console.log("Server running on 4000"));
