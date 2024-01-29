import React from "react";
import "./Blogs.css";
import Blog1 from "./public/Blog1.png";
import Blog2 from "./public/Blog2.png";
// import Blog3 from "./public/Blog3.png";
const Blogs = () => {
    return (
        <div className="desktop-detail">
            <div className="div">

                <div className="section-side-card">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper">Emerging 📈</div>
                        </div>
                    </div>
                    <img className="article-side-card" alt="Blog 1" src={Blog1} />
                    <img className="img" alt="Blog 2" src={Blog2} />
                    {/* <img className="article-side-card-2" alt="Blog 3" src={Blog3} /> */}
                </div>
                {/* <div className="section-side">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">Kategori</div>
                        </div>
                    </div>
                    <div className="group-2">
                        <div className="label">&gt; Label 1</div>
                        <div className="text-wrapper-3">(1)</div>
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-4">(2)</div>
                        <div className="label-2">&gt; Label 2</div>
                    </div>
                </div> */}
                {/* <footer className="footer">
                    <div className="overlap">
                        <div className="text-wrapper-5">Copyright@KangTutor</div>
                    </div>
                </footer> */}
                <div className="article">
                    <div className="overlap-group-wrapper">
                        <div className="home-html-apa-itu-wrapper">
                            <p className="home-html-apa-itu">Welcome to VectrFlow Blogs!</p>
                        </div>
                    </div>
                    <div className="group-4">
                        <p className="p">What is Generative AI?</p>
                        <div className="group-5">
                            <p className="by-ridho-satriawan">
                                <span className="span">By </span>
                                <span className="text-wrapper-6">Ganapathy Shankar</span>
                            </p>
                            <div className="text-wrapper-7">24 January 2024</div>
                        </div>
                    </div>
                    <p className="apa-itu-HTML-buat">
                        <span className="span">Apa itu HTML ?</span>
                        <span className="text-wrapper-8">
                            &nbsp;&nbsp;
                            <br />
                        </span>
                        <span className="text-wrapper-9">
                            <br />
                            Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML.
                            Sebenarnya apa sih HTML itu ? Kenapa menggunakan HTML untuk membuat website ? <br />
                        </span>
                        <span className="text-wrapper-8">
                            {" "}
                            <br />
                        </span>
                        <span className="span">Pengertian</span>
                        <span className="text-wrapper-8">
                            {" "}
                            <br />
                            <br />
                        </span>
                        <span className="text-wrapper-9">
                            HTML merupakan singkatan dari Hyper Text Markup Language, merupakan bahasa markup standard yang digunakan
                            untuk menampilkan dokumen ke Web Browser seperti Google Chrome dan Edge. HTML biasanya digunakan bersama
                            teknologi lainya, seperti Cascading Style Sheets (CSS) dan bahasa scripting seperti
                            Javascript.&nbsp;&nbsp;
                            <br /> <br />
                            Struktur di dalam HTML terdiri dari serangkaian elemen, elemen tersebut berfungsi untuk memberi informasi
                            kepada Web Browser tentang cara menampilkan konten. Elemen dalam HTML memiliki banyak jenis dan memiliki
                            fungsinya masing-masing, seperti elemen paragraf , input, judul dan lainya. Pada umumnya elemen terdiri
                            dari tag pembuka, konten dan tag penutup, ada juga sebagian elemen yang tidak memiliki tag penutup dan
                            konten. <br /> <br />
                            Sedangkan tag itu sendiri ditulis dengan cara diapit tanda kurung sudut dan untuk tag penutup diberi garis
                            miring sebelum nama tagnya, sebagai contoh &lt;p&gt; &lt;/p&gt;. Sedangkan untuk elemen yang hanya
                            menggunakan satu tag, cara penulisanya diberi garis miring setelah nama tag contohnya &lt;img /&gt;.
                        </span>
                        <span className="text-wrapper-8">
                            {" "}
                            <br /> <br />
                        </span>
                        <span className="span">
                            Sejarah Singkat <br />
                            <br />
                        </span>
                        <span className="text-wrapper-9">
                            HTML pertama kali dicetus pada tahun 1980 oleh Tim Berners-Lee, pada saat itu dia sedang bekerja di salah
                            satu perusahaan yang bernama CERN (European Organization for Nuclear Research), dia mengusulkan untuk
                            membuat sebuah sistem yang bernama ENQUIRE yang berfungsi untuk mengelola dokumen perusahaan. <br />{" "}
                            <br />
                            Kemudian pada tahun 1990 Berners-Lee dan timnya yang berasal dari perusahaan yang sama mulai mencari
                            pendanaan untuk projeknya akan tetapi tidak berjalan dengan lancar. HTML mulai dipublikasikan pada tahun
                            1991 dan memiliki 18 tag, hingga sekarang HTML mengalami perkembangan.
                        </span>
                    </p>
                    <p className="penutup-HTML-pertama">
                        <span className="span">
                            Penutup
                            <br />
                            <br />
                        </span>
                        <span className="text-wrapper-10">
                            HTML pertama kali dicetus pada tahun 1980 oleh Tim Berners-Lee, pada saat itu dia sedang bekerja di salah
                            satu perusahaan yang bernama CERN (European Organization for Nuclear Research), dia mengusulkan untuk
                            membuat sebuah sistem yang bernama ENQUIRE yang berfungsi untuk mengelola dokumen perusahaan. <br />{" "}
                            <br />
                            Kemudian pada tahun 1990 Berners-Lee dan timnya yang berasal dari perusahaan yang sama mulai mencari
                            pendanaan untuk projeknya akan tetapi tidak berjalan dengan lancar. HTML mulai dipublikasikan pada tahun
                            1991 dan memiliki 18 tag, hingga sekarang HTML mengalami perkembangan.
                            <br />
                        </span>
                    </p>
                    <img className="image" alt="Image" src=" image-1.png" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;