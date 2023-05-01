import { read } from "fs";

export function convertRawImageToBase64(image: Blob | null) {
   if(image){
    const imageUrl = URL.createObjectURL(image as any)
    return imageUrl;

    // return null;
   }
}