import React from 'react'
export default function BoxColor({r, g, b}) {
    let styles = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      // margin: "10px 0px",
      padding: "20px"
    }
    return (
      <div style={styles}>rgb({r},{g},{b})</div>
    );
}