import StyledCard from "@/components/atoms/Card";
import { BoxCardTitle, BoxCardContent, BoxCardImage } from "./styles";

interface BoxCardProps {
  id?: string;
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

const BoxCard = ({
  id,
  title,
  content,
  imageSrc,
  imageAlt,
  link,
}: BoxCardProps) => {
  return (
    <StyledCard href={link} id={id}>
      <BoxCardImage src={imageSrc} alt={imageAlt} width={300} height={200} />
      <BoxCardTitle>{title}</BoxCardTitle>
      <BoxCardContent>{content}</BoxCardContent>
    </StyledCard>
  );
};

export default BoxCard;
