function ls() {
  return 'whoami ls stuff whatever etc etc'
}

function help() {
  return 'If you are unsure on what the commands do you can add a question mark (?) at the end of the command for futher help. Here are the list of commands avilable<br />whoami contact clear ls cv'
}

function cv() {
  return 'Click here to view and download my CV. A new tab will open.'
}

function whoami() {
  return 'Name: Niraj Vyas<br />Occupation: Web Developer<br />Technology stack: HTML, CSS, Javascript, Backbone.js, React.js<br />Build tools: Webpack, Brunch, Gulp<br />Version control: Git'
}

function ping() {
  return 'Feel free to contact me at nirajvyas20@gmail.com or via LinkedIn.'
}


export { ls, help, cv, whoami, ping }