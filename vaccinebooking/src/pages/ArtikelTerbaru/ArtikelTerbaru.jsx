import React, { useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
// style
// import "./../../assets/Style/style.css";
import { Grid } from "@mui/material";

import {BsFileEarmarkImage} from 'react-icons/bs'
import axios from "axios";

// api 
import {URL} from "../../API/URL";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ArtikelTerbaru = () => {
  // initial state and valiables
  const [imagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  // function 
  // handleChange
  const handleName =(e)=>{
    setTitle(e.target.value);
  }
  const handleAuthor =(e)=>{
    setAuthor(e.target.value);
  }
  const handleBody=(e)=>{
    setBody(e.target.value);
  }
const handleImage=(e)=>{
  setImage(e.target.files[0])
}
  // testing
  console.log(`Image`,image, title, author, body )

  const handleSubmit =(e)=>{
    if(title === "" || author === "" || body === "" || image === ""){
      Swal.fire({
        icon: "error",
        title: "error",
        text: "data harus terisi semua",
      })
    }else{
      e.preventDefault();
      const formData = new FormData();
      formData.append("titleNewsVaccine", title);
      formData.append("authorNewsVaccine", author);
      formData.append("contentNewsVaccine", body);
      formData.append("file", image);
      try{
        const response =  axios({
          method: "post",
          url: `${URL}/news`,
          data: formData,
          headers: {"Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
          },
        })
        response.then((response)=>{
          // console.log(response);
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "berita berhasil tambah",
          }).then(()=>{
          navigate("/KelolaBerita");
          })
        })
      }catch(error){
        Swal.fire({
          title: "salah"
        })
      }
      navigate("/KelolaBerita");
    }
  }

  return (
    <div className="Fontcolor-Dasboard">
      <div className="row me-5 borderInput">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5 text-secondary" style={{ color: " #4E7EA7" }}>
          <div className="title-das ">
            <h4>Tambahkan</h4>
            <h1>Berita Terbaru</h1>
          </div>

          <div className=" table-header row mt-4 background-color-Table  justify-content-center">
            <h6 style={{ marginTop: "1rem",color: "#FFFFFF" }}>
              Silahkan Masukan Data sesuai dengan bagian yang telah di sediakan
            </h6>
          </div>

          {/* isi Form */}
          <div className="FormArtikelTerbaru row " >
            <div className="d-flex FormArtikelTerbaru justify-content-start">
              <div style={{width: "100%", color: " #4E7EA7"}}>
                <h6 style={{ marginTop: "2rem", color: "#4E7EA7"}}>
                  Judul Berita
                </h6>
                <input required  type="text" className="FormArtikel p-1 p-3 rounded-2 padding-input" style={{width: "100%", border: "none"}}
                  onChange={handleName}
                  value={title}
                />
                <h6 style={{ marginTop: "1rem",color: "#4E7EA7" }}
                >
                  Author
                </h6>
                <input required type="text" className="w-100 FormArtikel p-1 p-3 rounded-2 padding-input" style={{ border: "none",}}
                  onChange={handleAuthor}
                  value={author}
                />
                {/* <input required type="file"  style={{ display: "none"}} onChange={handleImage}
                /> */}
                <Grid container columnSpacing={{ xs: 2 }}>
                  <Grid item xs={8}>
                    <Grid container>
                      <Grid container item xs>
                        <h6 style={{ marginTop: "1rem", color: "#4E7EA7" }}>
                          Isi Berita
                        </h6>
                      </Grid>
                    </Grid>
                    <textarea type="text" className="w-100 FormArtikel p-1 p-3 rounded-2 padding-input"
                      style={{ border: "none",height: "20rem",resize: "none"}}
                      onChange={handleBody}
                      value={body}
                      required
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div>
                      <h6 style={{marginTop: "1rem",color: "#4E7EA7"}}>
                        Upload Gambar Cover
                      </h6>
                      {imagePreview === "" ? (
                        <div>
                          <div
                            style={{width: "100%", height: "20rem", border: "dashed 2px #4E7EA7", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer",}}>
                            <div style={{height: "50%", paddingTop:"30px", borderRadius:"10px" , backgroundColor:"#D9D9D9"}} className="card">
                              <div className="image-upload">
                                <label for="file-input">
                                  <BsFileEarmarkImage className=" image-size-uploadimage1" />
                                </label>
                                <input required id="file-input" type="file" onChange={handleImage} />
                              </div>
                            </div>
                            <div
                              style={{textAlign: "center", fontSize: "10px", marginTop: "1rem", color: "#4E7EA7"}}>
                              <p>
                                {image && image.name ? (
                                  <span className="d-flex justify-content-center ">{image.name}</span>
                                ):(
                                  <span>
                                    Upload Foto Fasilitas Kesehatan Anda <br />{" "}
                                    Ukuran foto tidak lebih dari 10mb{" "}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "20rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <img src={imagePreview} height="100%" alt=""/>
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                      </div>
                        </div>
                      <div className="text-end mt-3">
                          <button className="btn-kelola-jadwal1 me-3  rounded-3 mb-5 PointerClikCss " onClick={(e)=>navigate('/KelolaBerita')}>
                            Batal
                          </button>
                          <button className="btn-kelola-jadwal ms-3  rounded-3 mb-5 PointerClikCss " onClick={handleSubmit} type="submit">
                            Simpan
                          </button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelTerbaru;
