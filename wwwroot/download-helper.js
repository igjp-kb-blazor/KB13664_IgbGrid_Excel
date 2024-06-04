/**
 * @param { byteArray: string, fileName: string, contentType: string} options
 */
function downloadFromByteArray(options) {
    const blob = new Blob([options.byteArray], { type: options.contentType });
    const url = URL.createObjectURL(blob);
    downloadFromUrl({ url: url, fileName: options.fileName });
    URL.revokeObjectURL(url);
}

/**
 * @param { url: string, fileName?: string } options
 */
function downloadFromUrl(options) {
    const anchorElement = document.createElement('a');
    anchorElement.href = options.url;
    anchorElement.download = options.fileName ?? '';
    anchorElement.click();
    anchorElement.remove();
}