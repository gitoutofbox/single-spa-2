export default function Root(props) {
  return (
    <section>


      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <h1>React Demo App</h1>


          <hr className="col-3 col-md-2 mb-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
          <div className="row g-5">
            <div className="col-md-6">
              {props.name} is mounted!
            </div>
          </div>
        </main>
      </div>

    </section>
  );
}
