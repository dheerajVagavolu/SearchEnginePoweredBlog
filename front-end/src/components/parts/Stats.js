import React from "react";
import { Table } from "react-bootstrap";

const Stats = () => {
  const cont_style = {
    padding: "30px",
  };

  return (
    <>
      <div style={cont_style} className="container">
        <Table bordered>
          <tbody>
            <tr>
              <td>Number of Success Stories</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Following</td>
              <td>125</td>
            </tr>
            <tr>
              <td>Number of People Inspired</td>
              <td>3124</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Stats;
