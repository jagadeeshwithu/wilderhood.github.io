var adList = [];
adList.push({link: "http://wilderhood.com", image: "Banner.jpg", text: "Ad Text"});
adList.push({link: "http://wilderhood.com", image: "bml.jpg", text: "Ad Text1"});
adList.push({link: "http://wilderhood.com", image: "jlr.jpg", text: "Ad Text1"});

var sponsoredList = [];
sponsoredList.push({link: "http://wilderhood.com", image: "Banner.jpg", text: "Ad Text"});
sponsoredList.push({link: "http://wilderhood.com", image: "bml.jpg", text: "Ad Text1"});
sponsoredList.push({link: "http://wilderhood.com", image: "jlr.jpg", text: "Ad Text1"});

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

function createElementWithString(htmlStr)
{
	var divNode = document.createElement("div");
	divNode.innerHTML = htmlStr;
	return divNode;
}

function createElementWithDataObj(data, compiledTemplate)
{
	data.image = getBaseURL() + "img/seo/" + data.image;
	
	var renderedTemplate = compiledTemplate.render(data);
	return createElementWithString(renderedTemplate);
}

function displayAds()
{
	return;

	var $adHolderDiv = $("#seoHolder");
	if(!$adHolderDiv.length)
		return;
	
	var template = $('#seoTemplate').html();
	var compiledTemplate = Hogan.compile(template);
	
	//randomize and pick first six
	var randomizedSponsoredList = shuffleArray(sponsoredList).slice(0, 3);
	var randomizedAdList = shuffleArray(adList).slice(0, 3);

	var fragment = document.createDocumentFragment();
	$(fragment).append(createElementWithString("<div class='w-seo-sponsored'>sponsored</div><hr/>"));
	for(var ii=0; ii<randomizedSponsoredList.length; ++ii)
	{
		var data = randomizedSponsoredList[ii];
		fragment.appendChild(createElementWithDataObj(data, compiledTemplate));
	}
	$(fragment).append(createElementWithString("<hr/>"));
	for(var ii=0; ii<randomizedAdList.length; ++ii)
	{
		var data = randomizedAdList[ii];
		fragment.appendChild(createElementWithDataObj(data, compiledTemplate));
	}
	$adHolderDiv.append(fragment);
}

displayAds();