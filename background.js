// let highlightLorem = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, label").forEach((p) => {
//   if (p.textContent.toLowerCase().includes("lorem") || p.textContent.toLowerCase().includes("ipsum") || p.textContent.toLowerCase().includes("dolor") || p.textContent.toLowerCase().includes("praesent") || p.textContent.toLowerCase().includes("amet") || p.textContent.toLowerCase().includes("vestibulum") || p.textContent.toLowerCase().includes("integer") || p.textContent.toLowerCase().includes("aenean")) {
//     p.innerHTML = `<mark>${p.textContent}</mark>`
//   }
// })

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.query({ 'active': true, "lastFocusedWindow": true },
    () => {
      chrome.tabs.executeScript({
        code: `document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, li, label").forEach((p) => {
  if (p.textContent.toLowerCase().includes("lorem") || p.textContent.toLowerCase().includes("ipsum") || p.textContent.toLowerCase().includes("dolor") || p.textContent.toLowerCase().includes("praesent") || p.textContent.toLowerCase().includes("amet") || p.textContent.toLowerCase().includes("vestibulum") || p.textContent.toLowerCase().includes("integer") || p.textContent.toLowerCase().includes("aenean")) {
    p.innerHTML = "<mark>" + p.textContent + "</mark>"
  }
})`
      })
    }
  )
})
