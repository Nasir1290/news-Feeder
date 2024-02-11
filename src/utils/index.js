

// write a utility function to convert a string date into a usable date time.
const dateFormatter = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const expectedDate = inputDate.toLocaleDateString('en-US', options);
    return expectedDate;
}


// control search query result and set them into main news state
const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
        return new Promise((resolve) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(async () => {
                const result = await func(...args);
                resolve(result);
            }, delay);
        });
    };
};

const searchedNewsResult = async (inputText) => {
    const searchedResult = async () => {
        let inputTxt = inputText.trim();
        if (inputText !== '') {
            const response = await fetch(`http://localhost:8000/v2/search?q=${inputTxt}`);
            const data = await response.json();
            return data;
        }
        if (inputText === "") {

            const response = await fetch('http://localhost:8000/v2/top-headlines?category=general');
            const data = await response.json();
            return data;
        }
    };

    const result = await searchedResult();
    return result;
};

const debouncedSearch = debounce(searchedNewsResult, 2000);



export { dateFormatter, debouncedSearch };