import "./roundedImage.scss";

interface RoundedImageProps {
  imageUrl: string;
}

const RoundedImage = ({ imageUrl }: RoundedImageProps) => {
  return (
    <div className="rounded-image">
      <img src={imageUrl} />
    </div>
  );
};

export default RoundedImage;
