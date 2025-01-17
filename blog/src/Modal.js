function Modal(props) {
  let index = props.index;
  return (
    <div className="modal" 
    style={{background:props.color}}>
      <h4>{props.title[index]}</h4>
      <p>{props.createDate[index]}</p>
      <p>{props.content[index]}</p>
    </div>
  );
}

export default Modal;