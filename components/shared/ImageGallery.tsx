import { useEffect } from "react";
// tslint:disable-next-line
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Image from "next/image";
import "photoswipe/style.css";

interface Props {
  galleryId?: string;
  images: ImageGalleryItem[];
}

export interface ImageGalleryItem {
  width: number | string;
  height: number | string;
  thumbnailUrl: string;
  imageUrl: string;
}

export const ImageGallery = (props: Props) => {
  const galleryId = props.galleryId || "image-gallery";
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryId,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      className="pswp-gallery flex flex-wrap gap-5 justify-center"
      id={galleryId}
    >
      {props.images.map((image, index) => (
        <a
          className="w-full sm:w-1/3 md:w-1/4"
          href={image.imageUrl}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryId + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          {/* <figure className="h-64 border">
            <Image src={image.imageUrl} layout="fill" objectFit="contain" />
          </figure> */}
          <img src={image.thumbnailUrl} alt="" />
        </a>
      ))}
    </div>
  );
};
