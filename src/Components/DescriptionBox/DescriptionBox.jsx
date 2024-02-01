import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto iure
          accusantium eaque, ipsa dignissimos laudantium. Repellat tenetur
          dolores architecto error nostrum voluptatibus cumque porro quaerat
          ullam impedit omnis esse, consequatur odio doloribus eum aspernatur
          modi necessitatibus aperiam est. Obcaecati, ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
          quam earum eligendi totam voluptatem, fuga a quos minima velit quasi
          optio ab praesentium voluptates laboriosam facilis laborum sapiente
          voluptatum!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
