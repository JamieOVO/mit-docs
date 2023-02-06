import Table from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar";
import data from "../../data/smhc.json";

function Smhc() {
  return (
    <>
      <div className="feature-main">
        <Sidebar data={data} />
        <Table data={data} title="Smart troubleshooting tool - Documentation" />
      </div>
    </>
  );
}

export default Smhc;
