import styled from "styled-components";
import Image from "next/image";

export const BoxCardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0.5rem 0;
`;

export const BoxCardContent = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const BoxCardImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;
