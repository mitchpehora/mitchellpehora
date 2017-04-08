

$(document).ready(function() {
  $('.home').mouseenter(function() {
      $('.home').fadeTo('fast',1);
  });
  $('.home').mouseleave(function() {
      $('.home').fadeTo('fast',0.75);
  });
    button1 = document.getElementById('sensor1Button');
    button2 = document.getElementById('sensor2Button');
    reset = document.getElementById('resetButton');
    xLabels=lastMonth();


    var numberDays = document.getElementById("numberDays");
    var canvas = document.getElementById("myChart"), ctx = canvas.getContext("2d");


    var blank=[0,0,0,0,0,0,0,];
    var set1=[1,2,3,4,5,6,7];
    var set2=[1,1,1,1,1,1,1,];
    var monthSet1=[1,2,3,4,25,36,44,53,64,51,42,33,24,15,16,17,18,19,20,21,22,23,23,25,26,27,28,29,30,12,5,32,45,33,25];
    var monthSet2=[12,5,16,90,30,20,54,67,24,48,73,73,23,63,19,64,36,83,73,45,94,23,56,34,56,23,45,67,45,34,22,7,10,8,25];

    var ctx = document.getElementById('myChart').getContext('2d');
    customSet=[];
    customxLabels=[];

    var myChart = new Chart(ctx, {
      responsive: false,
      type: 'line',
      data: {
        labels: [0],
        datasets: [{
          label: 'Temperature',
          data: [0],
          backgroundColor: "rgba(153,255,51,0.4)"
        }]
      }
    });



    button1.onclick = function() {
      var daysSelected = numberDays.value;
      customSet=[];
      customxLabels=[];
      warningData=[];

      for (var i=0;i<daysSelected;i++)
      {
        customSet[daysSelected-1-i]=monthSet1[monthSet1.length-1-i];
        customxLabels[daysSelected-1-i]=xLabels[xLabels.length-1-i]
        warningData[i]=30;

        console.log(customxLabels[daysSelected-1-i])

      }
    			myChart = new Chart(ctx, {
    			  type: 'line',
    			  data: {
    			    labels: customxLabels,
    			    datasets: [{
    			      label: 'Temperature',
    			      data: customSet,
    			      backgroundColor: "rgba(153,255,51,0.4)"
    			    },{label: 'Heat Warning',
              data: warningData,
              backgroundColor: "rgba(153,0,0,1)",
            fill: false,
          borderColor: "rgba(153,0,0,1)"}]
    			  }
    			});
        }





button2.onclick = function() {
          var daysSelected = numberDays.value;
          customSet=[];
          customxLabels=[];
          warningData=[]

          for (var i=0;i<daysSelected;i++)
          {
            customSet[daysSelected-1-i]=monthSet2[monthSet1.length-1-i];
            customxLabels[daysSelected-1-i]=xLabels[xLabels.length-1-i]
            warningData[i]=30;

          }
              myChart = new Chart(ctx, {
                type: 'line',
                data: {
                  labels: customxLabels,
                  datasets: [{
                    label: 'Temperature',
                    data: customSet,
                    backgroundColor: "rgba(153,255,51,0.4)"
                  },{label: 'Heat Warning',
                  data: warningData,
                  backgroundColor: "rgba(153,0,0,1)",
                fill: false,
              borderColor: "rgba(153,0,0,1)"}]
                }
              });
            }


reset.onclick = function() {

                    			myChart = new Chart(ctx, {
                    			  type: 'line',
                    			  data: {
                    			    labels: [0],
                    			    datasets: [{
                    			      label: 'Temperature',
                    			      data: [0],
                    			      backgroundColor: "rgba(153,255,51,0.4)"
                    			    }]
                    			  }
                    			});
                    }



});
