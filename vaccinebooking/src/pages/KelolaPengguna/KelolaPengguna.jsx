import React, { useState, useEffect } from "react";

// import component
<<<<<<< HEAD
import Select from "../../component/PageComponent/Select";
=======
import Select from '../../component/PageComponent/Select';
import TablePengguna from '../../component/KelolaPenggunaTable/TablePengguna';
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae

//style
import "../../assets/Style/style.css";
import Sidebar from "../../component/Sidebar/Sidebar";

// icon
<<<<<<< HEAD
import { FaUserPlus } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import TablePengguna from "../../component/KelolaPenggunaTable/TablePengguna";

// Api
import api from "./../../API/data/post";
=======
import {AiOutlineSearch } from 'react-icons/ai';

// Api
import api from './../../API/data/post'
import PopUpPengguna from '../../component/KelolaPenggunaTable/PopUpPengguna';
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae

const KelolaPengguna = () => {
  const [input, setInput] = useState();
  const [count, setCount] = useState(0);
  const [dataPengguna, setDataPengguna] = useState([]);

  // funtion
  const onChangeInput = (e) => {
    const input = e.target.value;
<<<<<<< HEAD
    setInput(input);
  };

  const handleSearch = () => {
    setCount(1 + input);
  };

  // const handleNumber=() => {
  //   is
  // }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/pengguna");
        setDataPengguna(response.data);
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error ${err.message}`);
=======
    setInput(input)
  }
  
  const handleSearch=() =>{
    setCount(1+input)
  }
 
  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const response = await api.get("/pengguna")
            setDataPengguna(response.data);
        } catch(err){
            if(err.response){
                //not in the 200 response range
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }else{
                console.log(`Error ${err.message}`);
            }
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae
        }
      }
    };
    fetchPosts();
<<<<<<< HEAD
  }, []);
  // // console.log(`length, ${dataPengguna.length}`)
  console.log(dataPengguna);

  return (
    <>
      <div className="Fontcolor-Dasboard">
        <div className="row me-5">
          <div className="col-3">
            <Sidebar />
=======
},[])
// // console.log(`length, ${dataPengguna.length}`)
// console.log(dataPengguna)


  return (
    <>
    <div className='Fontcolor-Dasboard'>
      <div className='row me-5'>
        <div className='col-3'>
          <Sidebar/>
        </div>


        {/* content */}

        <div className='col-9 mt-5'>
          <div className='row'>
            {/* Title */}
            <div className='col-6'>
              <h1 className='fz-Head'>
                Kelola Data
              </h1>
              <h1 className='fz-Title'>
                Pengguna 
              </h1>
            </div>
            
            {/* handle */}
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae
          </div>

          {/* content */}

          <div className="col-9 mt-5">
            <div className="row">
              {/* Title */}
              <div className="col-6">
                <h1 className="fz-Head">Kelola Data</h1>
                <h1 className="fz-Title">Pengguna</h1>
              </div>

              {/* handle */}
            </div>
            <div className="row Margin-top-Serch align-items-end d-flex">
              <div className="col-6 d-flex TotalPengguna">
                <div>
                  <p className="Fz-16">Total</p>
                </div>
                <div className="ms-2 Select15">
                  <Select onChangeInput={onChangeInput} />
                </div>
                <div className="d-flex">
                  <div>
                    <p className="ms-2 Fz-16 me-2">entri</p>
                  </div>
                  <div className="border border-dark d-flex w-100 BorderRadiusInline">
                    <div
                      className="ms-3 me-3 PointerClikCss"
                      onClick={handleSearch}
                    >
                      <AiOutlineSearch />
                    </div>
                    <div className="d-flex ">
                      <input
                        type="text"
                        style={{
                          width: "251px",
                          height: "24px",
                          border: "none",
                          borderRadius: "2px",
                        }}
                        placeholder="Cari"
                        onChange={onChangeInput}
                      />
                    </div>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              <div className="col-6 d-flex justify-content-end"></div>
=======
            <div className='col-6 d-flex justify-content-end'>
              
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae
            </div>

            {/* table  */}
            <div className="row mt-4 background-color-Table ">
              <div className="col-1">No</div>
              <div className="col-4">Nama Pengguna</div>
              <div className="col-3">No. Hp</div>
              <div className="col-3">NIK</div>
              <div className="col-1">Action</div>
            </div>
            {/* isi table */}
            <div className="TabelkelolaBerita row Border-Color-Box mb-2">
              {dataPengguna.map((data, index) => {
                return (
                  <TablePengguna
                    Number={index + 1}
                    key={data.id}
                    nama={data.nama}
                    nohp={data.noHp}
                    NIK={data.nik}
                  />
                );
              })}
            </div>
          </div>
<<<<<<< HEAD
=======
          {/* isi table */}
          <div className='TabelkelolaBerita row Border-Color-Box mb-2'>
            {dataPengguna.map((data, index)=>{
              return(
                <TablePengguna Number={index + 1} key={data.id} nama={data.nama} nohp = {data.noHp}  NIK={data.nik} alamat = {data.alamat} pengguna = {data}   />
              )

            })}
          </div>
>>>>>>> ad1752ce9156dc51cc73ab2928c292b8233db8ae
        </div>
      </div>
    </>
  );
};

export default KelolaPengguna;
