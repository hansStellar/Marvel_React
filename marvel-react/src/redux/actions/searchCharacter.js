import { useDispatch, useSelector } from "react-redux";

const SearchCharacter = ({ search }) => {
  const dispatch = useDispatch();
  dispatch({ search });
};

export default SearchCharacter;
