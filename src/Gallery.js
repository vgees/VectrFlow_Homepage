import React from "react";
import "./Gallery.css";
import mission from "./public/RAG.png";
import approach from "./public/Metadata.png";
import vfe from "./public/WebPage.png";
import qa from "./public/Vectara.png";
import collab from "./public/MPC.png";
import exp from "./public/CRA.png";
const Gallery = () => {
    return (
        <div className="about-us">
            <div className="div">
                <div className="overlap">
                    <div className="frame-3">
                        <div className="frame-4">
                            <div className="text-wrapper-3">Demo</div>
                            <p className="p">
                                Welcome to VectrFlow, here's a demo to how you could transform unstructured data into insightful narratives, unlocking the power of information for your Generative AI applications. <br></br>With low code approach, we enable quick iterations to go from testing to production.</p>

                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="frame-5">
                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="rectangle" />
                                <div className="text-wrapper-5">
                                    RAG on PDF</div>
                            </div>
                        </div>
                        <p className="text-wrapper-6">
                            One of the most powerful applications enabled by LLMs is sophisticated question-answering (Q&A) chatbots. These are applications that can answer questions about specific source information. These applications use a technique known as Retrieval Augmented Generation, or RAG.</p>
                        <div className="overlap-2">

                            <img className="polygon" alt="Polygon" src={mission} />

                        </div>

                    </div>
                    <div className="overlap-3">
                        <div className="overlap-4">

                            <img className="polygon-2" alt="Polygon" src={approach} />

                        </div>

                        <div className="frame-15">
                            <div className="frame-16">
                                <div className="frame-17">
                                    <div className="rectangle-2" />
                                    <p className="text-wrapper-8">Metadata filter</p>
                                </div>
                                <p className="text-wrapper-9">
                                    Upsert multiple files with metadata and filter it by using conversational retrieval QA Chain</p>
                            </div>
                            {/* <div className="frame-8">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group">
                                        <div className="ellipse" />
                                        <div className="ellipse-2" />
                                    </div>
                                </div>
                                <div className="text-wrapper-7">View More</div>
                            </div> */}
                        </div>
                    </div>
                    <div className="frame-18">
                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="rectangle" />
                                <p className="text-wrapper-5">
                                    WebpPage QnA

                                </p>
                            </div>

                            <p className="text-wrapper-10">
                                Scrape web pages for QnA with long term memory Motorhead and return source documents </p>

                        </div>
                        {/* <div className="frame-8">
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group">
                                    <div className="ellipse" />
                                    <div className="ellipse-2" />
                                </div>
                            </div>
                            <div className="text-wrapper-7">View More</div>
                        </div> */}
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-5">

                            <img className="polygon-3" alt="Polygon" src={vfe} />

                        </div>
                    </div>

                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="text-wrapper-11">Here are some other flows to try</div>
                        {/* <img className="frame-23" alt="Frame" src="frame-11.svg" /> */}
                    </div>
                    <div className="frame-27">
                        <div className="frame-28">
                            <img className="frame-29" alt="Frame" src={exp} />
                            <div className="frame-30">
                                <div className="text-wrapper-14">Conversational Retrieval Agent</div>
                                <p className="text-wrapper-15">
                                    Agent optimized for vector retrieval during conversation and answering questions based on previous dialogue.</p>
                            </div>
                        </div>
                        <div className="frame-28">
                            <img className="frame-31" alt="Frame" src={collab} />
                            <div className="frame-30">
                                <div className="text-wrapper-14">Multi prompt chain</div>
                                <p className="text-wrapper-15">
                                    A chain that automatically picks an appropriate prompt from multiple prompts.</p>
                            </div>
                        </div>
                        <div className="frame-28">
                            <img className="frame-32" alt="Frame" src={qa} />
                            <div className="frame-30">
                                <div className="text-wrapper-14">Vectara LLM Chain Upload</div>
                                <p className="text-wrapper-15">
                                    A simple LLM Chain that uses Vectara to enable conversations with uploaded files</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rectangle-3" />
            </div>
        </div>
    );
};

export default Gallery;
