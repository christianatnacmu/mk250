# mk250
This tool is specifically designed to scale down images for uploading to Uganda Electronic Visa/Permit Application System which requires any uploaded image file to have a file size not exceeding 250kb. This tool resizes and compresses source files to fit those requirements while maintaining readability (depending on source). Designed for desktop use however not unusable on mobile.

Cropping and saving is done on the client's machine therefore the images are not uploaded in any way.

Use the tool [here at Github.io](https://christianatnacmu.github.io/mk250/)

## Source
Source file should be an image (jpg, png, ...) and should of course be of good readable quality from the start. 

## Presets
Presets have been designed to reduce file size while maintaining readability. They include:
* A4 (portrait, landcape)
* Letter (portrait, landscape)
* Passport Photo (EU (45x35), US (2x2))
* Passport (single page, double page)

## Resulting file
The resulting file is the cropped area, scaled down to the preset file and maximum quality whith a resulting file size of no more than 250kb.
