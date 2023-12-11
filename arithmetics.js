if( input.value[elementIndex-1] !== '-' && input.value[elementIndex-1] !== '+' && input.value[elementIndex-1] !== '*' && input.value[elementIndex-1] !== '/' && input.value[elementIndex-1] !== '' && elementIndex !== 0) {
    let a = input.value.split('');
       a.splice(elementIndex , 0 ,'*');
       console.log(a);
       input.value = a.join('');
}
else {
    input.value = input.value
}