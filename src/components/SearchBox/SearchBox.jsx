import css from "../SearchBox/SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterVal = useSelector(selectNameFilter);

  const handleFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.cont}>
      <label className={css.text}> Find contact by name:</label>
      <input
        type="text"
        className={css.input}
        name="filter"
        placeholder="Enter name to filter"
        value={filterVal}
        onChange={handleFilter}
      />
    </div>
  );
}
