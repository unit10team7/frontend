import { FrameProps } from "../components/Frame";
import { ImgSrc } from "../types";

const drawImage = async (
  canvas: HTMLCanvasElement,
  imgSrcs: ImgSrc[],
  frameProps: Pick<FrameProps, "color" | "direction">,
) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = frameProps.color;

  if (frameProps.direction === "vertical") {
    canvas.width = 464;
    canvas.height = 1056;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imgSrcs.length; i++) {
      const imageElement = new Image();
      imageElement.src = imgSrcs[i].imageUrl;
      imageElement.crossOrigin = "anonymous";

      imageElement.onload = () => {
        ctx.drawImage(imageElement, 16, 32 + 216 * i);
      };
    }
  } else if (frameProps.direction === "square") {
    canvas.width = 660;
    canvas.height = 896;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imgSrcs.length; i++) {
      const imageElement = new Image();
      imageElement.src = imgSrcs[i].imageUrl;
      //   imageElement.onload = () => {
      //     ctx?.drawImage(
      //       img,
      //       0,
      //       0,
      //       img.width,
      //       img.width,
      //       TEXT_X + imgDx,
      //       imgDy * rowCount - TEXT_CROWN_Y,
      //       56,
      //       56,
      //     );
      //   };
      imageElement.crossOrigin = "Anonymous";
      ctx.save();
      ctx.translate(canvas.width / 2, (i % 2) * 400 + 216);
      if (i > 1) {
        ctx.translate(320, -16);
      } else {
        ctx.translate(-320, -16);
      }
      ctx.rotate(-Math.PI / 2);
      // Draw the image back onto the context but translated and rotated
      // Draw the image back onto the context but translated and rotated
      // Also scale down the image by half in both x and y directions.
      // Note that we're still using drawImage's optional parameters to specify a source rectangle to prevent upscaling.
      ctx.drawImage(imageElement, -192, -384 / 2, 216, 384);
      // And restore the context ready for the next loop
      ctx.restore();
    }
  }
};
export default drawImage;
