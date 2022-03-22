const propValidtion = (data: any) => {
   if(!data){
      console.log('Content property is not valid');
      return ''
   }
    return data
}

export {propValidtion}