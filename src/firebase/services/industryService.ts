import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config";

export async function saveIndustryImage(image: File): Promise<string> {
    const storageRef = ref(storage, `industry_images/${image.name}`);

    await uploadBytes(storageRef, image);

    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
}