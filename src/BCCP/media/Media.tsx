import ImageImpl from "./ImageImpl";
import BlobVideoImpl from "./BlobVideoImpl";
import IframeVideoImpl from "./IframeVideoImpl";
import SwitchableImageImpl from "./SwitchableImageImpl";
import SwitchableBlobVideoImpl from "./SwitchableBlobVideoImpl";



export const Media = {
  Image: ImageImpl,
  BlobVideo: BlobVideoImpl,
  IframeVideo: IframeVideoImpl,
  SwitchableImageImpl: SwitchableImageImpl,
  SwitchableBlobVideo: SwitchableBlobVideoImpl
};