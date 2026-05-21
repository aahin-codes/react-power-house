
import { MoreCard } from "../_components/card/MoreCard";
import { FaReact } from "react-icons/fa";
import { Table } from "../_components/table/Table";
import "./_CustomPage.scss"
import { Example } from "../_components/example/Example";
import { useOutletContext ,useNavigate } from "react-router-dom";

type HookData = {
  hookName: string;
  shortDescription: string;
  description: string;
  parameters: {
    headers: string[]
    rows: string[][]
  },
  returnValues: {
    headers: string[]
    rows: string[][]
  },
  example: {
    code: string,
    language: string
  }
}
const CustomPage = () => {

  const navigate = useNavigate();
  const {hookData}:{hookData:HookData} = useOutletContext();
  


  return (
    <div className="custom-container">
      <div className="header-section">
        <div className="wrapper">
          <nav>
            <span onClick={
              () => {
                navigate("/")
              }
            }>All hooks</span>
            <span>{hookData.hookName}</span>
          </nav>
          <h2>{hookData.hookName}</h2>
          <p>{hookData.shortDescription}</p>
        </div>
      </div>
      <div className="content-section">
        <h3>Description</h3>
        <p dangerouslySetInnerHTML={{__html:hookData.description}}></p>
        <h3>Parameters</h3>
        <Table headers={hookData.parameters.headers} rows={hookData.parameters.rows} />
        <h3>Return Values</h3>
        <Table headers={hookData.returnValues.headers} rows={hookData.returnValues.rows} />
        {/* <h3>Demo</h3> */}
        {/* <Demo/> */}
        <h3>Example</h3>
        <Example code={hookData.example.code} language={hookData.example.language} name={hookData.hookName} />
        <h3>More Hooks</h3>
        <div className="more-hooks-section">
          <MoreCard icon={FaReact} title="useState" shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, doloremque?" link="/react-power-house/hooks/useState" />
          <MoreCard icon={FaReact} title="useEffect" shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, doloremque?" link="/react-power-house/hooks/useEffect" />
          <MoreCard icon={FaReact} title="useContext" shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, doloremque?" link="/react-power-house/hooks/useContext" />
        </div>
      </div>
    </div>
  )
}

export default CustomPage;