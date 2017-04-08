function ThresholdChart(xlabels,yData,threshold,canvas,dataLabel)
{
  warningData=[];
  for (var i =0;i<xlabels.length;i++)
  {
    warningData[i]=threshold;
  }
  myChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: xlabels,
      datasets: [{
        label: dataLabel,
        data: customSet,
        backgroundColor: "rgba(153,255,51,0.4)"
      },{label: 'Threshold',
      data: warningData,
      backgroundColor: "rgba(153,0,0,1)",
    fill: false,
  borderColor: "rgba(153,0,0,1)"}]
    }
  })
}
