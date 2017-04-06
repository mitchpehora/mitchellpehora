

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
    month = document.getElementById('pastMonth');
    var canvas = document.getElementById("myChart"), ctx = canvas.getContext("2d");
    var xMonthLabels=lastMonth()

    var blank=[0,0,0,0,0,0,0,];
    var set1=[1,2,3,4,5,6,7];
    var set2=[1,1,1,1,1,1,1,];
    var monthSet=[1,2,3,4,25,36,44,53,64,51,42,33,24,15,16,17,18,19,20,21,22,23,23,25,26,27,28,29,30];

    var ctx = document.getElementById('myChart').getContext('2d');


    var myChart = new Chart(ctx, {
      responsive: false,
      type: 'line',
      data: {
        labels: lastWeek(),
        datasets: [{
          label: 'Temperature',
          data: blank,
          backgroundColor: "rgba(153,255,51,0.4)"
        }]
      }
    });

    button1.onclick = function() {

    			myChart = new Chart(ctx, {
    			  type: 'line',
    			  data: {
    			    labels: lastWeek(),
    			    datasets: [{
    			      label: 'Temperature',
    			      data: set1,
    			      backgroundColor: "rgba(153,255,51,0.4)"
    			    }]
    			  }
    			});
        }




button2.onclick = function() {

          			myChart = new Chart(ctx, {
          			  type: 'line',
          			  data: {
          			    labels: lastWeek(),
          			    datasets: [{
          			      label: 'Temperature',
          			      data: set2,
          			      backgroundColor: "rgba(153,255,51,0.4)"
          			    }]
          			  }
          			});
          }

          month.onclick = function() {

                    			myChart = new Chart(ctx, {
                    			  type: 'line',
                    			  data: {
                    			    labels: xMonthLabels,
                    			    datasets: [{
                    			      label: 'Temperature',
                    			      data: monthSet,
                    			      backgroundColor: "rgba(153,255,51,0.4)"
                    			    }]
                    			  }
                    			});
                    }

          reset.onclick = function() {
                          var set1=[0,0,0,0,0,0,0];
                    			myChart = new Chart(ctx, {
                    			  type: 'line',
                    			  data: {
                    			    labels: lastWeek(),
                    			    datasets: [{
                    			      label: 'Temperature',
                    			      data: blank,
                    			      backgroundColor: "rgba(153,255,51,0.4)"
                    			    }]
                    			  }
                    			});
                    }

});
