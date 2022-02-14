interface IImageProps {
  url: string;
}

export const Image = ({ url }: IImageProps) => {
  return (
    <>
      <img src={url} />
    </>
  );
};
