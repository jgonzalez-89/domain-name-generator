
window.onload = function() {

let pronoun = ["the", "our"];
let adj = ["great", "big", "fantastic"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".es", ".eusk", ".lol", ".me"];

  for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
          for (let n = 0; n < noun.length; n++) {
              for (let k = 0; k < domain.length; k++) {
                let div = document.createElement('div');
                div.innerText = `
                    ${pronoun[i]}${adj[j]}${noun[n]}${domain[k]}
                `
                document.body.appendChild(div);
              }
          }
      }
  }
};
