import '../styles/Form.css';

const Form = () => (
  <form className="add-form">
    <input type="text" placeholder="Title" />
    <input type="text" placeholder="Author" />
    <button type="button" className="add-btn">Add</button>
  </form>
);

export default Form;
