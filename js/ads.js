var adList = [];
adList.push({link: "http://wilderhood.com", image: "abcd.jpg", text: "Ad Text"});
adList.push({link: "http://wilderhood.com", image: "abcd.jpg", text: "Ad Text1"});

function getBaseURL() {
   return location.protocol + "//" + location.hostname + 
      (location.port && ":" + location.port) + "/";
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function displayAds()
{
	var $adHolderDiv = $("#adHolder");
	if(!$adHolderDiv.length)
		return;
	
	var template = $('#adTemplate').html();
	var compiledTemplate = Hogan.compile(template);
	
	//randomize and pick first six
	var randomizedAdList = shuffleArray(adList);
	var maxCount = Math.min(randomizedAdList.length, 6);
	
	var fragment = document.createDocumentFragment();
	for(var ii=0; ii<maxCount; ++ii)
	{
		var data = randomizedAdList[ii];
		data.image = getBaseURL() + "img/ads/" + data.image;
		
		var renderedTemplate = compiledTemplate.render(data);
		var divNode = document.createElement("div");
		divNode.innerHTML = renderedTemplate;
		fragment.appendChild(divNode);
	}
	$adHolderDiv.append(fragment);
}

displayAds();