

$(document).ready(function() {
  $('.home').mouseenter(function() {
      $('.home').fadeTo('fast',1);
  });
  $('.home').mouseleave(function() {
      $('.home').fadeTo('fast',0.75);
  });

    reset = document.getElementById('resetButton');


    xLabels=lastMonth();


    var numberDays = document.getElementById("numberDays");
    var canvas = document.getElementById("myChart"), ctx = canvas.getContext("2d");
    var radio = document.getElementById("sensor");


    var blank=[0,0,0,0,0,0,0,];
    var set1=[1,2,3,4,5,6,7];
    var set2=[1,1,1,1,1,1,1,];
    var monthSet1=[1,2,3,4,25,36,44,53,64,51,42,33,24,15,16,17,18,19,20,21,22,23,23,25,26,27,28,29,30,12,5,32,45,33,25];
    var monthSet2=[12,5,16,90,30,20,54,67,24,48,73,73,23,63,19,64,36,83,73,45,94,23,56,34,56,23,45,67,45,34,22,7,10,8,25];

    var ctx = document.getElementById('myChart').getContext('2d');
    customSet=[];
    customxLabels=[];

    var radioSelected=radio.value;

    if (radioSelected=='set1')
    {
      thresholdCheck=document.getElementById("myCheck").checked
      var daysSelected = numberDays.value;
      customSet=[];
      customxLabels=[];


      for (var i=0;i<daysSelected;i++)
      {
        customSet[daysSelected-1-i]=monthSet1[monthSet1.length-1-i];
        customxLabels[daysSelected-1-i]=xLabels[xLabels.length-1-i]
      }

      if(thresholdCheck==true)
          {thresholdChart(customxLabels,customSet,10,ctx,'Temperature')};

      if(thresholdCheck==false)
              {regularChart(customxLabels,customSet,ctx,'Temperature')}
    }

radio.onchange = function() {
  var radioSelected=radio.value;

  if (radioSelected=='set1')
  {
    thresholdCheck=document.getElementById("myCheck").checked
    var daysSelected = numberDays.value;
    customSet=[];
    customxLabels=[];


    for (var i=0;i<daysSelected;i++)
    {
      customSet[daysSelected-1-i]=monthSet1[monthSet1.length-1-i];
      customxLabels[daysSelected-1-i]=xLabels[xLabels.length-1-i]
    }

    if(thresholdCheck==true)
        {thresholdChart(customxLabels,customSet,10,ctx,'Temperature')};

    if(thresholdCheck==false)
            {regularChart(customxLabels,customSet,ctx,'Temperature')}
  }

  if (radioSelected=='set2')
  {
    thresholdCheck=document.getElementById("myCheck").checked
    var daysSelected = numberDays.value;
    customSet=[];
    customxLabels=[];


    for (var i=0;i<daysSelected;i++)
    {
      customSet[daysSelected-1-i]=monthSet2[monthSet2.length-1-i];
      customxLabels[daysSelected-1-i]=xLabels[xLabels.length-1-i]
    }

    if(thresholdCheck==true)
        {thresholdChart(customxLabels,customSet,10,ctx,'Temperature')};

    if(thresholdCheck==false)
            {regularChart(customxLabels,customSet,ctx,'Temperature')}
  }
}

numberDays.onchange = function() {
  thresholdCheck=document.getElementById("myCheck").checked
  var daysSelected = numberDays.value;
  customSet=[];
  customxLabels=[];


  for (var i=0;i<daysSelected;i++)
  {
    customSet[daysSelected-1-i]=monthSet1[monthSet1.length-1-i];
    customxLabels[daysSelected-1-i]=xLabels[xLabels.length-1-i]
  }

  if(thresholdCheck==true)
      {thresholdChart(customxLabels,customSet,10,ctx,'Temperature')};

  if(thresholdCheck==false)
          {regularChart(customxLabels,customSet,ctx,'Temperature')}

}










reset.onclick = function() {
  regularChart([0],[0],ctx,'Temperature');
}



});
