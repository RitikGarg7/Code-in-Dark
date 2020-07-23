var hackerEarth = require('hackerearth-node')
// import * as hackerEarth from 'hackerearth-node'


var hack=new hackerEarth(
    'b001908b8e0d10795a6908b8a506a4f555605090'
);

//     var config = {};
//     config.time_limit = 1;
//     config.memory_limit = 323244;
//     config.source = `    #include<stdio.h>
//
//     int main()
//     {
//        int a, b, c;
//
//        printf("Enter two numbers to add\\n");
//        scanf("%d%d", &a, &b);
//
//        c = a + b;
//
//        printf("Sum of the numbers = %d\\n", c);
//
//        return 0;
//     }`;
//     config.input = "";
//     config.language = "C";
//
// hack.compile(config)
//     .then(result=>{
//         console.log(JSON.parse(result).web_link)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// export {onCompile};
exports=module.exports={
    hack
}