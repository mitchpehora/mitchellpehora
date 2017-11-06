$(document).ready(function() {
    $('.contactMe').mouseenter(function() {
        $('.contactMe').fadeTo('fast',1);
    });
    $('.contactMe').mouseleave(function() {
        $('.contactMe').fadeTo('fast',0.75);
    });
});

var deviceIphone = "iphone";
var deviceIpod = "ipod";

//Initialize our user agent string to lower case.
var uagent = navigator.userAgent.toLowerCase();
// Detects if the current device is an iPhone.
function DetectIphone()
{
   if (uagent.search(deviceIphone) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPod Touch.
function DetectIpod()
{
   if (uagent.search(deviceIpod) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPhone or iPod Touch.
function DetectIphoneOrIpod()
{
    if (DetectIphone())
       return true;
    /*   window.location.replace("file:///Users/mitchmac/Documents/github/harvest/mobiletest.html"); */
    if (DetectIpod())
       return true;
      /* window.location.replace("file:///Users/mitchmac/Documents/github/harvest/mobiletest.html");*/
    else
       return false;
}
function DetectAndroid()
{
  if(uagent.indexOf("android") > -1)
    return true;
  else
    return false;
}

function DetectBlackberry()
{
  if(uagent.indexOf("BlackBerry") > -1)
    return true;
  else
    return false;
}

function BB10()
{
  if(uagent.indexOf("BB10") > -1)
    return true;
  else
    return false;
}

function BB07()
{
  if(uagent.indexOf("BB07") > -1)
    return true;
  else
    return false;
}

function mobile()
{
  if(uagent.indexOf("mobile") > -1)
    return true;
  else
    return false;
}


if (DetectIphoneOrIpod() || DetectAndroid() ||DetectBlackberry() || BB10()||mobile()|| BB07())
{
  window.location.replace("https://mitchpehora.github.io/mitchellpehora/mobile.html");
}
