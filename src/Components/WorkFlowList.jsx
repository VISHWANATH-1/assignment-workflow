import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WorkFlowPage.css";
const WorkFlowList = () => {
  const [tableData, setTableData] = useState();
  useEffect(() => {
    axios
      .get("https://64307b10d4518cfb0e50e555.mockapi.io/workflow")
      .then((response) => {
        setTableData(response.data);
      });
  }, []);
  return (
    <>
    <h3 className="heading">WorkFlows</h3>
    {
        tableData &&
        <div className="main-con">
        
        <div className="table-container">
          <table>
            <ul>
            <th>Name</th>
            <th>input_type</th>
            <th>createdAt</th>
            <tbody>
              {tableData.map((ata) => (
  
                <tr>
                  <td style={{textDecoration:"underline"}}>{ata.name}</td>
                  <td>{ata.input_type}</td>
                  <td>{ata.createdAt.split('T')[0]}</td>
                </tr>
              
              ))}
              
              </tbody>
            </ul>
          </table>
        </div>
      </div>
    }
    
    </>
   
  );
};

export default WorkFlowList;
