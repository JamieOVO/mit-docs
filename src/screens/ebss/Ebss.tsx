import Table from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar";
import data from "../../data/ebss.json";

function Ebss() {
  return (
    <>
      <div className="feature-main">
        <Sidebar data={data} path="winter-support-tool" />
        <Table data={data} title="Winter Support Tool - Documentation" />
      </div>
    </>
  );
}

export default Ebss;
