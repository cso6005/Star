import "../../css/constellation.css"
import React from 'react';

const dropdown = ({data, getConstellation}) => {

  console.log("드롭다운 확인")
  console.log(data)
  
  const onClick = (o) => {

        getConstellation(o.target.id);

    }

    return (


        <div className="dropdown-content">

          {data.length === 0 ? (
            <p>업데이트 중 입니다.</p>
          ) : (
            data.map((d) => (
              <li style={{listStyle:"none"}} key={d.constellationId} onClick={onClick} id={d.constellationId} >{d.constellationName}</li>
            )
            )
          )

          }
        </div>
      );

}

export default dropdown;