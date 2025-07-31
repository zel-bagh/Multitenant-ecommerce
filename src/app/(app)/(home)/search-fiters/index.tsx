import { SearchInput } from "./search-input";

type SearchFiltersProps = {
  data: any;
};

export const SearchFilters = ({
    data,
}: SearchFiltersProps) => {

  return (
    <div className="flex flex-col py-8 px-4 lg:px-12 border-b w-full gap-4">
        <SearchInput />
    </div>
  );

}