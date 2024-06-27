
 function update_JSON(darta){


//   var neocities = require('neocities')
// var api = new neocities('YOURUSERNAME', 'YOURPASSWORD')

// api.upload([
//   {name: 'hello.html', path: './local.html'}
// ], function(resp) {
//   console.log(resp)
// })
      // console.log("hey")
      // const fs = require('fs');
      // const filepath = '/Json_saves/Comments.json';
      // const data = JSON.parse(fs.readFileSync(filepath));
      // data[someKey] = "newValue";
      // fs.writeFileSync(filepath, JSON.stringify(darta, null, 4));


            console.log("sssss")
      
            var xhr = new XMLHttpRequest();
            xhr.open("POST","/Scripts/Updater.php");
            xhr.onload = function(){
                  console.log(this.response)

                  
            }
            xhr.send(darta)
       
            // try { 
            //   const response = await fetch("/Json_saves/Comments.json", {
            //     method: "POST", // or 'PUT'
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(darta),
            //   });

            //   const result = await response.json();
            //   console.log("Success:", result);
            // } catch (error) {
            //   console.error("Error:", error);
            // }



          






                // fetch("/Json_saves/Comments.json")

                // .then((res) => {
                //     if (!res.ok) {
                //         throw new Error
                //             (`HTTP error! Status: ${res.status}`);
                //     }

                //   return res.json()
                // })
                // .then((data) => {
                // // console.log(data["Comment0"])
                // data = JSON.stringify(darta)
                // console.log(darta , "this is darta")
                // })
                // .catch((error) => 
                //       console.error("Unable to fetch data:", error));
  // fs = require('fs');
  // var name = '/Scripts/Updater.js';
  // var m = JSON.parse(fs.readFileSync(name).toString());
  // m.forEach(function(p){
  //     p.name= m.name;
  // });
  // fs.writeFileSync(name, JSON.stringify(m));

  // console.log("you have succesfully conected to this function")



  }
























