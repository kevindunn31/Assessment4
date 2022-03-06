const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           "A beautiful, smart, and loving person will be coming into your life.",
           "A dubious friend may be an enemy in camouflage.",
           "A faithful friend is a strong defense.",
           "A feather in the hand is better than a bird in the air.",
           "A fresh start will put you on your way.",

  ];

  

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/disrespect", (req, res) => {
  const disrespect = ["You are not good",
          "Awful shirt",
          "Poor time management",
        ];

        let randomIndex = Math.floor(Math.random() * disrespect.length);
  let randomDisrespect = disrespect[randomIndex];

  res.status(200).send(randomDisrespect);
});

const form = document.querySelector("form")
const newNameIn = document.querySelector("newNameIn")
const newNameInx = document.getElementById("newNameInx")
const submitBtn = newNamInx;

function startName() {
  const newName = newNameIn.ariaValueMax;
  const nameFull = {
    newName
  }
};


axios.post('/api/api/users/:username', (req, res) 
  .then (res) => {
    let name res.data[res.data.length];
    alert("New name added");

    newNameIn.value = "";

  };

let users = []
axios.put('/api/api/users/:username', (req, res) => {
  let existingUsername = req.params.username
  let newUsername = req.body.username
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === existingUsername) {
      user[i].username = newUsername
      res.status(200).send("Info updated")
      return
    }
  }
  res.status(400).send("Info can not be updated")
});

let users = []
axios.delete('/api/users/:username', (req, res) => {
  let existingUsername = req.params.username
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === existingUsername) {
      users.splice(i, 1)
      res.status(200).send("They gone")
      return
    }
  }
  res.status(400).send("We cannot find them")
});

nameBtn.addEventListner("click", createName);
indexBtn.addEventListner("click", deleteName);
submitForm.addEventListner("click", editName);





app.listen(4000, () => console.log("Server running on 4000"));
