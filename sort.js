window.addEventListener("load", sortSetCurrent, false);

/**
 * Internally identifies the current sort type based on the URL.
*/
function sortSetCurrent() {
    const queryStringParams = new URLSearchParams(window.location.search);
    const sortQueryStringValue = queryStringParams.get("ordenacao"); 
    if (sortQueryStringValue) {
        const sortOption = document.querySelector(`.sort-option[data-value="${sortQueryStringValue}"]`);
        if (sortOption) {
            const selectedOptions = document.querySelectorAll('.selected-option');
            selectedOptions.forEach(option => {
                option.innerText = sortOption.innerText.trim();
            });
        }
    }
}

/**
 * Applies the page sorting when changed.
 * @param {string} sortSetting - Sort type.
*/ 

function sortResult(sortSetting) {
    queryStringParams.set("ordenacao", sortSetting);
    window.location.search = queryStringParams.toString();
}
function sortListOpen(element) {
    element.nextElementSibling.classList.toggle('hidden');
}