document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('active');

    // Send the initial state of the checkbox to the content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {enabled: checkbox.checked});
    });

    // Listen for changes in the checkbox
    checkbox.addEventListener('change', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {enabled: checkbox.checked});
        });
    });
});
