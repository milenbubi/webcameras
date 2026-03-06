import ImageImpl from "./ImageImpl";
import BlobVideoImpl from "./BlobVideoImpl";
import IframeVideoImpl from "./IframeVideoImpl";
import SwitchableBlobVideoImpl from "./SwitchableBlobVideoImpl";



export const Media = {
  Image: ImageImpl,
  BlobVideo: BlobVideoImpl,
  IframeVideo: IframeVideoImpl,
  SwitchableBlobVideo: SwitchableBlobVideoImpl
};