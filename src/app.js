
window.onload = function() {

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net"];
let newDomain = [];


  for (let i = 0; i < pronoun.length; i++) {
      for (let i1 = 0; i1 < adj.length; i1++) {
          for (let i2 = 0; i2 < noun.length; i2++) {
              for (let i3 = 0; i3 < domain.length; i3++) {
                 newDomain.push(pronoun[i] + adj[i1] + noun[i2] + domain[i3]);
                 return '<li>'+pronoun+' '+adj+'</li>'
              }
          }
      }
  }

document.write(newDomain);
};

document.querySelector(".prueba").innerHTML = JSON.stringify(newDomain)