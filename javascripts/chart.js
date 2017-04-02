

$(document).ready(function() {
  $('.contactMe').mouseenter(function() {
      $('.contactMe').fadeTo('fast',1);
  });
  $('.contactMe').mouseleave(function() {
      $('.contactMe').fadeTo('fast',0.75);
  });
    button1 = document.getElementById('sensor1Button');
    button2 = document.getElementById('sensor2Button');
    reset = document.getElementById('resetButton');
    var canvas = document.getElementById("myChart"), ctx = canvas.getContext("2d");


    todayInfo= new Date();
    yearToday=todayInfo.getFullYear()
    dayToday=todayInfo.getDay()
    monthToday=todayInfo.getMonth()
    dateToday=todayInfo.getDate();
    lastMonth=monthToday-1
    daysLastMonth=31

    if (monthToday == 4 || monthToday == 6 || monthToday == 9 || monthToday == 12)
    {
      daysLastMonth = 30
    }

    if (monthToday==2)
    {
      daysLastMonth=28
    }

    if (monthToday==2 && yearToday%4 ==0)
    {
      daysLastMonth=29
    }


    /*xDayWeek=[dayToday,dayToday-1,dayToday-2,dayToday-3,dayToday-4,dayToday-5,dayToday-6];*/
    xDayWeek=[dayToday-6,dayToday-5,dayToday-4,dayToday-3,dayToday-2,dayToday-1,dayToday];
    xDates=[dateToday-6,dateToday-5,dateToday-4,dateToday-3,dateToday-2,dateToday-1,dateToday]
    xMonths=[monthToday,monthToday,monthToday,monthToday,monthToday,monthToday,monthToday]
    xLabels=[]

      for (i = 0; i < xDayWeek.length; i++)
    {

    if(xDayWeek[i]<0)
    { xDayWeek[i]+=7; }

    if(xDates[i]==0)
    {xDates[i]=daysLastMonth; xMonths[i]=monthToday-1;}

    if(xDates[i]==-1)
    {xDates[i]=daysLastMonth-1; xMonths[i]=monthToday-1;}

    if(xDates[i]==-2)
    {xDates[i]=daysLastMonth-2; xMonths[i]=monthToday-1;}

    if(xDates[i]==-3)
    {xDates[i]=daysLastMonth-3; xMonths[i]=monthToday-1;}

    if(xDates[i]==-4)
    {xDates[i]=daysLastMonth-4; xMonths[i]=monthToday-1;}

    if(xDates[i]==-5)
    {xDates[i]=daysLastMonth-5; xMonths[i]=monthToday-1;}



    if (xDayWeek[i]==6)
    {xDayWeek[i]='Saturday';}

    if (xDayWeek[i]==5)
    {xDayWeek[i]='Friday ';}

    if (xDayWeek[i]==4)
    {xDayWeek[i]='Thursday';}

    if (xDayWeek[i]==3)
    {xDayWeek[i]='Wednesday';}

    if (xDayWeek[i]==2)
    {xDayWeek[i]='Tuesday';}

    if (xDayWeek[i]==1)
    {xDayWeek[i]='Monday';}

    if (xDayWeek[i]==0)
    {xDayWeek[i]='Sunday';}

    xLabels[i]=xDayWeek[i]+' ('+(xMonths[i]+1)+' - '+xDates[i]+')';
}





    var blank=[0,0,0,0,0,0,0,];
    var set1=[1,2,3,4,5,6,7];
    var set2=[1,1,1,1,1,1,1,];

    var ctx = document.getElementById('myChart').getContext('2d');


    var myChart = new Chart(ctx, {
      responsive: false,
      type: 'line',
      data: {
        labels: xLabels,
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
    			    labels: xLabels,
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
          			    labels: xLabels,
          			    datasets: [{
          			      label: 'Temperature',
          			      data: set2,
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
                    			    labels: xLabels,
                    			    datasets: [{
                    			      label: 'Temperature',
                    			      data: blank,
                    			      backgroundColor: "rgba(153,255,51,0.4)"
                    			    }]
                    			  }
                    			});
                    }

});
