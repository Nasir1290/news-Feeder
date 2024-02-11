const dateFormatter = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
    const expectedDate = inputDate.toLocaleDateString('en-US',options);
    return expectedDate;
}


export {dateFormatter};