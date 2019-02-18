// 
function robotFactory(model, mobile){
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)


function robotFactory_PVS(model, mobile){
return {
    model,
    mobile,
    beep() {
    console.log('Beep Boop');
    }
}
}

// To check that the property value shorthand technique worked:
const newRobot_PVS = robotFactory_PVS('P-501', false)
console.log(newRobot_PVS.model)
console.log(newRobot_PVS.mobile)