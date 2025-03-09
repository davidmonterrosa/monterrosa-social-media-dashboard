const getSocialMediaData = async () => {
    try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return [];
    }
}


const storeThemeToggle = () => {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

}


export {storeThemeToggle, getSocialMediaData}