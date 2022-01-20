import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

import "./carouse.css";

const Carouse = () => {
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
  };

  return (
    <div>
      <h1 className="video_title">Tips videos</h1>
      <Carousel>
        <Carousel.Item>
          <YoutubeEmbed embedId="72TCBR9CFjQ" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="ldSCQS_Yngw" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="JayrGuPywTI" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="HIURSQPRcO0" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="I6Ww5blG-5M" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="lomMIbmjC7w" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="wIv7_msg32Y" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="vnLckEmMP8Q" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="-AbTYVDPmAA" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed embedId="OuIARDznbFo" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouse;
