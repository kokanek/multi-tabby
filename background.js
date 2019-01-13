

chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    chrome.tabs.create({ url: "http://www.google.com" });
    chrome.tabs.create({ url: "http://www.twitter.com" });
    chrome.tabs.create({ url: "http://www.facebook.com" });
});

