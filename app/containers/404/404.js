/**
 * Created by ZJ on 2018/6/5.
 */
import React from "react";

import "./noMatch.css"

export default ({location})=>(
  <div className="title-center">
   No match for <code>{location.pathname}</code>
  </div>
)

