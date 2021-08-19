const Dropdown = ({ list, classSelect, title, titleClass, handleChange, name, id }) => {

  return (
    <>
      {title ? (
        <label htmlFor={id} className={titleClass}>{title}</label>
      ) : ''}
      <select name={name} id={id} onChange={handleChange} className={classSelect}>
        {list && list.map((item, index) => (
          <option value={item} key={index}>{item}</option>
        ))}
      </select>
    </>

  );
}

export default Dropdown;