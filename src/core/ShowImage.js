import React from "react";
import { API } from "../config";

// La función flecha sera de () ya que no procesara logica, no requiere {}
// solo se procesaran div, imagenes, etc.
const ShowImage = ({ item, url }) => (
  <div className="product-img">
    <img src={`${API}/${url}/photo/${item._id}`} alt="item.name" className="mb-3" style={{ maxHeight: "100%", maxWidth: "100%" }} />
  </div>
);

export default ShowImage;