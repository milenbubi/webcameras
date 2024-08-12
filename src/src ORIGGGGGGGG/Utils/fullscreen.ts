


function goFullScreen(elementId: string) {
  if (!document.fullscreenEnabled) {
    return;
  }

  if (document.fullscreenElement) {  // Exit fullscreen mode
    document.exitFullscreen()
      .catch(() => { });
  }
  else {  // Enter fullscreen mode
    const fsElement = document.getElementById(elementId);

    fsElement?.requestFullscreen()
      .catch(() => { });
  }
}






export { goFullScreen };