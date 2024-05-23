


document.getElementById("get-tab-title-button").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    
    const tabTitleElement = document.getElementById("tab-title");
    tabTitleElement.textContent = `Current Tab Title: ${tab.title}`;
  });
  