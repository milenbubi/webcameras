import { __ImageImpl } from "./__ImageImpl";
import { __BlobVideoImpl } from "./__BlobVideoImpl";
import { __IframeVideoImpl } from "./__IframeVideoImpl";
import { __SwitchableImageImpl } from "./__SwitchableImageImpl";
import { __SwitchableBlobVideoImpl } from "./__SwitchableBlobVideoImpl";
import { __SwitchableIframeVideoImpl } from "./__SwitchableIframeVideoImpl";



export const Media = {
  Image: __ImageImpl,
  BlobVideo: __BlobVideoImpl,
  IframeVideo: __IframeVideoImpl,
  SwitchableImageImpl: __SwitchableImageImpl,
  SwitchableBlobVideo: __SwitchableBlobVideoImpl,
  SwitchableIframeVideo: __SwitchableIframeVideoImpl
};