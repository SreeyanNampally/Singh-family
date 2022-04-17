var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://comps.gograph.com/black-and-white-man-with-thumbs-up_gg66880941.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update(){
    i++
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array){
          i = 0;
      }
      
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://comps.gograph.com/black-and-white-man-with-thumbs-up_gg66880941.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;



var imagesReverse = ["https://i.postimg.cc/bw5W5zSK/mother.jpg","https://comps.gograph.com/black-and-white-man-with-thumbs-up_gg66880941.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , " https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/MGn9GJXw/family.jpg"];
var namesReverse = ["Soni Singh","Alia Singh", "Rocky Singh", "Diljeet Singh", "Ranbir Singh", "Family Book"];
var r = 5;
function reverse(){
    r--
    var reversecount = 0
    if(r < reversecount){
          r = 5;
    }
      
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var backImage = imagesReverse[r];
    //Debug the code to store list of names in updatedName. Use names[i]
    var backName = namesReverse[r];
 
    document.getElementById("family_member_image").src = backImage;
    document.getElementById("family_member_name").innerHTML = backName;
}





