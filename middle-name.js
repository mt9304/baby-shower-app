function PopulateListOfMiddleNames(middleNames) {
    //const middleNamesTest = {"Oddie":["Max","Lena"],"Oliver":["Lena2","Max2","Max3"]};
    //console.log("Starting");
    //console.log(middleNamesTest);
    //console.log(middleNames);


    // Sort the middleNames records by how many entries in their arrays they have
    let sortedMiddleNames = Object.entries(middleNames).sort((a, b) => b[1].length - a[1].length);
    middleNames = Object.fromEntries(sortedMiddleNames);

    for (const [name, record] of Object.entries(middleNames)) {
        const width = 10 + (50 * record.length);
        const element = document.createElement('div');
        element.style.display = 'flex';
        element.style.alignItems = 'center';
        element.style.border = '1px solid blue';
        element.style.height = '150px';
        element.style.width = `${width}px`;
        element.style.fontSize = '3em';
        element.style.paddingLeft = '25px';
        element.style.marginTop = '25px';
        element.textContent = name;
        //Add the record.length value in text form to the right of the bar graph
        const lengthText = document.createElement('div');
        lengthText.textContent = ` (${record.length})`;
        element.appendChild(lengthText);
        document.getElementById('middleNamesList').appendChild(element);
    }
}