"use client";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardUser,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

import Link from "next/link";

import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Course Name",
    dataIndex: "CourseName",
    key: "course",
  },
  {
    title: "Password",
    dataIndex: "Password",
    key: "password",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Edit</a>,
  },
];
const data = [
  {
    key: 2,
    name: "Jim Green",
    CourseName: "web And mobile",
    Password: 123456,
  },
  {
    key: 2,
    name: "Jim Green",
    CourseName: "web And mobile",
    Password: 123456,
  },
  {
    key: 2,
    name: "Jim Green",
    CourseName: "web And mobile",
    Password: 123456,
  },
  {
    key: 2,
    name: "Jim Green",
    CourseName: "web And mobile",
    Password: 123456,
  },
];

const AllStudents = () => {
  return (
    <main>
      <div className="flex gap-16">
        {/* first div  */}
        <div>
          <div className="flex flex-col mt-16">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <FontAwesomeIcon icon={faUser} style={{ height: "30px" }} />
              <span className="text-3xl">Students</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                marginLeft: "50px",
                marginTop: "30px",
              }}
            >
              <FontAwesomeIcon
                icon={faClipboardUser}
                style={{ height: "30px" }}
              />
              <Link className="text-3xl" href="/Attendence">
                Attendence
              </Link>
            </div>
          </div>
          <div className="absolute bottom-4 ms-24">
            <button className="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
              Logout
            </button>
          </div>
        </div>

        {/* second div  */}
        <div className="border-2 h-screen w-screen">
          <div className="flex justify-between items-center gap-80 ms-8 m-8">
            <div className="flex  justify-center items-center gap-2 p-8 ">
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  height: "30px",
                  backgroundColor: "#5C93FA",
                  padding: "15px",
                  color: "white",
                  borderRadius: "60px",
                }}
              />
              <span className="text-4xl">Students</span>
            </div>
            {/* <Button>Add Student</Button> */}
            <div className="flex justify-center items-center gap-2 bg-[#5C93FA] p-6 rounded-lg h-[20px]">
              <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
              <span style={{ color: "white" }}>Add Student</span>
            </div>
          </div>

          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {record.description}
                </p>
              ),
              rowExpandable: (record) => record.name !== "Not Expandable",
            }}
            dataSource={data}
          />
        </div>
      </div>
    </main>
  );
};

export default AllStudents;
