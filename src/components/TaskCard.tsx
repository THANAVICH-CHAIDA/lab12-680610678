import { type TaskCardProps } from "../libs/Todolist"; // หรือ path ของไฟล์ interface

export default function TaskCard(props: TaskCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          
          <div className="col-lg-4">
            <h5
              className={`card-title m-0 ${
                props.isDone ? "text-decoration-line-through" : ""
              }`}
            >
              {props.title}
            </h5>
          </div>

          
          <div className="col-lg-4">
            <p className="card-text m-0 text-muted">{props.description}</p>
          </div>

          
          <div className="col-lg-2">
            <button className="btn btn-success w-100">Done</button>
          </div>

          
          <div className="col-lg-2">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}