const tabsControl = document.querySelector(".tabs-control");
const tabsButtons = document.querySelectorAll(".tab-btn")
const tabs = document.querySelectorAll("[data-tab]")
let activeTab = "0"

function hideInactiveTabs(){
  tabs.forEach(tab => {
    if(tab.dataset.tab !== activeTab){
      return tab.style.display = "none";
    }

    tab.style.display = "block"
  })
}

function changeActiveTab(e){
  activeTab = e.target.dataset.tabIndex
  hideInactiveTabs()
}

hideInactiveTabs()
tabsButtons.forEach(button => button.addEventListener("click", changeActiveTab))

