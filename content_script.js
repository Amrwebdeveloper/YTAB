

let adSkipperInterval;

function startAdSkipper() {
    adSkipperInterval = setInterval(() => {        
        document.querySelectorAll(".ytp-ad-skip-button-text").forEach(skip => { skip.click(); }); document.querySelectorAll("video").forEach(video => { if (!!video.hasAttribute("src") && video.parentNode.parentElement.classList.contains('ad-showing')) { video.currentTime = video.duration - 0.05; video.play(); } }); 
    }, 250);
}

function stopAdSkipper() {
    clearInterval(adSkipperInterval);
    console.clear();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.enabled) {
        startAdSkipper();
        console.log("startAdSkipper");
    } else {
        stopAdSkipper();
        console.log("stopAdSkipper");
    }
});

// Start the ad skipper by default
// startAdSkipper();