import React from "react";
import "./skillset.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SKILLSET_DATA as skillsetData } from "../../constants/data";

export default function Skillset() {

  return (
    <section id="skillset">
      <h5>Tools I Know</h5>
      <h2>Tech Stack</h2>
      <div className="container skillset_container">
        {
          Object.keys(skillsetData).map(key => (
            <div>
              <h3>{key}</h3>
              <div className="skillset_content">
                {skillsetData[key].map(item => (
                  <article className="skillset_details">
                    <BsPatchCheckFill className="skillset_content_icon" />
                    <div>
                      <h4>{item}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
          )
        }
      </div>
    </section>
  );
}
