   1). To add milliseconds to gven snippet,
                 
                       var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
                      var millisec = dateToday.getMilliseconds();
                       console.log(dateToday);

             OUTPUT:
                                  //[object date]
                                1996-10-14T18:35:32.077Z     
                                     
  2). To print keys and values of object,
              var library = [
              {
                     author: 'Bill Gates',
                     title: 'The Road Ahead',
                     readingStatus: true
               },
               {
                       author: 'Steve Jobs',
                      title: 'Walter Isaacson',
                      readingStatus: true
              },
              {
                      author: 'Suzanne Collins',
                      title: 'Mockingjay: The Final Book of The Hunger Games',
                     readingStatus: false 
              }];  
                 const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
                 console.log(key,value)
              })
                      keyValue(library)

     OUTPUT: 
                     
               "0"  //[object Object]
               { 
                      "author" : "Bill Gates",
                      "title" : " The road Ahead",
                      "readingtatus": true 
              } 
              "1" // [object  Object]
             { 
                      "author" : "Steve Jobs",
                      "title" : " Walter Isaacson",
                      "readingtatus": true 
              }
              "2" //[object Object]
               { 
                      "author" : "Suzanne Collins",
                      "title" : " Mockingjay : The final Book of Hunger Games",
                      "readingtatus": false
              }


  3). Apartfrom some identifier and case senstive letters, output of program will be , "Rohit". 
                 Correct code is given by,
                       var Employee =
                        {
                             company: 'Rohit'
                        }
                      var Emp1 = Object.create(Employee);
                     delete Emp1.company;
                     console.log(Emp1.company); 
   If errors were not cleared, then output will be, "Uncaught SyntaxError: Unexpected identifier " 

  4).  Given program, 
   
              function foo1()
              {
                    return {
                     bar: "hello"
                    };
               }
              function foo2()
             {
                    return   //Automatically sets delimiter
                    {
                         bar: "hello"
                     };
             }  
  
    In line 9, after return statement no other bractes are open, therefore compiler by default delimites.If the opening curly brace is not on the same line, then the javascript compiler will add a semi-colon.
 This means the function finishes on that line and the rest is not read. If you add the brace at the end of the line then it will not insert the semi-Colon and the function is fine. 


 5). Given program, 
     
            var arr = [2, 56, 78, 34, 65];
            var new_arr = arr.map(function(num) {
            return num / 2;
            });
            console.log([...set]);    
      
      OUTPUT:   

                  [1,28,39,17,32.5] 

6).Given Program,
         
            const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
            var arr=set.delete('Beethoven'); 
            console.log([...set]); 

      OUTPUT: 
   
                  //[object array] 2 
                  [''Mozart'',''Chopin'']  
 
 7). Programto print detils, 

               const os=[
               operatingsystem={
                       Name: "Ubuntu",
                       version: 18.4,
                       license: "open source",
                     }
               ]; 
               console.log( operatingsystem);

       OUTPUT: 

               //[object Object]

               {
                      "Name" : "Ubuntu",
                  "version" : 18.4,
                  "license" : "open source"
               } 

 8).  Given program objectsto be merged,
  
                const name = { firstName: 'Philip',
                                           lastName: 'Fry' };
                 const details = {
                                           job: 'Delivery Boy',
                                          employer: 'Planet Express'
                                          };
                   var object=Object.assign(name,details);  //Object.assign used to merge to objects.
                 console.log(object); 

         OUTPUT: 

                      //[object Object] 
                      {
                       "firstName": "Philip",
                       "lastName": "Fry", 
                        "job": "Delivery Boy",
                       "employer": "Planet Express",
                      } 
 9).  To print greeet function, 

                     const gimli =
                     { name: "Gimli",
                         race: "dwarf",
                        weapon: "axe",
                        greet: function() { return `Hi, my name is ${this.name}!`; }, };
                       console.log(gimli.greet());

         OUTPUT:  
                         "Hi, my name is Gimli!" 

10).The reason the constructor doesn't return a value is because it's not called directly by your code, 
       it's called by the memory allocation and object initialization code in the runtime.
       Its return value (if it actually has one when compiled down to machine code)
   
                 function Hero(name,level)
                 {
                        this.name = name;
                       this.level = level;
                  } 
                console.log(Hero());

      OUTPUT:     undefined.