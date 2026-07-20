import { __ImageImpl } from "./__ImageImpl";
import { __BlobVideoImpl } from "./__BlobVideoImpl";
import { __TimedImageImpl } from "./__TimedImageImpl";
import { __IframeVideoImpl } from "./__IframeVideoImpl";
import { __CameraLauncherImpl } from "./__CameraLauncherImpl";
import { __SwitchableImageImpl } from "./__SwitchableImageImpl";
import { __SwitchableBlobVideoImpl } from "./__SwitchableBlobVideoImpl";
import { __SwitchableIframeVideoImpl } from "./__SwitchableIframeVideoImpl";



export const Media = {
  Image: __ImageImpl,
  BlobVideo: __BlobVideoImpl,
  TimedImage: __TimedImageImpl,
  IframeVideo: __IframeVideoImpl,
  CameraLauncher: __CameraLauncherImpl,
  SwitchableImage: __SwitchableImageImpl,
  SwitchableBlobVideo: __SwitchableBlobVideoImpl,
  SwitchableIframeVideo: __SwitchableIframeVideoImpl
};