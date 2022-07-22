import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/dist/photoswipe.css";

import { BaseReactProps } from "@src/common";
import { classNames } from "@src/utils";

interface ImageGalleryProps extends BaseReactProps {
  galleryId?: string;
  images: ImageGalleryItem[];
  imageClassName?: string;
}

export interface ImageGalleryItem {
  width: number | string;
  height: number | string;
  thumbnailUrl: string;
  imageUrl: string;
}

export const ImageGallery = (props: ImageGalleryProps) => {
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
      className={classNames(
        "pswp-gallery flex flex-wrap gap-5 justify-center",
        props.className
      )}
      id={galleryId}
    >
      {props.images.map((image, index) => (
        <a
          className={classNames(
            "w-full sm:w-1/3 md:w-1/4",
            props.imageClassName
          )}
          href={image.imageUrl}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryId + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={`${props.imageClassName ? props.imageClassName : ""}`}
            src={image.thumbnailUrl}
            alt=""
          />
        </a>
      ))}
    </div>
  );
};
