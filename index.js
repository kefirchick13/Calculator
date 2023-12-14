
const input = document.getElementById('input');
var buttons = document.querySelectorAll('.new')

buttons.forEach(function (element) {
    element.addEventListener('click', newVal);
}
)

function newVal(element) {
    target = element.target.id;
    if(input.value === '0') {
        input.value = '';
        input.value+= target;
    }
    else input.value += target;
    // element.preventDefault();
}




const clearAll = function clearAll() {
    input.value = '0';
};


const clearSymbol = function clear() {
    const arrayOfSymbols = Array.from(input.value)
    let length = arrayOfSymbols.length - 1;
    newArray = arrayOfSymbols.slice( 0, length);
    // console.log(newArray);
    // stringValue = newArray.join('');
    input.value = newArray.join('');
}


const newValue = function newValue(value) {
    if(input.value === '0') {
        input.value = "";
        input.value+= value;
    }
    else input.value += value;
}


const equalMain = function equalMain() {

    const arcsin = 'asin'
    function mathAsin(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.asin(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(arcsin,mathAsin)

    const arccos = 'acos'
    function mathAcos(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.acos(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(arccos, mathAcos)

    const arctan = 'atan'
    function mathAtan(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.atan(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(arctan, mathAtan)

    const sin ='sin'
    function mathSin(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.sin(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(sin,mathSin)

    const cos = 'cos'
    function mathCos(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.cos(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(cos,mathCos)

    const tan = 'tan'
    function mathTan(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.tan(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(tan,mathTan)

    const ln = 'ln'
    function mathLn(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.log(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(ln,mathLn)

    const log = 'lg'
    function mathLg(arrayOfSymbolsInArithParse, arithResult) {
        arithResult = Math.log10(arrayOfSymbolsInArithParse)
         return arithResult
    }
    equalFun(log,mathLg)

    input.value = eval(input.value);
}

// если у нас есть арифметическая функция в строке, то мы удаялем ее(вместе с ее синтаксом, а ее результат оставляем на месте удаленного(в случае если после результата арифметической функции нет знака, или стоят скобки, мы добавляем знак умножения после нее.
 
    const equalFun = function equal(sin, mathFun) {
            if (input.value.includes(sin) === true) {
                
                let arrOfOperation
                let elementIndex = input.value.indexOf(sin)
                // console.log(elementIndex);
                let arithResult

                //считаем кол-во символов в скобках арифметической операции
                arrayOfSymbolsInArith = []
                arithStart = input.value.indexOf(sin) + sin.length + 1; //+ 1 cкобка
                arrOfOperation = input.value.split('')
                while (arrOfOperation[arithStart] !== ')' ) {
                    arrayOfSymbolsInArith.push(arrOfOperation[arithStart]);
                    arithStart++;
                }

                    console.log(arrayOfSymbolsInArith)
                // записываем длину полной арифметической операции в переменную
            arithLength = arithStart - input.value.indexOf(sin) + 1; // + 1(скобка)
            console.log(arithLength);

            arrayOfSymbolsInArith = arrayOfSymbolsInArith.join('').toString();
            arrayOfSymbolsInArithParse = parseFloat(arrayOfSymbolsInArith, [10])
            arithResult = mathFun(arrayOfSymbolsInArithParse,arithResult)
            console.log(arithResult); // находим результат арифметической операции

            endOfArith = input.value.indexOf(sin) + arithLength; 
                console.log(endOfArith);
               
                if( input.value[elementIndex-1] !== '-' && input.value[elementIndex-1] !== '+' && input.value[elementIndex-1] !== '*' && input.value[elementIndex-1] !== '/' && input.value[elementIndex-1] !== '' && elementIndex !== 0) {
                    let a = input.value.split('');
                       a.splice(elementIndex , 0 ,'*');
                       console.log(a);
                       input.value = a.join('');
                       endOfArith++
                       arithLength++
                       elementIndex++
                }
                else {
                    input.value = input.value
                }
                    if( input.value[endOfArith] !== '-' && input.value[endOfArith] !== '+' && input.value[endOfArith] !== '*' && input.value[endOfArith] !== '/' && input.value[endOfArith] !== '' && endOfArith !== input.value.length) {
                    let a = input.value.split('');
                       a.splice(endOfArith , 0 ,'*');
                       console.log(a);
                       input.value = a.join('');
                    }

            else {
                input.value = input.value;
            }

            arrOfOperation = input.value.split('')
            console.log(arrOfOperation) // раскладываем выражение на массив символов

            let DeletedArrOfOperation = arrOfOperation.splice(elementIndex, arithLength, arithResult);
            console.log(arrOfOperation) // удаляем символы арфметической операции из массива и вставляем  результат в массив

            input.value = arrOfOperation.join('');
            }
       
            // else input.value = eval(input.value);
            // console.log(input.value);
        }
    
  