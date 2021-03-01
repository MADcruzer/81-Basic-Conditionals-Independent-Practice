// 1. English Section:
$(".english-button").click(function(){
    let englishInput = $(".english").val();
        if (englishInput==="Mon"){
    // display this text if the answer is correct
    $(".english-message").text("Correct!");
        }
    // display this text if the answer is incorrect
    	else {
    $(".english-message").text("Wrong! Try again."); 
        }
});


// 2. Social Studies section
$(".ss-button").click(function(){
    let ssInput = $(".social-studies").val();
		if (ssInput==="Albany") {
   $(".ss-message").text("Correct!");
        }
    else {
    $(".ss-message").text("Please try again!");
    }
});


// 3. Math section
$(".math-button").click(function(){
    let mathInput = Number($(".math").val());
    



});


// 4. Science section



