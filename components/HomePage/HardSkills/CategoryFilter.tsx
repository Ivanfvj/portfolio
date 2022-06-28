import Chip from "../../shared/Chip";

export interface ICategoryFilter {
  text: string;
  value: string;
  active: boolean;
}

interface CategoriesFiltersProps {
  categories: ICategoryFilter[];
  isAllSelected?: boolean;
  toggleAllCategories?: (active: boolean) => void;
  onChange?: (value: string, active: boolean) => void;
}

export const CategoryFilters = (props: CategoriesFiltersProps) => {
  return (
    <>
      <Chip
        className="my-2 md:my-1"
        text="All"
        active={props.isAllSelected}
        onChange={props.toggleAllCategories}
      />
      {props.categories.map((e) => (
        <Chip
          key={e.text}
          className="my-2 md:my-1"
          text={e.text}
          active={e.active}
          onChange={(active: boolean) => {
            props.onChange(e.value, active);
          }}
        />
      ))}
    </>
  );
};
