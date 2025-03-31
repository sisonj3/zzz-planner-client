// Get image url with directory path and file name as params
export default function getImg(folder, fileName) {

    // Remove spaces and set path
    const newFileName = fileName.replace(/\s/g, '');
    const path = `${folder}/${newFileName}.png`;
    const imgURL = new URL(path, import.meta.url).href;

    return imgURL;
}
