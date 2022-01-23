import { convertXmlToString } from '../../utils/convertXmlToString';

import { ImageProps } from '../Episodes';

import { ContainerHeader, HeaderSummary } from './styles';

export interface HeaderProps {
  name: string;
  image: ImageProps;
  summary: string;
}

export const Header = ({ name, image, summary }: HeaderProps) => (
  <ContainerHeader>
    <h1>{name}</h1>
    <HeaderSummary>
      <img src={image?.medium} alt="Powerpuff Girls Cover" />
      <p>{convertXmlToString(summary)}</p>
    </HeaderSummary>
  </ContainerHeader>
);
