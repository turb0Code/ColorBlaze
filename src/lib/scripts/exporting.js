let colorsData = [];

export const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = (event) => {
        const content = event.target.result;

        try {
            const jsonData = JSON.parse(content);
            colorsData = jsonData.kolory;
            displayColors(colorsData);
        } catch (error) { console.error('Błąd w przetwarzaniu pliku JSON:', error); }
    };

    reader.readAsText(file);
}

export const saveJson = (colorsArray) => {
    const jsonContent = JSON.stringify({ colors: colorsArray }, null, 2);
    const encodedUri = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'color-pallete.json');
    document.body.appendChild(link);
    link.click();
}