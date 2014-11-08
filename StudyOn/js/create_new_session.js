var main=function()
{


    $('.NewSession').hide();   
    $('#class1Data').hide();
    $('#class2Data').hide();
    $('#class3Data').hide();
    $('#class4Data').hide();

    $('#session').click( function()
    {
     
        $('.NewSession').show();
        
    });

   $('.cancel_button').click(function()
   {
       $('.NewSession').hide();
               
   });
   
   $('.create_option').click(function()
   {
       var name = "John Appleseed";
       var topic = document.createnew.topic.value;
       var place = document.createnew.place.value;
       var endTimes = document.createnew.endTime.value;
       var endTime = new Date(endTimes)
 
       var groupTable = Parse.Object.extend("Groups");
       var agroup = new groupTable();
       //agroup.save({Title: "title", Creator: "aq", Place: "somewhere"}).then(function(object) {
       // alert("created!!!");
       // });
       agroup.save({Title: topic, Creator: name, Place: place, EndTime: endTime}).then(function(object) {
          alert("The group has been created.");
       });
       $('.NewSession').hide();
               
   });

    $('#class1').click(function()
   {
        alert("class 1.");
       $('#class1Data').show();
       $('#class2Data').hide();
       $('#class3Data').hide();
       $('#class4Data').hide();
               
   });   

        $('#class2').click(function()
   {
   alert("class 2.");
       $('#class1Data').hide();
       $('#class2Data').show();
       $('#class3Data').hide();
        $('#class4Data').hide();
               
               
   });   



    $('#class3').click(function()
   {
    alert("class 3.");
       $('#class1Data').hide();
       $('#class2Data').hide();
       $('#class3Data').show();
        $('#class4Data').hide();
               
               
   });   



    $('#class4').click(function()
   {
    alert("class 4.");
       $('#class1Data').hide();
       $('#class2Data').hide();
       $('#class3Data').hide();
        $('#class4Data').show();
               
               
   });   





     
     
   

    
};


$(document).ready(main);