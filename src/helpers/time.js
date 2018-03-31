export const time = (fullDate)=>{
  if (fullDate){
    const today = fullDate.slice(0,10);
    if(today === new Date().toISOString().slice(0,10)){
      return fullDate.slice(11,19)
    } else {
      return  fullDate.slice(0,10)
    }
  }
  return '';
}
