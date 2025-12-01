import Carousel from "../components/Carousel.jsx";

export default function Card() {
    return (
        <div className="card bg-white w-auto shadow-sm">
  <figure>
    <Carousel />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">Isabella 42 Jahre</h2>
    <p>Sucht neue Freunde zum Treffen!</p>
    <div className="card-actions justify-center gap-4">
      <button className="btn bg-white text-red-700 px-4 rounded-lg">Skip</button>
       <button className="btn btn-primary">Share</button>
       <button className="btn btn-primary">Like</button>
    </div>
  </div>
</div>
    );
}
//--- skipButtton mit Json anpassen in Zukunft ---//
//--- likeButtton mit beim click Herz hoch runter dabei noch 10 punkte  ---//