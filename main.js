document.getElementById('socialTabs').onclick = clickedSocial;
document.getElementById('LearningTabs').onclick = clickedLearn;
document.getElementById('resourceTabs').onclick = clickedResources;

function clickedSocial() {
    chrome.windows.create({ url: ["http://www.linkedin.com", "http://www.hackerrank.com"] });
}

function clickedLearn() {
    chrome.windows.create({ url: ["https://git-scm.com/book/en/v2", "http://eloquentjavascript.net/20_node.html", "http://javascript.info/", "https://developers.google.com/web/fundamentals/", "https://developer.mozilla.org/en-US/"] });
}

function clickedResources() {
    chrome.windows.create({ url: ["http://www.pixabay.com", "http://www.flaticon.com"] });
}

