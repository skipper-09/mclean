const Childfeatures = (props) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div className="box" data-aos="fade-up" data-aos-delay="200">
        <img src={props.imgUrl} className="img-fluid" alt="" />
        <h3>{props.judul}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Childfeatures;
