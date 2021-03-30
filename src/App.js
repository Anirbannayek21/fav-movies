import './App.css';
import Cards from './component/Cards';
// import Name from './component/Name';
// import ShowCal from './component/ShowCal';
// import Time from './component/Time';
import sdata from '../src/sdata'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Heading from './component/Heading'

function App() {
  return (
    <>

      {/* <Name/>
      <Time/>
      <ShowCal/> */}

      <Heading />
      {/* <div class="container">
        <div class="row lg-3">
          {sdata.map((val) => {
            return (
              <div className="col">
                <Cards
                  img={val.img}
                  name={val.name}
                  site={val.site}
                  link={val.link}
                />
              </div>
            )})
          }
        </div>
      </div> */}

      <div class="container">
        <div class="row">
          {sdata.map((val) => {
            return (
              <div className="col-sm">
                <Cards
                  img={val.img}
                  name={val.name}
                  site={val.site}
                  link={val.link}
                />
              </div>
            )
          })
          }
        </div>
      </div>

    </>
  );
}

export default App;
