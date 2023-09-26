import React from "react";

const PhotoPage = (props) => {
  const { id, photoid } = props.params;
  return (
    <div>
      PhotoPage {id} {photoid}
    </div>
  );
};

export default PhotoPage;
