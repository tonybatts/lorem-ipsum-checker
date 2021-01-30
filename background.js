chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.query({ 'active': true, "lastFocusedWindow": true },
    () => {
      chrome.tabs.executeScript({
        file: "loremMatch.js"
      })
    }
  )
})






