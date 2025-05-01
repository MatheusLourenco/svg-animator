export function downloadSvg(svgElementId, fileName) {
  const svgContent = document.getElementById(svgElementId).outerHTML;
  const link = document.createElement('a');
  link.href = 'data:image/svg+xml;base64,' + btoa(svgContent);
  link.download = fileName;
  link.click();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('downloadBtn').addEventListener('click', () => {
    downloadSvg('bouncingSvg', 'bouncingBall.svg');
  });
});
