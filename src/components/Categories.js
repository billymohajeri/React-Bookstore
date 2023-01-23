import '../styles/Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoriesRes = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <section className="categories-container">
      <button
        type="button"
        className="check-btn"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      <h2 className="under">{categoriesRes}</h2>
    </section>
  );
};
export default Categories;
