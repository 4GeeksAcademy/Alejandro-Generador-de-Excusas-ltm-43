/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let first = ["The"];
  let adj = [
    "friendly ",
    "angry ",
    "lonely ",
    "crazy ",
    "glowing ",
    "smelly ",
    "fast ",
    "new "
  ];
  let noun = [
    "footballer ",
    "rat ",
    "cat ",
    "police ",
    "driver ",
    "comedian ",
    "avocado ",
    "dog"
  ];
  let action = [
    "took my ",
    "threw my ",
    "hit my ",
    "broke my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "flooded my "
  ];
  let possetion = [
    "toe ",
    "car ",
    "bycle",
    "bed ",
    "shoe ",
    "wallet ",
    "shirt ",
    "pants ",
    "tablet ",
    "phone ",
    "cake "
  ];
  let where = [
    "on the corner",
    "in my house",
    "in my school",
    "in front of the bank",
    "near the my house",
    "near the toilet",
    "at the train station"
  ];

  let rdm2 = Math.floor(Math.random() * adj.length);
  let rdm3 = Math.floor(Math.random() * noun.length);
  let rdm4 = Math.floor(Math.random() * action.length);
  let rdm5 = Math.floor(Math.random() * possetion.length);
  let rdm6 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm2] +
    noun[rdm3] +
    action[rdm4] +
    possetion[rdm5] +
    where[rdm6];
};
