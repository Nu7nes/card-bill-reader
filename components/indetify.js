// function isNumber(str) {
//     let test = parseInt(str);
//     return test
// }

// function checkSize(arr) {
//     let value = [];

//     for (let x = arr.length - 1; x >= 0; x--) {
//         if (!isNaN(arr[x])) {
//             value.unshift(arr[x]);
//         } else {
//             value.shift();
//             value.shift();
//             return value;
//         }
//     }
// }

function identify(str) {
    const textoFatura = str
    const expenseRegex = /(\d{2}\/\d{2})\s+([\w\s*]+)\s+(\d{2}\/\d{2})(?:\s*[\w\s()$.,-]+)*\s+([\d,.]+)/g;

    const expenses = [];
    let match;
    while ((match = expenseRegex.exec(textoFatura)) !== null) {
        const date = match[1];
        const description = match[2].trim();
        const value = match[4].replace(',', '.');

        expenses.push({ date, description, value });
    }

    console.log(expenses);

    // let string = new String(str)
    // // console.log(string)
    // let values = [];
    // for (let i = 0; i < string.length; i++) {

    //     valueSchema = [];

    //     if (string[i] === '/') {
    //         // console.log('barrouuu')
    //         let brr = [
    //             parseInt(string.charAt(i - 2)),
    //             parseInt(string.charAt(i - 1)),
    //             parseInt(string.charAt(i + 1)),
    //             parseInt(string.charAt(i + 2))
    //         ]

    //         let total = []
    //         for(let i in brr) {
    //             let real = brr[i]
    //             if(!isNaN(real)){
    //                 total.unshift(real);
    //             }
    //         }

    //         valueSchema.push(total)

    //     }

    //     if (string[i] === ',') {

    //         let arr = [
    //             parseInt(string.charAt(i - 9)),
    //             parseInt(string.charAt(i - 8)),
    //             parseInt(string.charAt(i - 7)),
    //             parseInt(string.charAt(i - 6)),
    //             parseInt(string.charAt(i - 5)),
    //             parseInt(string.charAt(i - 4)),
    //             parseInt(string.charAt(i - 3)),
    //             parseInt(string.charAt(i - 2)),
    //             parseInt(string.charAt(i - 1)),
    //             parseInt(string.charAt(i + 1)),
    //             parseInt(string.charAt(i + 2))
    //         ]
    //         // console.log('is point: ' + arr)

    //         // console.log(arr)


    //         let valueInnerSchema = checkSize(arr)
    //         // console.log(valueInnerSchema)
    //         valueInnerSchema.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    //         valueSchema.push(valueInnerSchema)
    //         values.push(valueSchema)


    //     }



    // }
    // console.log(cobrancas);
}

module.exports = identify;