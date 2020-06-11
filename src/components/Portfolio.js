import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio1 && resumeData.portfolio1.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <h2><b>{item.name1}</b></h2>
                      <img src={`${item.imgurl1}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name1}</h5>
                          <p>{item.description1}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio2 && resumeData.portfolio2.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <h2><b>{item.name2}</b></h2>
                      <img src={`${item.imgurl2}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name2}</h5>
                          <p>{item.description2}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <h2><b>{item.name}</b></h2>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}