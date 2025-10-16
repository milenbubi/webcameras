/**
 ** Enter/exit fullscreen mode.
 * @param htmlElementId  HTML element id.
 */
function goFullScreen(htmlElementId: string) {
  if (!document.fullscreenEnabled) {
    return;
  }

  if (document.fullscreenElement) {  // Exit fullscreen mode
    document.exitFullscreen()
      .catch(() => { });
  }
  else {  // Enter fullscreen mode
    const fsElement = document.getElementById(htmlElementId);

    fsElement?.requestFullscreen()
      .catch(() => { });
  }
}



export { goFullScreen };