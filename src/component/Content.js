import React from "react";
import NewsBlock from "./NewsBlock";
// import packageData from "./data";
export default function Content(props){
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 align="center">BREAKING NEWS</h1>
                    </div>      
                </div>
            </div>
            <div className="news-columns row">
          {
            // loading
            //   ? "Loading..."
            //   :
            props.news.map(function (newsItem) {
              return <NewsBlock newsitem={newsItem} />;
            })
          }
        </div>
        </section>
    )
}
