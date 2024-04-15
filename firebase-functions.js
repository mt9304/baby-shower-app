function PopulateListOfMiddleNames(middleNames) {
    const middleNamesTest = {"Oddie":["Max","Lena"],"Oliver":["Lena2","Max2","Max3"]};
    console.log("Starting");
    console.log(middleNamesTest);
    console.log(middleNames);
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
        document.getElementById('middleNamesList').appendChild(element);
    }
}