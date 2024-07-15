import React , {Fragment, useState} from "react"

//so the thing is that we created a wrapper and the contents inside it can be different as we see the first cardwrapper has an innercomponent that is hi there and the second one has 
//hi there 2 which is in the same type of wrapper only but nothing but the inner content is different that is the thing about wrapper classes!!

function App() {
  return <div>
    <CardWrapper>
      hi there!
    </CardWrapper>

    <CardWrapper>
      hi there 2!
    </CardWrapper>
    
  </div>
}

function CardWrapper({children}){  //children means everything that is written inside the cardwrapper in the return part of the function App()
  //card wrapper needs to accept some react componet as an input and then render that react component inside some extra styles 
  //create a div which has a border
  //and inside a div renders a prop
  return <div style={{border:"2px solid black" , padding:20 , margin : 10  , background : "grey"}}>
    {children}
  </div>
}

export default App
