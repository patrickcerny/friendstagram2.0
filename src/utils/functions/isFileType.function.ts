function getExtension(filename: string) {
  var parts = filename.split('.');
  return parts[parts.length - 1];
}

export function isVideo(filename: string) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'm4v':
    case 'avi':
    case 'mpg':
    case 'mp4':
      return true;
  }
  return false;
}

export function isImage(filename: string) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'jpg':
    case 'gif':
    case 'bmp':
    case 'png':
    case 'jpeg':
    case 'gif':
    case 'apng':
    case 'svg':
    case 'ico':
      return true;
  }
  return false;
}
