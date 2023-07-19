import React from "react";
import SideMenu from "../components/SideMenu";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ProdData from "../data/product.json";

const Benefit = () => {
  /* start map data from json */
  const DisplayData = ProdData.map((info) => {
    return (
      <Tr>
        <Td>
          <img src={info.image} alt="" className="img-table" />
        </Td>
        <Td className="text-center">{info.product}</Td>
        <Td className="text-center">{info.price}</Td>
        <Td className="text-center">{info.list}</Td>
      </Tr>
    );
  });
  
  return (
    <div className="container">
      <div className="header">
        <h1>Table of Benefits</h1>
      </div>
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-8 col-md-7 col-12">
          <div>
            <Table className="table-product">
              <Thead className="border-headtable">
                <Tr>
                  <Th className="text-center"></Th>
                  <Th className="text-center">สินค้า</Th>
                  <Th className="text-center">ราคา</Th>
                  <Th className="text-center">คอมมิชชั่น/รายการ</Th>
                </Tr>
              </Thead>
              <Tbody>{DisplayData}</Tbody>
            </Table>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-12">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
