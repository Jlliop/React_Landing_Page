export async function fetchMusicGroupData() {
    const response = await fetch('https://api.example.com/musicgroup');
    const data = await response.json();
    return data;
}

