// Factory Functions 
// Factory functions are used to create multiple objects on a massive scale.

function robotFactory(model, mobile){
    return {
      model : model,
      mobile : mobile,
      beep() {console.log('Beep Boop')}
    }
  }
  
const tinCan = robotFactory('P-500', true);
tinCan.beep();
  