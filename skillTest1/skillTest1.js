let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  // Put your code here
  let catName = cat['name']
  cat.greeting()
  cat.color = 'black'
  
  
  // Don't edit the code below here
  
  let para1 = document.getElementById('name')
  let para2 = document.getElementById('color')
  
  para1.textContent = `The cat's name is ${ catName }.`;
  para2.textContent = `The cat's color is ${ cat.color }.`;
  