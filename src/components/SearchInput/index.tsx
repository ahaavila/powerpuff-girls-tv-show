import { Input } from './styles';

export interface SearchInputProps {
  searchValue: string;
  handleChange: (e: any) => void;
}

export const SearchInput = ({
  searchValue,
  handleChange,
}: SearchInputProps) => (
  <Input type="search" onChange={handleChange} value={searchValue} />
);
