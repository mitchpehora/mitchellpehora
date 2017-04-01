

$(document).ready(function() {
    $('.contactMe').mouseenter(function() {
        $('.contactMe').fadeTo('fast',0.5);
    });
    $('.contactMe').mouseleave(function() {
        $('.contactMe').fadeTo('fast',1);
    });

    $('.dataSetOne').mouseenter(function() {
    		$('.dataSetOne').fadeTo('fast',0.5);
    });
    $('.dataSetOne').mouseleave(function() {
    		$('.dataSetOne').fadeTo('fast',1);
    });

    button1 = document.getElementById('button1');
    button2 = document.getElementById('button2');
    reset = document.getElementById('reset');
    var canvas = document.getElementById("myChart"), ctx = canvas.getContext("2d");

    todayInfo= new Date();

    dayToday=todayInfo.getDay()
    xLabel=[dayToday,dayToday-1,dayToday-2,dayToday-3,dayToday-4,dayToday-5,dayToday-6];


      for (i = 0; i < xLabel.length; i++)
    {
    if(xLabel[i]<0)
    {
      xLabel[i]+=7;
    }

    if (xLabel[i]==6)
    {
      xLabel[i]='Saturday';
    }

    if (xLabel[i]==5)
    {
      xLabel[i]='Friday';
    }

    if (xLabel[i]==4)
    {
      xLabel[i]='Thursday';
    }

    if (xLabel[i]==3)
    {
      xLabel[i]='Wednesday';
    }

    if (xLabel[i]==2)
    {
      xLabel[i]='Tuesday';
    }

    if (xLabel[i]==1)
    {
      xLabel[i]='Monday';
    }

    if (xLabel[i]==0)
    {
      xLabel[i]='Sunday';
    }
}



    canvas.width = 600;
    var set1=[0,0,0,0,0,0,0,];

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xLabel,
        datasets: [{
          label: 'Temperature',
          data: set1,
          backgroundColor: "rgba(153,255,51,0.4)"
        }]
      }
    });

    button1.onclick = function() {
          var set1=[1,2,3,4,5,6,7];
    			myChart = new Chart(ctx, {
    			  type: 'line',
    			  data: {
    			    labels: xLabel,
    			    datasets: [{
    			      label: 'Temperature',
    			      data: set1,
    			      backgroundColor: "rgba(153,255,51,0.4)"
    			    }]
    			  }
    			});
        }


button2.onclick = function() {
                var set1=[1,1,1,1,1,1,1,];
          			myChart = new Chart(ctx, {
          			  type: 'line',
          			  data: {
          			    labels: xLabel,
          			    datasets: [{
          			      label: 'Temperature',
          			      data: set1,
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
                    			    labels: xLabel,
                    			    datasets: [{
                    			      label: 'Temperature',
                    			      data: set1,
                    			      backgroundColor: "rgba(153,255,51,0.4)"
                    			    }]
                    			  }
                    			});
                    }

});
