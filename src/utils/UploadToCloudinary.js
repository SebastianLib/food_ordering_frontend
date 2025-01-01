const upload_preset = "zosh-food"
const cloud_name="doqnc8hfp"

export const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', upload_preset);
    data.append('cloud_name', cloud_name);

    const res = await fetch('https://api.cloudinary.com/v1_1/doqnc8hfp/image/upload', {
        method: 'POST',
        body: data
    })

    const fileData = await res.json();
    return fileData.url;
}