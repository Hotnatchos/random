
f

<?php
updater()
    
    console.log("he;")
function updater(){
$filePath = '/Json_saves/Comments.json'; 
$jsonData = json_decode(file_get_contents($filePath), true); 
$jsonData['someProperty'] = 'new value'; // Add new data 
$jsonData['newProperty'] = 'new data'; 
file_put_contents($filePath, json_encode($jsonData, JSON_PRETTY_PRINT))
    console.log("hey")
  }


function test(){
    echo "hellow"

}


    print_r($_GET);
    print_r($_POST);



?>

