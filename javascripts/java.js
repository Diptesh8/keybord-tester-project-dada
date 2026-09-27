

// showing screen output section -----------

const showInDisplay = document.getElementById('screen-display');

document.addEventListener('keydown', function(event) {
  const oldData =showInDisplay.innerText; 
  const newData =event.key;
  showInDisplay.innerText=oldData+newData;
});

