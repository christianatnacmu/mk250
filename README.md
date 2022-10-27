# mk250
This tool is specifically designed to scale down images for uploading to [Uganda Electronic Visa/Permit Application System](https://visas.immigration.go.ug/) which requires any uploaded image file to have a file size not exceeding 250kb. This tool resizes and compresses source files to fit those requirements while maintaining readability (depending on source). Designed for desktop use however not unusable on mobile.

Cropping and scaling are done on the local computer, *no data is uploaded to any server* so your documents are secure.

This tool can be accessed via [https://christianatnacmu.github.io/mk250/](https://christianatnacmu.github.io/mk250/) or may be downloaded for offline use.

Built with [Cropper.js](https://github.com/fengyuanchen/cropperjs), [Bootstrap](https://github.com/twbs/bootstrap) and [jQuery](https://github.com/jquery/jquery)

![Screenshot](https://github.com/christianatnacmu/mk250/blob/main/screenshot.png?raw=true)



## Source File
Source file should be an image (jpg, png, ...) and should of course be of good readable quality from the start. 

## Presets
Presets have been designed to reduce file size while maintaining readability. They include:
* A4 (portrait, landcape)
* Letter (portrait, landscape)
* Passport Photo (EU (45x35), US (2x2))
* Passport (single page, double page)

## Resulting file
The resulting file is the cropped area, scaled down to the preset file and maximum quality whith a resulting file size of no more than 250kb. By default the original file name is used as the download filename but this can be changed.
