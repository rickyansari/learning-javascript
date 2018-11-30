function returnsNothing(){
  return        //Automatic Semicolon (;) will be injected By syntax Parser.
  {
    key: 'value'
  }
}

console.log(returnsNothing())

function returnsObject(){
  return {
    key: 'value'
  }
}

console.log(returnsObject())


function returnsObjectAnotherSolution(){
  return (
    {
     key: 'value'
    }
  )
}

console.log(returnsObjectAnotherSolution())